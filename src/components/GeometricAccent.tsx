const GeometricAccent = () => {
  return (
    <div className="absolute top-2 right-8 w-32 h-32 animate-rotate-slow opacity-80">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const length = i % 2 === 0 ? 80 : 60;
          const x2 = 100 + length * Math.cos((angle * Math.PI) / 180);
          const y2 = 100 + length * Math.sin((angle * Math.PI) / 180);
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default GeometricAccent;
