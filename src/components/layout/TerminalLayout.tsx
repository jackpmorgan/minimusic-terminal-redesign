import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { usePlayerStore } from '@/lib/store';
import { Menu, X, Command, Search, User, Bell, ChevronRight, LayoutDashboard, Upload, Library, Wallet, BarChart3 } from 'lucide-react';
import { PlayerBar } from '../player/PlayerBar';
import { cn } from '@/lib/utils';
export function TerminalLayout({ children }: { children: React.ReactNode }) {
  const currentView = useAppStore((s) => s.currentView);
  const setView = useAppStore((s) => s.setView);
  const sidebarOpen = useAppStore((s) => s.sidebarOpen);
  const toggleSidebar = useAppStore((s) => s.toggleSidebar);
  const currentTrack = usePlayerStore((s) => s.currentTrack);
  const navItems = [
    { id: 'DISCOVER', label: '01.DISCOVER', icon: LayoutDashboard },
    { id: 'UPLOAD', label: '02.UPLOAD', icon: Upload },
    { id: 'LIBRARY', label: '03.LIBRARY', icon: Library },
    { id: 'WALLET', label: '04.WALLET', icon: Wallet },
    { id: 'REVENUE', label: '05.ANALYTICS', icon: BarChart3 },
  ];
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-400 overflow-hidden font-mono text-sm border border-zinc-900 m-1">
      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col border-r border-zinc-900 transition-all duration-300",
        sidebarOpen ? "w-64" : "w-0 overflow-hidden md:w-16"
      )}>
        <div className="p-4 border-b border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="bg-primary text-primary-foreground px-1 py-0.5 rounded-sm">MM</span>
            {sidebarOpen && <span className="tracking-tighter">MINI_MUSIC_v2</span>}
          </div>
          <button onClick={toggleSidebar} className="p-1 hover:bg-zinc-900 rounded md:hidden">
            <X size={16} />
          </button>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 transition-all group",
                  currentView === item.id 
                    ? "bg-primary/10 text-primary border-r-2 border-primary" 
                    : "hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                <Icon size={18} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-zinc-900 space-y-2">
          {sidebarOpen && (
            <>
              <div className="flex justify-between items-center text-xs text-zinc-500 mb-2">
                <span>SYSTEM_STATUS</span>
                <span className="text-primary animate-pulse">● ONLINE</span>
              </div>
              <div className="bg-zinc-900/50 p-2 rounded text-[10px] border border-zinc-800">
                <p>NODE: FRA_01</p>
                <p>LATENCY: 14ms</p>
              </div>
            </>
          )}
        </div>
      </aside>
      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative">
        {/* Header */}
        <header className="h-14 border-b border-zinc-900 flex items-center justify-between px-4 sticky top-0 bg-zinc-950/80 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="md:hidden">
              <Menu size={18} />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded text-zinc-500 hover:border-zinc-700 transition-colors cursor-pointer">
              <Search size={14} />
              <span className="text-xs">CMD + K to search</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-zinc-900 rounded transition-colors text-zinc-500">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
              <User size={16} />
            </div>
          </div>
        </header>
        {/* Content Stage */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 terminal-grid">
           <div className="max-w-7xl mx-auto space-y-8">
             {children}
           </div>
        </main>
        {/* Player Bar */}
        <PlayerBar />
      </div>
      {/* Right Panel / Inspector */}
      <aside className="hidden xl:flex w-72 border-l border-zinc-900 flex-col bg-zinc-950">
        <div className="p-4 border-b border-zinc-900 font-bold text-xs uppercase tracking-widest text-zinc-500">
          Track_Details
        </div>
        <div className="p-4 flex-1">
          {currentTrack ? (
            <div className="space-y-6">
              <img src={currentTrack.cover} alt="" className="w-full aspect-square object-cover grayscale border border-zinc-800" />
              <div>
                <h3 className="text-zinc-100 font-bold truncate">{currentTrack.title}</h3>
                <p className="text-primary text-xs">{currentTrack.artist}</p>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">FORMAT</span>
                  <span>FLAC_24bit</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">BITRATE</span>
                  <span>1411_kbps</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">RELEASE</span>
                  <span>2024.05.12</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-20 italic">
               <Command size={48} className="mb-4" />
               <p className="text-xs">SELECT_TRACK_TO_INSPECT</p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}