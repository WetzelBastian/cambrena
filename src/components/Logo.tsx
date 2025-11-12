import { useEffect, useRef, useState } from "react";
import logo from "@/assets/cambrena-logo.gif";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-24 object-contain" }: LogoProps) => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Create a temporary image to measure GIF duration
    const img = new Image();
    img.src = logo;
    
    // Estimate GIF duration (typical animation length)
    // Most GIFs play in 2-4 seconds, we'll use a safe 3 seconds
    const animationDuration = 3000;
    
    const timer = setTimeout(() => {
      setHasPlayed(true);
      // Force reload with cache-busting to freeze on last frame
      if (imgRef.current) {
        const timestamp = new Date().getTime();
        imgRef.current.src = `${logo}?t=${timestamp}`;
      }
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <img 
      ref={imgRef}
      src={logo}
      alt="Cambrena Logo"
      className={className}
      style={{ pointerEvents: hasPlayed ? 'auto' : 'none' }}
    />
  );
};

export default Logo;
