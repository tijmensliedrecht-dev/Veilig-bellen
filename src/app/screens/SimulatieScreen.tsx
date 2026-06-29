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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom:
