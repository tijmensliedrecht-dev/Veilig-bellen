'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Avatar, Tag } from '../components/UI';

export default function FamilieScreen() {
  const { go, family } = useApp();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', letterSpacing: -0.4 }}>
            Familie koppelen
          </div>
          <div style={{ fontSize: 14, color: 'var(--gray)', marginTop: 4 }}>
            Zij ontvangen een melding bij verdacht gedrag.
          </div>
        </div>
        <div className="card">
          {[
            { label: 'Naam', placeholder: 'Bijv. Lisa' },
            { label: 'Relatie', placeholder: 'Bijv. Dochter' },
            { label: 'Telefoonnummer', placeholder: '+31 6 00 00 00 00', type: 'tel' },
          ].map(f => (
            <div key={f.label} style={{ marginBottom: 12 }}>
              <div style={{
                fontSize: 12, fontWeight: 700, color: 'var(--gray)',
                textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8,
              }}>
                {f.label}
              </div>
              <input className="input" type={f.type ?? 'text'} placeholder={f.placeholder} />
            </div>
          ))}
          <Btn variant="outline" style={{ marginTop: 4, fontSize: 15, padding: '12px' }}>
            + Toevoegen
          </Btn>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', margin: '16px 0 8px' }}>
          Gekoppelde familieleden
        </div>
        <div className="card" style={{ padding: 0, marginBottom: 16 }}>
          {family.map((m, i) => (
            <div key={m.id} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: 16,
              borderBottom: i < family.length - 1 ? '1px solid #f3f4f6' : 'none',
            }}>
              <Avatar
                initials={m.name[0]}
                bgColor={i === 0 ? '#eef2ff' : '#f0fdf4'}
                textColor={i === 0 ? '#4338ca' : '#166534'}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--dark)' }}>{m.name}</div>
                <div style={{ fontSize: 13, color: 'var(--gray)' }}>{m.relation}</div>
              </div>
              <Tag variant="green">Actief</Tag>
            </div>
          ))}
        </div>
        <Btn onClick={() => go('instellingen')}>Verder →</Btn>
      </div>
    </div>
  );
}