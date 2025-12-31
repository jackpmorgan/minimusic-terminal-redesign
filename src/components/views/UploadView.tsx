import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TerminalButton, TerminalCard } from '../ui/custom-components';
import { Upload, Music, FileText, CheckCircle, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
type UploadStep = 'FILE' | 'METADATA' | 'REVIEW';
export function UploadView() {
  const [step, setStep] = useState<UploadStep>('FILE');
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('audio/')) {
      setFile(f);
      setStep('METADATA');
    } else {
      toast.error('INVALID_FILE_TYPE: PLEASE UPLOAD AUDIO');
    }
  };
  const onSubmitMetadata = (data: any) => {
    setStep('REVIEW');
  };
  const finalizeUpload = () => {
    toast.success('SYSTEM_MESSAGE: UPLOAD_SUCCESSFUL');
    setStep('FILE');
    setFile(null);
  };
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Steps Indicator */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -z-10" />
        {['FILE', 'METADATA', 'REVIEW'].map((s, idx) => (
          <div 
            key={s} 
            className={cn(
              "flex flex-col items-center gap-2 bg-zinc-950 px-4 transition-colors",
              step === s ? "text-primary" : "text-zinc-600"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center border text-xs font-bold",
              step === s ? "border-primary bg-primary/10" : "border-zinc-800 bg-zinc-950"
            )}>
              {idx + 1}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{s}</span>
          </div>
        ))}
      </div>
      <TerminalCard title={`UPLOAD_MODULE // ${step}`}>
        {step === 'FILE' && (
          <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={onFileDrop}
            className="border-2 border-dashed border-zinc-800 rounded-lg p-16 text-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
          >
            <Upload size={48} className="mx-auto mb-4 text-zinc-700 group-hover:text-primary transition-colors" />
            <h3 className="text-zinc-300 font-bold mb-2">DRAG_AND_DROP_MODULE</h3>
            <p className="text-zinc-500 text-xs mb-6">SUPPORTED: WAV, MP3, FLAC (MAX 50MB)</p>
            <TerminalButton variant="outline" className="relative overflow-hidden">
               SELECT_LOCAL_FILE
               <input 
                 type="file" 
                 className="absolute inset-0 opacity-0 cursor-pointer" 
                 accept="audio/*"
                 onChange={(e) => {
                   if(e.target.files?.[0]) {
                     setFile(e.target.files[0]);
                     setStep('METADATA');
                   }
                 }}
               />
            </TerminalButton>
          </div>
        )}
        {step === 'METADATA' && (
          <form onSubmit={handleSubmit(onSubmitMetadata)} className="space-y-6">
            <div className="flex gap-4 p-4 bg-zinc-900/50 rounded border border-zinc-800">
              <Music className="text-primary" size={24} />
              <div>
                 <div className="text-xs font-bold text-zinc-300">{file?.name}</div>
                 <div className="text-[10px] text-zinc-500">{(file?.size ?? 0 / 1024 / 1024).toFixed(2)} MB</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Track_Title</label>
                <input 
                  {...register('title', { required: true })}
                  placeholder="E.G. NEON_RAIN_v1"
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-xs focus:border-primary outline-none text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Genre_Protocol</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 p-2 text-xs outline-none text-zinc-100">
                  <option>ELECTRONIC</option>
                  <option>LO-FI</option>
                  <option>TECHNO</option>
                  <option>GLITCH</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-zinc-500 uppercase font-bold">Description_Log</label>
              <textarea 
                rows={3}
                placeholder="INPUT DATA DESCRIPTION..."
                className="w-full bg-zinc-900 border border-zinc-800 p-2 text-xs focus:border-primary outline-none text-zinc-100 resize-none"
              />
            </div>
            <div className="flex justify-between pt-4">
              <TerminalButton variant="ghost" onClick={() => setStep('FILE')}>BACK</TerminalButton>
              <TerminalButton type="submit">PROCEED_TO_REVIEW</TerminalButton>
            </div>
          </form>
        )}
        {step === 'REVIEW' && (
          <div className="space-y-8 text-center py-4">
            <div className="flex justify-center">
              <CheckCircle size={64} className="text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="text-zinc-100 font-black text-xl uppercase italic">Ready_for_Transmission</h3>
              <p className="text-zinc-500 text-xs">ALL PROTOCOLS VALIDATED. READY TO BROADCAST TO NETWORK.</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded border border-zinc-800 text-left max-w-sm mx-auto space-y-3">
               <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-500">GAS_FEE</span>
                  <span className="text-primary">0.00042 ETH</span>
               </div>
               <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-500">STORAGE</span>
                  <span className="text-primary">IPFS_v2</span>
               </div>
               <div className="flex justify-between text-[10px]">
                  <span className="text-zinc-500">ROYALTY</span>
                  <span className="text-primary">10%</span>
               </div>
            </div>
            <div className="flex justify-center gap-4">
               <TerminalButton variant="outline" onClick={() => setStep('METADATA')}>EDIT_DATA</TerminalButton>
               <TerminalButton onClick={finalizeUpload} className="px-12">EXECUTE_UPLOAD</TerminalButton>
            </div>
          </div>
        )}
      </TerminalCard>
    </div>
  );
}