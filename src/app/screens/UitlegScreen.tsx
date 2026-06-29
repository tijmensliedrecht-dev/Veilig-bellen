'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Card } from '../components/UI';

const steps = [
  { emoji: '📋', bg: '#eef2ff', title: 'Voeg vertrouwde contacten toe', desc: 'Familie, vrienden en vaste contacten die u vertrouwt.' },
  { emoji: '👨‍👩‍👧', bg: '#dcfce7', title: 'Koppel uw familie', desc: 'Zij ontvangen een melding als er iets verdachts is.' },
  { emoji: '🔔', bg: '#fef3c7', title: 'Wij waarschuwen alleen wanneer nodig', desc: 'Alleen bij mogelijke oplichting — niet bij elk gesprek.' },
];

export default function UitlegScreen() {
  const { go } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', letterSpacing: -0.4 }}>
            Hoe werkt het?
          </div>
          <div style={{ fontSize: 14, color: 'var(--gray)', marginTop: 4 }}>Drie eenvoudige stappen</div>
        </div>
        <div style={{ flex: 1 }}>
          {steps.map((s, i) => (
            <Card key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{
                width: 48, height: 48, background: s.bg, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, flexShrink: 0,
              }}>
                {s.emoji}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.55 }}>
                  {s.desc}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Btn onClick={() => go('contacten')}>Verder →</Btn>
      </div>
    </div>
  );
}