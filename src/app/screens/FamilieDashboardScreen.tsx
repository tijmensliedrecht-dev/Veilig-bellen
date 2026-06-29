'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Avatar, Card } from '../components/UI';

export default function FamilieDashboardScreen() {
  const { go } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Avatar initials="J" bgColor="#eef2ff" textColor="var(--pb)" size={48} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)' }}>Jan — vader</div>
            <div style={{ fontSize: 13, color: 'var(--gray)' }}>Monitoring actief</div>
          </div>
          <div className="pulse" style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--warn)' }} />
        </div>
        <Card style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', padding: '20px' }}>
          <div style={{ fontSize: 12, color: 'var(--gray)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>
            Verdacht gesprek
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--dark)', fontVariantNumeric: 'tabular-nums', marginBottom: 16 }}>
            03:17
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16, fontSize: 14 }}>
            <div>
              <div style={{ color: 'var(--gray)', marginBottom: 2 }}>Nummer</div>
              <div style={{ fontWeight: 700, color: 'var(--dark)' }}>Onbekend</div>
            </div>
            <div>
              <div style={{ color: 'var(--gray)', marginBottom: 2 }}>Whitelist</div>
              <div style={{ fontWeight: 700, color: 'var(--red)' }}>Nee</div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: 'var(--gray)' }}>Risicoscore</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)' }}>78%</span>
            </div>
            <div className="risk-bar">
              <div className="risk-fill" style={{ width: '78%' }} />
            </div>
          </div>
        </Card>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
          <Btn style={{ background: '#dcfce7', color: '#166534', fontSize: 14, padding: '12px 4px' }}>
            📞 Bel Jan
          </Btn>
          <Btn style={{ background: 'var(--pb2)', color: 'var(--pb)', fontSize: 14, padding: '12px 4px' }} onClick={() => go('bericht')}>
            💬 Bericht
          </Btn>
          <Btn style={{ background: '#f3f4f6', color: 'var(--dark)', fontSize: 14, padding: '12px 4px' }} onClick={() => go('details')}>
            ℹ Details
          </Btn>
        </div>
        <Card>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 16 }}>Tijdlijn</div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div className="timeline-dot" style={{ background: 'var(--warn)' }} />
              <div className="timeline-line" />
              <div className="timeline-dot" style={{ background: 'var(--red)' }} />
            </div>
            <div>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)' }}>09:30 — Gesprek gestart</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>Onbekend nummer</div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--warn)' }}>09:33 — Waarschuwing</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>3 minuten verstreken</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)' }}>09:33 — Familie geïnformeerd</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>Lisa &amp; Mark ontvangen melding</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}