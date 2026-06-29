'use client';

import { useEffect, useRef } from 'react';
import { useApp } from '../context';

const CIRCUMFERENCE = 2 * Math.PI * 70;

export default function SimulatieScreen() {
  const { go, warningMinutes, callSeconds, setCallSeconds, setHasWarning } = useApp();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const warnedRef = useRef(false);

  useEffect(() => {
    setCallSeconds(0);
    setHasWarning(false);
    warnedRef.current = false;

    let count = 0;
    intervalRef.current = setInterval(() => {
      count += 1;
      const limit = warningMinutes * 60;
      setCallSeconds(count);
      if (count >= limit && !warnedRef.current) {
        warnedRef.current = true;
        setHasWarning(true);
        setTimeout(() => go('notificatie'), 2000);
      }
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [go, warningMinutes, setCallSeconds, setHasWarning]);

  const limit = warningMinutes * 60;
  const progress = Math.min(callSeconds / limit, 1);
  const offset = CIRCUMFERENCE * (1 - progress);
  const m = Math.floor(callSeconds / 60);
  const s = callSeconds % 60;
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`;
  const isWarning = callSeconds >= limit;

  return (
    <div style={{ minHeight: '100%', background: '#1a1a2e', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', fontSize: 14, fontWeight: 600, color: '#fff' }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
        <span>●●●● 5G 🔋</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
          Inkomend gesprek
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Onbekend nummer</div>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: 36 }}>+31 20 123 4567</div>
        <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 32 }}>
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
            <circle cx="90" cy="90" r="70" fill="none"
              stroke={isWarning ? 'var(--red)' : 'var(--pb)'}
              strokeWidth="7" strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
              style={{ transition: 'stroke-dashoffset 0.9s linear, stroke 0.3s' }}
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>
              {timeStr}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
              {isWarning ? 'Waarschuwing!' : 'Verbonden'}
            </div>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '16px 24px', textAlign: 'center', marginBottom: 36, width: '100%' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Status</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>
            {isWarning ? '🟠 Mogelijk verdacht gesprek' : '🟢 Gesprek loopt'}
          </div>
          {isWarning && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Familie wordt gewaarschuwd…</div>}
        </div>
        <div style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
          {[
            { emoji: '🔇', bg: 'rgba(255,255,255,0.1)', onClick: undefined },
            { emoji: '📵', bg: 'var(--red)', onClick: () => go('dashboard') },
            { emoji: '🔊', bg: 'rgba(255,255,255,0.1)', onClick: undefined },
          ].map((b, i) => (
            <div key={i} onClick={b.onClick} style={{ width: 68, height: 68, background: b.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, cursor: b.onClick ? 'pointer' : 'default' }}>
              {b.emoji}
            </div>
          ))}
        </div>
        <button onClick={() => go('dashboard')} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)', padding: '10px 24px', borderRadius: 20, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
          ← Terug naar dashboard
        </button>
      </div>
    </div>
  );
}
