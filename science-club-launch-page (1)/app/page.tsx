'use client';

import { useState } from 'react';
import ConsolePanel from '@/components/console-panel';
import HeroSection from '@/components/hero-section';

export default function Page() {
  const [isActivating, setIsActivating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleInitialize = () => {
    setIsActivating(true);
    setIsComplete(false);

    // Simulate 3-second loading sequence
    setTimeout(() => {
      setIsComplete(true);
      // Redirect after 2 more seconds
      setTimeout(() => {
        window.location.href = 'https://sciclubblogsvce-kifvt.wordpress.com';
      }, 2000);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated data visualization elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <HeroSection />
        
        <ConsolePanel 
          isActivating={isActivating}
          isComplete={isComplete}
          onInitialize={handleInitialize}
        />
      </div>
    </main>
  );
}
