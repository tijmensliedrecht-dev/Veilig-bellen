'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Card } from '../components/UI';

export default function NotificatieScreen() {
  const { go } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ background: 'var(--dark)', padding: '8px 20px 28px', borderRadius: '0 0 24px 24px' }}>
        <div style={{ background: '#2c2c2e', borderRadius: 18, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--pb)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>
            🛡️
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>VeiligBellen</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
              Jan spreekt al 3 minuten met een onbekend nummer.
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>nu</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '24px 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>
          Notificatie verstuurd
        </div>
        <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 24 }}>
          Lisa en Mark zijn geïnformeerd.
        </div>
        <Card style={{ background: '#fff7ed', border: '1.5px solid #fed7aa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 20 }}>⚠️</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#c2410c' }}>Mogelijk verdacht gesprek</span>
          </div>
          <div style={{ fontSize: 14, color: '#9a3412', lineHeight: 1.55 }}>
            Jan praat al meer dan 3 minuten met een onbekend nummer dat niet op zijn whitelist staat.
          </div>
        </Card>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn onClick={() => go('familie-dashboard')}>Bekijk familie-dashboard →</Btn>
          <Btn variant="outline" onClick={() => go('dashboard')}>Terug naar mijn dashboard</Btn>
        </div>
      </div>
    </div>
  );
}