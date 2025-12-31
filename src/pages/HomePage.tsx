import React from 'react';
import { useAppStore } from '@/lib/store';
import { TerminalLayout } from '@/components/layout/TerminalLayout';
import { DiscoverView } from '@/components/views/DiscoverView';
import { UploadView } from '@/components/views/UploadView';
import { LibraryView } from '@/components/views/LibraryView';
import { WalletView } from '@/components/views/WalletView';
import { RevenueView } from '@/components/views/RevenueView';
import { Toaster } from 'sonner';
export function HomePage() {
  const currentView = useAppStore((s) => s.currentView);
  const renderView = () => {
    switch (currentView) {
      case 'DISCOVER':
        return <DiscoverView />;
      case 'UPLOAD':
        return <UploadView />;
      case 'LIBRARY':
        return <LibraryView />;
      case 'WALLET':
        return <WalletView />;
      case 'REVENUE':
        return <RevenueView />;
      default:
        return <DiscoverView />;
    }
  };
  return (
    <TerminalLayout>
      {renderView()}
      <Toaster 
        theme="dark" 
        position="top-right"
        toastOptions={{
          style: {
            background: '#09090b',
            border: '1px solid #27272a',
            color: '#4ade80',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            borderRadius: '0px'
          }
        }} 
      />
    </TerminalLayout>
  );
}