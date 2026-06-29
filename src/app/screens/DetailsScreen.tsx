'use client';

import { useApp } from '../context';
import { StatusBar, BackButton, Card } from '../components/UI';

const riskFactors = [
  { text: 'Onbekend nummer',              risk: true  },
  { text: 'Niet op whitelist',            risk: true  },
  { text: 'Gesprek langer dan 3 minuten', risk: true  },
  { text: 'Familie is geïnformeerd',      risk: false },
];

const timeline = [
  { time: '09:30', label: 'Gesprek gestart',         sub: 'Onbekend nummer gebeld',         color: 'var(--pb)'   },
  { time: '09:33', label: 'Waarschuwing gegenereerd', sub: '3 minuten limiet bereikt',       color: 'var(--warn)' },
  { time: '09:33', label: 'Familie geïnformeerd',     sub: 'Lisa & Mark ontvangen melding',  color: 'var(--red)'  },
  { time: '09:35', label: 'Bericht verzonden',        sub: 'Lisa stuurt: "Is alles goed?"',  color: '#8b5cf6'     },
];

export default function DetailsScreen() {
  const { go } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1 }}>
        <BackButton onClick={() => go('familie-dashboard')} />
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>
          Gespreksdetails
        </div>
        <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 20 }}>
          Analyse van het gesprek
        </div>
        <Card>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 14 }}>
            Risicofactoren
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {riskFactors.map(f => (
              <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 24, height: 24,
                  background: f.risk ? '#fee2e2' : '#dcfce7',
                  borderRadius: 7, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 13, flexShrink: 0,
                }}>
                  {f.risk ? '⚠' : '✓'}
                </div>
                <span style={{ fontSize: 14, color: 'var(--dark)' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 14,