import React from 'react';
import { MOCK_TRACKS, Track } from '@/lib/mock-data';
import { usePlayerStore } from '@/lib/store';
import { TerminalCard, TerminalButton } from '../ui/custom-components';
import { Play, Plus, Search, TrendingUp, Music } from 'lucide-react';
export function DiscoverView() {
  const playTrack = usePlayerStore((s) => s.playTrack);
  const addToQueue = usePlayerStore((s) => s.addToQueue);
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative h-64 border border-primary/20 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden group">
        <div className="absolute inset-0 opacity-10 terminal-grid pointer-events-none" />
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        <div className="relative z-10 p-8 flex flex-col justify-center h-full max-w-2xl">
          <div className="text-primary text-xs font-bold mb-2 flex items-center gap-2">
             <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
             FEATURED_DROP // EP_042
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4 tracking-tighter uppercase italic mono-outline">
            SYNTH_WAVE_SYSTEMS
          </h1>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed border-l-2 border-zinc-800 pl-4 italic">
            "Exploration of digital landscapes through frequency manipulation and rhythmic logic gates."
          </p>
          <div className="flex gap-4">
            <TerminalButton onClick={() => playTrack(MOCK_TRACKS[0])} className="flex items-center gap-2">
              <Play size={14} fill="currentColor" /> STREAM_NOW
            </TerminalButton>
            <TerminalButton variant="outline">COLLECT_ASSET</TerminalButton>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none hidden md:block">
           <Music className="w-full h-full text-primary scale-150 rotate-12" />
        </div>
      </section>
      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trending Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
             <div className="flex items-center gap-2">
               <TrendingUp size={16} className="text-primary" />
               <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Hot_Modules</h2>
             </div>
             <button className="text-[10px] text-zinc-500 hover:text-primary uppercase">View_All_Index</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOCK_TRACKS.map((track) => (
              <TerminalCard key={track.id} className="group">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0 border border-zinc-800">
                    <img src={track.cover} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <button 
                      onClick={() => playTrack(track)}
                      className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play size={24} className="text-primary" fill="currentColor" />
                    </button>
                  </div>
                  <div className="flex-1 min-w-0 py-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-100 truncate">{track.title}</h4>
                      <p className="text-[10px] text-zinc-500 uppercase">{track.artist}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => addToQueue(track)} className="p-1 hover:text-primary transition-colors">
                        <Plus size={14} />
                      </button>
                      <span className="text-[9px] text-zinc-700 bg-zinc-800/50 px-1">{track.genre}</span>
                    </div>
                  </div>
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
        {/* Sidebar Mini-feed */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-300 border-b border-zinc-900 pb-2">Feed_Log</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-3 text-xs border-b border-zinc-900/50 pb-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 border border-zinc-700" />
                <div>
                   <span className="text-zinc-100">USER_X{i}00</span> 
                   <span className="text-zinc-500"> collected </span>
                   <span className="text-secondary">TRACK_{i}</span>
                   <div className="text-[10px] text-zinc-600 mt-1 uppercase">2m ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}