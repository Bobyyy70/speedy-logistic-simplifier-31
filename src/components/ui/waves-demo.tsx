
import { Waves } from "@/components/ui/waves-background";

function WavesDemo() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 animate-wave-pulse">
        <Waves
          lineColor="rgba(255, 255, 255, 0.5)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={50}
          waveAmpY={30}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={8}
          yGap={25}
        />
      </div>

      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold">Interactive Waves</h3>
        <p className="text-muted-foreground">Move your mouse to interact with the waves</p>
      </div>
    </div>
  );
}

export { WavesDemo };
