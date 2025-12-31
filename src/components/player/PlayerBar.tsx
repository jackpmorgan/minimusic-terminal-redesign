import React, { useState, useEffect } from 'react';
import { usePlayerStore } from '@/lib/store';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Maximize2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
export function PlayerBar() {
  const currentTrack = usePlayerStore((s) => s.currentTrack);
  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const togglePlay = usePlayerStore((s) => s.togglePlay);
  const volume = usePlayerStore((s) => s.volume);
  const setVolume = usePlayerStore((s) => s.setVolume);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  return (
    <div className="h-20 border-t border-zinc-900 bg-zinc-950 flex flex-col z-20">
      {/* Progress Bar Top */}
      <div className="w-full h-1 bg-zinc-900 cursor-pointer relative group">
         <motion.div 
            className="absolute h-full bg-primary" 
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
         />
      </div>
      <div className="flex-1 px-4 flex items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-3 w-1/4 min-w-0">
          {currentTrack ? (
            <>
              <img src={currentTrack.cover} className="w-10 h-10 object-cover border border-zinc-800" alt="" />
              <div className="min-w-0">
                <div className="text-zinc-100 text-xs font-bold truncate">{currentTrack.title}</div>
                <div className="text-zinc-500 text-[10px] truncate uppercase">{currentTrack.artist}</div>
              </div>
            </>
          ) : (
             <div className="text-zinc-700 text-[10px] uppercase font-bold tracking-widest">IDLE_STATE</div>
          )}
        </div>
        {/* Controls */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-6">
            <button className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <Shuffle size={16} />
            </button>
            <button className="text-zinc-300 hover:text-primary transition-colors">
              <SkipBack size={20} fill="currentColor" />
            </button>
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-zinc-300 hover:text-primary transition-colors">
              <SkipForward size={20} fill="currentColor" />
            </button>
            <button className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <Repeat size={16} />
            </button>
          </div>
        </div>
        {/* Volume & Extras */}
        <div className="flex items-center gap-4 w-1/4 justify-end">
          <div className="hidden sm:flex items-center gap-2 w-24">
            <Volume2 size={16} className="text-zinc-500" />
            <Slider 
              value={[volume]} 
              max={100} 
              step={1} 
              onValueChange={(vals) => setVolume(vals[0])}
              className="w-20"
            />
          </div>
          <button className="text-zinc-500 hover:text-zinc-100">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}