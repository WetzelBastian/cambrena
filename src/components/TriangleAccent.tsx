const TriangleAccent = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 5 L35 35 L5 35 Z" />
      </svg>
    </div>
  );
};

export default TriangleAccent;
