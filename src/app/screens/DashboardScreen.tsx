'use client';

import { useApp } from '../context';
import { Btn } from '../components/UI';

export default function DashboardScreen() {
  const { go, contacts, family } = useApp();
  const selectedCount = contacts.filter(c => c.checked).length;

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: 'var(--pb)', padding: '56px 24px 40px' }}>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Goedemorgen</div>
        <div style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: -0.6 }}>Jan 👋</div>
      </div>
      <div style={{ padding: '0 24px 32px', marginTop: -20 }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px' }}>
          <div className="pulse" style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ok)', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)' }}>Bescherming actief</div>
            <div style={{ fontSize: 13, color: 'var(--gray)' }}>Monitoring aan</div>
          </div>
          <span className="tag tag-green">Veilig</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--pb)' }}>{selectedCount}</div>
            <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>Whitelist</div>
            <div style={{ fontSize: 11, color: 'var(--gray)' }}>contacten</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--ok)' }}>{family.length}</div>
            <div style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>Familie</div>
            <div style={{ fontSize: 11, color: 'var(--gray)' }}>gekoppeld</div>
          </div>
        </div>
        <div className="card" style={{ background: 'var(--pb)', padding: 20, marginBottom: 12 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>Vandaag</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Geen verdachte gesprekken</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Monitoring loopt normaal</div>
        </div>
        <Btn variant="dark" onClick={() => go('simulatie')} style={{ marginBottom: 12 }}>
          📞 Simuleer gesprek
        </Btn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { emoji: '📋', label: 'Whitelist', screen: 'contacten' as const },
            { emoji: '👨‍👩‍👧', label: 'Familie', screen: 'familie' as const },
            { emoji: '⚙️', label: 'Instellingen', screen: 'instellingen' as const },
          ].map(a => (
            <div key={a.label} onClick={() => go(a.screen)} className="card"
              style={{ textAlign: 'center', padding: 14, cursor: 'pointer', marginBottom: 0 }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{a.emoji}</div>
              <div style={{ fontSize: 12, color: 'var(--gray)' }}>{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}