'use client';

import { useState } from 'react';
import { useApp } from '../context';
import { StatusBar, Btn, BackButton } from '../components/UI';

const quickMessages = [
  'Is alles goed? 🙂',
  'Hang op als je het niet vertrouwt.',
  'Bel mij terug wanneer je klaar bent.',
];

export default function BerichtScreen() {
  const { go } = useApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [own, setOwn] = useState('');

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <BackButton onClick={() => go('familie-dashboard')} />
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>
          Bericht sturen
        </div>
        <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 20 }}>
          Stuur Jan een snel bericht.
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>
          Snelle berichten
        </div>
        {quickMessages.map(msg => (
          <div key={msg} onClick={() => setSelected(msg)} style={{
            padding: '14px 18px',
            border: `1.5px solid ${selected === msg ? 'var(--pb)' : 'var(--lgray)'}`,
            borderRadius: 14,
            fontSize: 15,
            color: selected === msg ? 'var(--pb)' : 'var(--dark)',
            background: selected === msg ? 'var(--pb2)' : '#fff',
            cursor: 'pointer',
            marginBottom: 8,
            transition: 'all 0.15s',
          }}>
            {msg}
          </div>
        ))}
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', margin: '16px 0 10px' }}>
          Of schrijf zelf
        </div>
        <textarea
          className="input"
          value={own}
          onChange={e => setOwn(e.target.value)}
          placeholder="Typ uw eigen bericht..."
          style={{ height: 90, resize: 'none', marginBottom: 16 }}
        />
        <div style={{ marginTop: 'auto' }}>
          <Btn onClick={() => go('notificatie')}>Verstuur bericht ✉️</Btn>
        </div>
      </div>
    </div>
  );
}