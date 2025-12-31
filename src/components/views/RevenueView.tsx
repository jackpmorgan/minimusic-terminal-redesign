import React from 'react';
import { REVENUE_DATA } from '@/lib/mock-data';
import { TerminalCard, TerminalButton } from '../ui/custom-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, TrendingUp, DollarSign, Users, Info } from 'lucide-react';
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-950 border border-primary/50 p-3 shadow-xl">
        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">{label}</p>
        <p className="text-sm font-black text-primary italic">${payload[0].value.toLocaleString()}</p>
        <p className="text-[9px] text-zinc-600 uppercase mt-1">REVENUE_COLLECTED</p>
      </div>
    );
  }
  return null;
};
export function RevenueView() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 italic uppercase">Revenue_Intelligence</h2>
          <p className="text-xs text-zinc-500">ANALYTIC_OVERVIEW_OF_ARTIST_EARNINGS</p>
        </div>
        <div className="flex gap-2">
           <TerminalButton variant="outline" className="text-[10px]">EXPORT_CSV</TerminalButton>
           <TerminalButton variant="primary" className="text-[10px]">WITHDRAW_FUNDS</TerminalButton>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <TerminalCard className="border-l-primary border-l-4">
            <div className="flex justify-between items-start mb-2">
               <DollarSign size={16} className="text-primary" />
               <span className="text-[10px] text-primary font-bold">+12%</span>
            </div>
            <div className="text-2xl font-black text-zinc-100 italic tracking-tighter">$14,204</div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold">TOTAL_YIELD</div>
         </TerminalCard>
         <TerminalCard className="border-l-secondary border-l-4">
            <div className="flex justify-between items-start mb-2">
               <Users size={16} className="text-secondary" />
               <span className="text-[10px] text-secondary font-bold">+8%</span>
            </div>
            <div className="text-2xl font-black text-zinc-100 italic tracking-tighter">84.2k</div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold">UNIQUE_LISTENERS</div>
         </TerminalCard>
         <TerminalCard className="border-l-zinc-700 border-l-4">
            <div className="flex justify-between items-start mb-2">
               <BarChart3 size={16} className="text-zinc-500" />
               <span className="text-[10px] text-zinc-500 font-bold">STABLE</span>
            </div>
            <div className="text-2xl font-black text-zinc-100 italic tracking-tighter">1.4k</div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold">NFT_COLLECTORS</div>
         </TerminalCard>
         <TerminalCard className="border-l-amber-500 border-l-4">
            <div className="flex justify-between items-start mb-2">
               <TrendingUp size={16} className="text-amber-500" />
               <span className="text-[10px] text-amber-500 font-bold">+24%</span>
            </div>
            <div className="text-2xl font-black text-zinc-100 italic tracking-tighter">0.12 ETH</div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold">AVG_ROYALTY_CLAIM</div>
         </TerminalCard>
      </div>
      <TerminalCard title="REVENUE_CHART_30D">
         <div className="h-[400px] w-full pt-4">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
               <defs>
                 <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                   <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#18181b" />
               <XAxis 
                  dataKey="name" 
                  stroke="#3f3f46" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{ fill: '#3f3f46' }}
               />
               <YAxis 
                  stroke="#3f3f46" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                  tick={{ fill: '#3f3f46' }}
               />
               <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4ade80', strokeWidth: 1 }} />
               <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#4ade80" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRev)" 
                  animationDuration={1500}
               />
             </AreaChart>
           </ResponsiveContainer>
         </div>
      </TerminalCard>
      <div className="flex gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded">
         <Info size={16} className="text-primary shrink-0 mt-0.5" />
         <p className="text-[10px] text-zinc-500 leading-relaxed uppercase">
            REVENUE DATA IS AGGREGATED FROM ALL DECENTRALIZED PROTOCOLS. CLAIMS ARE SETTLED EVERY 24 HOURS ON-CHAIN. 
            GAS FEES ARE AUTOMATICALLY DEDUCTED FROM THE PAYOUT TOTAL. ARTIST RETAINS 95% OF ALL COLLECTED FEES.
         </p>
      </div>
    </div>
  );
}