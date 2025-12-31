import React, { useState } from 'react';
import { MOCK_TRACKS } from '@/lib/mock-data';
import { usePlayerStore } from '@/lib/store';
import { TerminalCard, TerminalButton } from '../ui/custom-components';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Music, History, Heart, ListMusic, Play, MoreHorizontal } from 'lucide-react';
export function LibraryView() {
  const playTrack = usePlayerStore((s) => s.playTrack);
  const [activeTab, setActiveTab] = useState('uploads');
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 italic uppercase">User_Archive</h2>
          <p className="text-xs text-zinc-500">MANAGE_YOUR_DIGITAL_ASSETS</p>
        </div>
        <TerminalButton variant="secondary" className="flex items-center gap-2">
          <ListMusic size={14} /> NEW_PLAYLIST
        </TerminalButton>
      </div>
      <Tabs defaultValue="uploads" className="w-full">
        <TabsList className="bg-zinc-900/50 border border-zinc-800 rounded-none h-12">
          <TabsTrigger value="uploads" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs font-bold px-8 uppercase">
             My_Uploads
          </TabsTrigger>
          <TabsTrigger value="history" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs font-bold px-8 uppercase">
             Recent_Log
          </TabsTrigger>
          <TabsTrigger value="playlists" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs font-bold px-8 uppercase">
             Data_Sets
          </TabsTrigger>
        </TabsList>
        <TabsContent value="uploads" className="mt-6">
           <div className="grid grid-cols-1 gap-2">
             <div className="grid grid-cols-12 gap-4 px-4 py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest border-b border-zinc-900">
                <div className="col-span-1">#</div>
                <div className="col-span-5">TRACK_NAME</div>
                <div className="col-span-3">STATUS</div>
                <div className="col-span-2">STREAMS</div>
                <div className="col-span-1"></div>
             </div>
             {MOCK_TRACKS.map((track, i) => (
               <div key={track.id} className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-zinc-900/50 transition-colors items-center group">
                 <div className="col-span-1 text-zinc-700 font-mono text-xs">{i + 1}</div>
                 <div className="col-span-5 flex items-center gap-3">
                   <div className="relative w-8 h-8 border border-zinc-800">
                     <img src={track.cover} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                     <button onClick={() => playTrack(track)} className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                        <Play size={14} fill="white" />
                     </button>
                   </div>
                   <div className="min-w-0">
                     <div className="text-xs text-zinc-200 font-bold truncate">{track.title}</div>
                     <div className="text-[10px] text-zinc-500 uppercase">{track.artist}</div>
                   </div>
                 </div>
                 <div className="col-span-3">
                    <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5">ACTIVE</span>
                 </div>
                 <div className="col-span-2 text-xs text-zinc-400 font-mono">
                    {(Math.random() * 1000).toFixed(1)}k
                 </div>
                 <div className="col-span-1 flex justify-end">
                    <button className="text-zinc-600 hover:text-zinc-100">
                       <MoreHorizontal size={16} />
                    </button>
                 </div>
               </div>
             ))}
           </div>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-zinc-900 opacity-50 italic text-zinc-600 text-xs">
             NO_HISTORY_LOGGED_FOR_CURRENT_SESSION
          </div>
        </TabsContent>
        <TabsContent value="playlists" className="mt-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <TerminalCard title="SET_01" className="cursor-pointer hover:border-primary transition-colors">
                 <div className="aspect-square bg-zinc-800 flex items-center justify-center mb-3">
                    <ListMusic size={32} className="text-zinc-700" />
                 </div>
                 <div className="text-xs font-bold uppercase">Midnight_Run</div>
                 <div className="text-[10px] text-zinc-500 mt-1">12_TRACKS // 48:21</div>
              </TerminalCard>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}