import GeometricAccent from "@/components/GeometricAccent";
import TriangleAccent from "@/components/TriangleAccent";
import logo from "@/assets/cambrena-logo.svg";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative flex items-center justify-center">
      {/* Geometric Accents */}
      <GeometricAccent />
      <TriangleAccent className="bottom-12 left-12 text-foreground opacity-40" />
      
      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src={logo} 
            alt="Cambrena Logo" 
            className="h-40 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-xs md:text-sm lg:text-lg font-bold mb-6 tracking-tight leading-none">
          PROJECT<br />BRIEF DECK
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-wide">
          Add a subtitle or the company tagline here
        </p>
      </main>
    </div>
  );
};

export default Index;
