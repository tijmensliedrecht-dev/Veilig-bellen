'use client';

import { useApp } from '../context';
import { StatusBar, Btn, Avatar } from '../components/UI';

export default function ContactenScreen() {
  const { go, contacts, toggleContact } = useApp();
  const selectedCount = contacts.filter(c => c.checked).length;

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '0 24px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', letterSpacing: -0.4 }}>
            Vertrouwde contacten
          </div>
          <div style={{ fontSize: 14, color: 'var(--gray)', marginTop: 4 }}>
            Deze gesprekken worden nooit gecontroleerd.
          </div>
        </div>
        <div style={{
          background: '#fff', borderRadius: 14, padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 10,
          border: '1.5px solid var(--lgray)', marginBottom: 16,
        }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Zoek contacten..." style={{
            border: 'none', padding: 0, fontSize: 15, outline: 'none',
            width: '100%', background: 'transparent', color: 'var(--dark)', fontFamily: 'inherit',
          }} />
        </div>
        <div className="card" style={{ padding: '8px 16px', flex: 1, marginBottom: 12 }}>
          {contacts.map(c => (
            <div key={c.id} onClick={() => toggleContact(c.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
            }}>
              <Avatar initials={c.initials} bgColor={c.bgColor} textColor={c.textColor} />
              <span style={{ flex: 1, fontSize: 15, color: 'var(--dark)' }}>{c.name}</span>
              {c.checked ? (
                <div className="checkbox-active">
                  <svg width="13" height="13" fill="none" viewBox="0 0 13 13" stroke="#fff" strokeWidth="2.5">
                    <polyline points="2,6.5 5.5,10 11,3" />
                  </svg>
                </div>
              ) : (
                <div className="checkbox-inactive" />
              )}
            </div>
          ))}
        </div>
        <div style={{
          background: 'var(--pb2)', borderRadius: 14, padding: '12px 16px',
          marginBottom: 12, textAlign: 'center', fontSize: 14, fontWeight: 600, color: 'var(--pb)',
        }}>
          {selectedCount} vertrouwde contacten geselecteerd
        </div>
        <Btn onClick={() => go('familie')}>Opslaan →</Btn>
      </div>
    </div>
  );
}