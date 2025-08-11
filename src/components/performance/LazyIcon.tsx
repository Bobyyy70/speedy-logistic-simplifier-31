import React, { useEffect, useRef, useState } from "react";

interface LazyIconProps {
  importIcon: () => Promise<{ default: React.ComponentType<any> }>;
  className?: string;
  title?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

// Mounts the icon only when near/in viewport to avoid loading the icons chunk early
export const LazyIcon: React.FC<LazyIconProps> = ({ importIcon, className, title, ...rest }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [Icon, setIcon] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (!ref.current || isVisible) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "200px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isVisible]);

  useEffect(() => {
    let mounted = true;
    if (isVisible && !Icon) {
      importIcon().then((mod) => {
        if (mounted) setIcon(() => mod.default);
      }).catch(() => {});
    }
    return () => { mounted = false; };
  }, [isVisible, Icon, importIcon]);

  return (
    <span ref={ref} className={className} title={title} {...rest}>
      {Icon ? <Icon className={className} aria-hidden {...rest} /> : null}
    </span>
  );
};
