// src/components/NavbarLogo/index.tsx
import React, { JSX } from 'react';

export default function NavbarLogo(): JSX.Element {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src="/img/logo.png"
        alt="Kemet Logo"
        style={{ height: '32px', width: 'auto' }}
      />
    </div>
  );
}