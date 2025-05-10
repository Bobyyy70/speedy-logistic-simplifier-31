
import { useRef, useEffect } from "react";
import { Noise } from "@/lib/noise/perlin-noise";

// Interface for a single point in the wave
interface WavePoint {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

// Interface for mouse state
interface MouseState {
  x: number;
  y: number;
  lx: number;
  ly: number;
  sx: number;
  sy: number;
  v: number;
  vs: number;
  a: number;
  set: boolean;
}

// Props for the wave effect
interface WaveEffectProps {
  lineColor: string;
  backgroundColor: string;
  waveSpeedX: number;
  waveSpeedY: number;
  waveAmpX: number;
  waveAmpY: number;
  xGap: number;
  yGap: number;
  friction: number;
  tension: number;
  maxCursorMove: number;
}

export function useWaveEffect({
  lineColor,
  backgroundColor,
  waveSpeedX,
  waveSpeedY,
  waveAmpX,
  waveAmpY,
  xGap,
  yGap,
  friction,
  tension,
  maxCursorMove,
}: WaveEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 });
  const noiseRef = useRef<Noise>(new Noise(Math.random()));
  const linesRef = useRef<WavePoint[][]>([]);
  const mouseRef = useRef<MouseState>({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    ctxRef.current = canvas.getContext("2d");
    if (!ctxRef.current) return;

    // Set the canvas size
    function setSize() {
      if (!containerRef.current || !canvasRef.current) return;
      boundingRef.current = container.getBoundingClientRect();
      canvas.width = boundingRef.current.width;
      canvas.height = boundingRef.current.height;
    }

    // Initialize the lines
    function setLines() {
      const { width, height } = boundingRef.current;
      linesRef.current = [];
      const oWidth = width + 200,
        oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;
      
      for (let i = 0; i <= totalLines; i++) {
        const pts = [];
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          });
        }
        linesRef.current.push(pts);
      }
    }

    // Update the points based on noise and mouse position
    function movePoints(time: number) {
      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const noise = noiseRef.current;
      
      lines.forEach((pts) => {
        pts.forEach((p: WavePoint) => {
          const move =
            noise.perlin2(
              (p.x + time * waveSpeedX) * 0.002,
              (p.y + time * waveSpeedY) * 0.0015,
            ) * 12;
          p.wave.x = Math.cos(move) * waveAmpX;
          p.wave.y = Math.sin(move) * waveAmpY;

          const dx = p.x - mouse.sx,
            dy = p.y - mouse.sy;
          const dist = Math.hypot(dx, dy),
            l = Math.max(175, mouse.vs);
          if (dist < l) {
            const s = 1 - dist / l;
            const f = Math.cos(dist * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
          }

          p.cursor.vx += (0 - p.cursor.x) * tension;
          p.cursor.vy += (0 - p.cursor.y) * tension;
          p.cursor.vx *= friction;
          p.cursor.vy *= friction;
          p.cursor.x += p.cursor.vx * 2;
          p.cursor.y += p.cursor.vy * 2;

          p.cursor.x = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, p.cursor.x),
          );
          p.cursor.y = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, p.cursor.y),
          );
        });
      });
    }

    // Calculate the moved position of a point
    function moved(point: WavePoint, withCursor = true) {
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0);
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0);
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    }

    // Draw the lines on the canvas
    function drawLines() {
      if (!ctxRef.current) return;
      
      const { width, height } = boundingRef.current;
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      
      linesRef.current.forEach((points) => {
        let p1 = moved(points[0], false);
        ctx.moveTo(p1.x, p1.y);
        points.forEach((p: WavePoint, idx: number) => {
          const isLast = idx === points.length - 1;
          p1 = moved(p, !isLast);
          const p2 = moved(
            points[idx + 1] || points[points.length - 1],
            !isLast,
          );
          ctx.lineTo(p1.x, p1.y);
          if (isLast) ctx.moveTo(p2.x, p2.y);
        });
      });
      ctx.stroke();
    }

    // Animation loop
    function tick(t: number) {
      const mouse = mouseRef.current;

      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.lx,
        dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      container.style.setProperty("--x", `${mouse.sx}px`);
      container.style.setProperty("--y", `${mouse.sy}px`);

      movePoints(t);
      drawLines();
      requestAnimationFrame(tick);
    }

    // Event handlers
    function onResize() {
      setSize();
      setLines();
    }
    
    function onMouseMove(e: MouseEvent) {
      updateMouse(e.pageX, e.pageY);
    }
    
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      const touch = e.touches[0];
      updateMouse(touch.clientX, touch.clientY);
    }
    
    function updateMouse(x: number, y: number) {
      const mouse = mouseRef.current;
      const b = boundingRef.current;
      mouse.x = x - b.left;
      mouse.y = y - b.top + window.scrollY;
      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }
    }

    // Initialize and start animation
    setSize();
    setLines();
    requestAnimationFrame(tick);
    
    // Add event listeners
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    // Clean up
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove as EventListener);
    };
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
  ]);

  return { containerRef, canvasRef };
}
