export default function HeroSection() {
  return (
    <div className="text-center mb-12 max-w-2xl">
      <div className="mb-6">
        <span className="text-xs font-mono text-accent uppercase tracking-widest">
          Blog Portal v1.0
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
        QuantumQuill
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light text-balance">
         IDEATION • INNOVATION • NETWORKING
      </p>

      <div className="inline-block px-4 py-1 border border-accent/30 rounded-full">
        <span className="text-sm font-mono text-accent">
          &gt; System ready for initialization
        </span>
      </div>
    </div>
  );
}
