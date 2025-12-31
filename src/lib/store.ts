import { create } from 'zustand';
import { Track } from './mock-data';
export type ViewType = 'DISCOVER' | 'UPLOAD' | 'LIBRARY' | 'WALLET' | 'REVENUE';
interface AppState {
  currentView: ViewType;
  sidebarOpen: boolean;
  setView: (view: ViewType) => void;
  toggleSidebar: () => void;
}
export const useAppStore = create<AppState>((set) => ({
  currentView: 'DISCOVER',
  sidebarOpen: true,
  setView: (view) => set({ currentView: view }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  queue: Track[];
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (v: number) => void;
  addToQueue: (track: Track) => void;
}
export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 80,
  queue: [],
  playTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (v) => set({ volume: v }),
  addToQueue: (track) => set((state) => ({ queue: [...state.queue, track] })),
}));