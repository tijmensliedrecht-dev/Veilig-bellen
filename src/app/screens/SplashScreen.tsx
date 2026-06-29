'use client';

import { useEffect } from 'react';
import { useApp } from '../context';

export default function SplashScreen() {
  const { go } = useApp();

  useEffect(() => {
    const t = setTimeout(() => go('welcome'), 2000);
    return () => clearTimeout(t);
  }, [go]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100%',
      background: 'var(--pb)',
      padding: 40,
    }}>
      <div style={{
        width: 88,
        height: 88,
        background: 'rgba(255,255,255,0.15)',
        borderRadius: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.2)" />
          <path d="M15 24c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="33" r="2.5" fill="#fff" />
          <path d="M24 30v-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', letterSpacing: -0.8, marginBottom: 8 }}>
        VeiligBellen
      </div>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginBottom: 56 }}>
        Extra bescherming tegen telefonische oplichting
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} className="pulse" style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i === 1 ? '#fff' : 'rgba(255,255,255,0.35)',
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>
    </div>
  );
}