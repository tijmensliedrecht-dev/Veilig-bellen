'use client';

import React from 'react';

export function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div className="status-bar" style={{ color: light ? '#fff' : 'var(--dark)' }}>
      <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
        ●●●● 5G 🔋
      </span>
    </div>
  );
}

export function Btn({
  children,
  onClick,
  variant = 'primary',
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  style?: React.CSSProperties;
}) {
  const cls = variant === 'outline' ? 'btn btn-outline'
    : variant === 'ghost' ? 'btn btn-ghost'
    : 'btn';
  const extra: React.CSSProperties = variant === 'dark'
    ? { background: 'var(--dark)' }
    : {};
  return (
    <button className={cls} onClick={onClick} style={{ ...extra, ...style }}>
      {children}
    </button>
  );
}

export function Card({
  children,
  style,
  onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <div className="card" style={style} onClick={onClick}>
      {children}
    </div>
  );
}

export function Tag({ children, variant }: { children: React.ReactNode; variant: 'green' | 'amber' | 'red' | 'blue' }) {
  return <span className={`tag tag-${variant}`}>{children}</span>;
}

export function Avatar({
  initials,
  bgColor,
  textColor,
  size = 44,
}: {
  initials: string;
  bgColor: string;
  textColor: string;
  size?: number;
}) {
  return (
    <div
      className="avatar"
      style={{
        background: bgColor,
        color: textColor,
        width: size,
        height: size,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}

export function BackButton({ onClick, label = '← Terug' }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: 'var(--pb)',
        fontSize: 15,
        cursor: 'pointer',
        marginBottom: 16,
        padding: 0,
        fontFamily: 'inherit',
      }}
    >
      {label}
    </button>
  );
}

export function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: sub ? 4 : 20 }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', letterSpacing: -0.4 }}>
        {title}
      </div>
      {sub && (
        <div style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 20, marginTop: 4 }}>
          {sub}
        </div>
      )}
    </div>
  );
}