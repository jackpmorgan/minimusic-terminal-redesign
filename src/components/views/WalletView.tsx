import React from 'react';
import { TRANSACTIONS } from '@/lib/mock-data';
import { TerminalCard, TerminalButton, StatusBadge } from '../ui/custom-components';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, Shield, ExternalLink } from 'lucide-react';
export function WalletView() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Balance Card */}
        <div className="lg:col-span-2 space-y-8">
          <TerminalCard className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-primary/20">
             <div className="flex justify-between items-start mb-8">
               <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Wallet size={32} className="text-primary" />
               </div>
               <div className="text-right">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">NETWORK_STABILITY</div>
                  <div className="text-primary text-xs font-bold">99.98% OPTIMAL</div>
               </div>
             </div>
             <div>
                <div className="text-xs text-zinc-500 uppercase font-bold mb-2">Total_Account_Value</div>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-5xl font-black text-zinc-100 tracking-tighter italic">$12,452.84</h2>
                  <span className="text-primary text-sm font-bold">+4.2%</span>
                </div>
                <div className="text-xs text-zinc-500 mt-2 font-mono">0x4F92...B921</div>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-800/50">
                <div className="space-y-1">
                   <div className="text-[9px] text-zinc-500 uppercase">ETH_BALANCE</div>
                   <div className="text-sm font-bold text-zinc-100">4.12 ETH</div>
                </div>
                <div className="space-y-1">
                   <div className="text-[9px] text-zinc-500 uppercase">USDC_STABLE</div>
                   <div className="text-sm font-bold text-zinc-100">850.00 USDC</div>
                </div>
                <div className="space-y-1">
                   <div className="text-[9px] text-zinc-500 uppercase">AUD_CREDITS</div>
                   <div className="text-sm font-bold text-zinc-100">1,240 AUD</div>
                </div>
             </div>
          </TerminalCard>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Transaction_Log</h3>
            <div className="space-y-2">
               {TRANSACTIONS.map((tx) => (
                 <div key={tx.id} className="bg-zinc-900/30 border border-zinc-800 p-4 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                         "p-2 rounded border",
                         tx.type === 'RECEIVE' ? "bg-primary/5 border-primary/20 text-primary" : "bg-zinc-800 border-zinc-700 text-zinc-400"
                       )}>
                         {tx.type === 'RECEIVE' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                       </div>
                       <div>
                          <div className="text-xs font-bold text-zinc-100 uppercase">{tx.type} {tx.asset}</div>
                          <div className="text-[10px] text-zinc-500">{tx.date}</div>
                       </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                       <div className={cn("text-xs font-bold font-mono", tx.type === 'RECEIVE' ? "text-primary" : "text-zinc-100")}>
                          {tx.type === 'RECEIVE' ? '+' : '-'}{tx.amount} {tx.asset}
                       </div>
                       <StatusBadge status={tx.status} />
                    </div>
                 </div>
               ))}
            </div>
            <TerminalButton variant="outline" className="w-full text-[10px]">RELOAD_CHAIN_DATA</TerminalButton>
          </div>
        </div>
        {/* Send Interface */}
        <div className="space-y-6">
          <TerminalCard title="SEND_TRANSFER_PROTOCOL">
             <form className="space-y-4">
                <div className="space-y-2">
                   <label className="text-[10px] text-zinc-500 uppercase font-bold">RECIPIENT_ADDRESS</label>
                   <input className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] focus:border-primary outline-none text-zinc-100 font-mono" placeholder="0x..." />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] text-zinc-500 uppercase font-bold">ASSET_TYPE</label>
                   <select className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] outline-none text-zinc-100 uppercase font-bold">
                      <option>ETHEREUM (ETH)</option>
                      <option>USD COIN (USDC)</option>
                      <option>MINI TOKEN (MINI)</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] text-zinc-500 uppercase font-bold">AMOUNT</label>
                   <div className="relative">
                     <input className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] focus:border-primary outline-none text-zinc-100 font-mono" placeholder="0.00" />
                     <button className="absolute right-2 top-1.5 text-[9px] text-primary hover:text-primary/80 font-bold uppercase">MAX</button>
                   </div>
                </div>
                <TerminalButton className="w-full mt-4">INITIATE_TRANSFER</TerminalButton>
             </form>
          </TerminalCard>
          <TerminalCard title="SECURITY_LOG">
             <div className="space-y-4">
                <div className="flex gap-3 items-start">
                   <Shield className="text-primary shrink-0" size={16} />
                   <div className="text-[10px]">
                      <div className="text-zinc-300 font-bold uppercase">HARDWARE_KEY_DETECTED</div>
                      <p className="text-zinc-600">LEDGER_NANO_X (0x...A12B) is connected and ready for signing.</p>
                   </div>
                </div>
                <div className="flex gap-3 items-start">
                   <RefreshCcw className="text-secondary shrink-0" size={16} />
                   <div className="text-[10px]">
                      <div className="text-zinc-300 font-bold uppercase">AUTO_SWAP_ACTIVE</div>
                      <p className="text-zinc-600">Excess USDC is being routed to YIELD_GEN protocol.</p>
                   </div>
                </div>
             </div>
          </TerminalCard>
        </div>
      </div>
    </div>
  );
}