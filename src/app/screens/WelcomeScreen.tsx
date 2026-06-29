'use client';

import { useApp } from '../context';
import { Btn } from '../components/UI';

export default function WelcomeScreen() {
  const { go } = useApp();

  return (
    <div style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ flex: 1 }}>
        <div style={{
          background: 'var(--pb2)',
          borderRadius: 24,
          padding: '32px 24px',
          marginBottom: 28,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>🛡️</div>
          <div style={{
            fontSize: 26,
            fontWeight: 800,
            color: 'var(--dark)',
            letterSpacing: -0.5,
            lineHeight: 1.25,
          }}>
            Bescherm uzelf tegen telefonische oplichting.
          </div>
        </div>
        <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.75, marginBottom: 40 }}>
          VeiligBellen helpt u en uw familie verdachte telefoongesprekken sneller op te merken —
          zonder uw gesprekken te beluisteren.
        </p>
      </div>
      <div>
        <Btn onClick={() => go('uitleg')}>Begin →</Btn>
        <p style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: 'var(--gray)' }}>
          Uw privacy staat altijd voorop
        </p>
      </div>
    </div>
  );
}