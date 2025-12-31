export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover: string;
  url: string;
  genre: string;
  price?: string;
}
export interface Transaction {
  id: string;
  type: 'RECEIVE' | 'SEND' | 'MINT';
  amount: string;
  asset: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  date: string;
}
export const MOCK_TRACKS: Track[] = [
  { id: '1', title: 'SYNTH_WAVE_01', artist: 'NEON_DRIVE', duration: '3:45', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop', url: '#', genre: 'Electronic' },
  { id: '2', title: 'BINARY_HEART', artist: 'ZERO_ONE', duration: '4:20', cover: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=400&fit=crop', url: '#', genre: 'Cyberpunk' },
  { id: '3', title: 'DATA_STREAM', artist: 'NULL_POINTER', duration: '2:55', cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop', url: '#', genre: 'Ambient' },
  { id: '4', title: 'KERNEL_PANIC', artist: 'SUDO_MOD', duration: '5:10', cover: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop', url: '#', genre: 'Glitch' },
  { id: '5', title: 'LATENCY_FLOW', artist: 'PING_COMMAND', duration: '3:15', cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=400&h=400&fit=crop', url: '#', genre: 'Lo-Fi' },
];
export const REVENUE_DATA = [
  { name: '04/01', revenue: 450 },
  { name: '04/05', revenue: 1200 },
  { name: '04/10', revenue: 800 },
  { name: '04/15', revenue: 2500 },
  { name: '04/20', revenue: 1900 },
  { name: '04/25', revenue: 3200 },
  { name: '04/30', revenue: 4100 },
];
export const TRANSACTIONS: Transaction[] = [
  { id: 'tx_01', type: 'RECEIVE', amount: '0.45', asset: 'ETH', status: 'COMPLETED', date: '2024-05-01' },
  { id: 'tx_02', type: 'SEND', amount: '120.0', asset: 'USDC', status: 'COMPLETED', date: '2024-04-28' },
  { id: 'tx_03', type: 'MINT', amount: '1', asset: 'NFT_TRACK', status: 'COMPLETED', date: '2024-04-25' },
];