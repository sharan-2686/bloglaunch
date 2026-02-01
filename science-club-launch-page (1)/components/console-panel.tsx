'use client';

import { useEffect, useState } from 'react';

interface ConsolePanelProps {
  isActivating: boolean;
  isComplete: boolean;
  onInitialize: () => void;
}

const CONSOLE_LOGS = [
  '> Booting narrative engine…',
  '> Indexing memories,ideas and untold stories…',
  '> Compiling thoughts into readable reality…',
  '> Aligning words with human curiosity…',
  '> Entering theblogoshere…',
  '> SYSTEM ONLINE',
];

export default function ConsolePanel({
  isActivating,
  isComplete,
  onInitialize,
}: ConsolePanelProps) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActivating) {
      setVisibleLogs([]);
      setProgress(0);
      return;
    }

    let logIndex = 0;
    let progressValue = 0;

    const logInterval = setInterval(() => {
      if (logIndex < CONSOLE_LOGS.length) {
        setVisibleLogs((prev) => [...prev, CONSOLE_LOGS[logIndex]]);
        logIndex += 1;
        progressValue = Math.min(100, progressValue + 15);
        setProgress(progressValue);
      } else {
        clearInterval(logInterval);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, [isActivating]);

  return (
    <div className="w-full max-w-2xl">
      <div className="border border-accent/30 rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Console Header */}
        <div className="border-b border-accent/20 px-6 py-4 bg-card/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-wide">
                System Console
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-2 h-2 rounded-full bg-accent/40" />
            </div>
          </div>
        </div>

        {/* Console Content */}
        <div className="px-6 py-6 font-mono text-sm min-h-64 bg-background/50">
          {!isActivating && !isComplete && (
            <div className="text-muted-foreground text-opacity-60">
              <p className="mb-2">&gt; Ready for system initialization</p>
              <p className="text-xs">Press Initialize Publication to begin</p>
            </div>
          )}

          {(isActivating || isComplete) && (
            <div className="space-y-2">
              {visibleLogs.map((log, index) => (
                <div key={index} className="text-accent/90">
                  {log}
                </div>
              ))}

              {isComplete && (
                <>
                  <div className="text-primary font-semibold mt-4">
                    &gt; SYSTEM ONLINE
                  </div>
                  <div className="text-muted-foreground mt-3 text-xs">
                    Redirecting to Blog Portal…
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {isActivating && (
          <div className="px-6 py-4 border-t border-accent/20 bg-card/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground">Progress</span>
              <span className="text-xs font-mono text-accent">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden border border-accent/20">
              <div
                className="h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="px-6 py-6 border-t border-accent/20 bg-card/80">
          <button
            onClick={onInitialize}
            disabled={isActivating || isComplete}
            className={`w-full py-3 px-4 font-mono font-semibold rounded-lg transition-all duration-300 border border-accent/40 ${
              isActivating || isComplete
                ? 'bg-card text-muted-foreground cursor-not-allowed opacity-50'
                : 'bg-accent/20 text-accent hover:bg-accent/30 hover:border-accent/60 active:scale-95'
            }`}
          >
            {isActivating ? 'Initializing…' : isComplete ? 'Redirecting…' : 'Initialize Publication'}
          </button>
        </div>
      </div>
    </div>
  );
}
