import { useEffect, useRef } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";
import logoGif from "@/assets/cambrena-logo.gif";

interface LogoProps {
  className?: string;
}

// Plays a GIF exactly once using a canvas and freezes on the last frame
const Logo = ({ className = "h-24 object-contain" }: LogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    let playTimer: number | null = null;

    const play = async () => {
      try {
        const res = await fetch(logoGif);
        const buffer = await res.arrayBuffer();
        const gif = parseGIF(buffer);
        const frames = decompressFrames(gif, true); // build patches

        if (!isMounted || frames.length === 0) return;

        // Determine the logical canvas size
        const totalWidth = Math.max(
          ...frames.map((f: any) => f.dims.left + f.dims.width)
        );
        const totalHeight = Math.max(
          ...frames.map((f: any) => f.dims.top + f.dims.height)
        );

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle HiDPI rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(totalWidth * dpr);
        canvas.height = Math.round(totalHeight * dpr);
        canvas.style.width = totalWidth + "px";
        canvas.style.height = totalHeight + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Optional: clear to transparent/black
        ctx.clearRect(0, 0, totalWidth, totalHeight);

        // Render frames sequentially using their delays
        let i = 0;
        const drawFrame = () => {
          const frame = frames[i];
          const { dims, patch } = frame;

          // draw current frame patch
          const imageData = ctx.createImageData(dims.width, dims.height);
          imageData.data.set(patch);
          ctx.putImageData(imageData, dims.left, dims.top);

          if (i < frames.length - 1) {
            const delayMs = Math.max(20, (frame.delay || 10) * 10); // delay is in 1/100s
            playTimer = window.setTimeout(() => {
              i += 1;
              drawFrame();
            }, delayMs) as unknown as number;
          } else {
            // Last frame drawn — freeze here (no loop)
            playTimer = null;
          }
        };

        drawFrame();
      } catch (e) {
        // If parsing fails, fall back by just showing nothing (or could swap to <img>)
        // console.error(e);
      }
    };

    play();
    return () => {
      isMounted = false;
      if (playTimer) window.clearTimeout(playTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Cambrena Logo"
      className={className}
      style={{ display: "block" }}
    />
  );
};

export default Logo;
