'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Card } from '../components/UI';

const options = [3, 5, 10];

const monitorOptions = [
  'Onbekende nummers',
  'Nummers niet op whitelist',
  'Herhaald bellen vanuit zelfde nummer',
];

export default function InstellingenScreen() {
  const { go, warningMinutes, setWarningMinutes } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', letterSpacing: -0.4 }}>
            Instellingen
          </div>
          <div style={{ fontSize: 14, color: 'var(--gray)', marginTop: 4 }}>
            Wanneer wilt u een waarschuwing ontvangen?
          </div>
        </div>
        <Card>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 14 }}>
            Waarschuwen na
          </div>
          <div className="seg">
            {options.map(m => (
              <button
                key={m}
                className={`seg-btn${warningMinutes === m ? ' active' : ''}`}
                onClick={() => setWarningMinutes(m)}
              >
                {m} min
              </button>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 14 }}>
            Monitor alleen bij
          </div>
          {monitorOptions.map(opt => (
            <div key={opt} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '13px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
            }}>
              <div className="checkbox-active">
                <svg width="13" height="13" fill="none" viewBox="0 0 13 13" stroke="#fff" strokeWidth="2.5">
                  <polyline points="2,6.5 5.5,10 11,3" />
                </svg>
              </div>
              <span style={{ fontSize: 15, color: 'var(--dark)' }}>{opt}</span>
            </div>
          ))}
        </Card>
        <div style={{ marginTop: 'auto' }}>
          <Btn onClick={() => go('dashboard')}>Opslaan →</Btn>
        </div>
      </div>
    </div>
  );
}