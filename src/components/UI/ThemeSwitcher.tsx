import React, { useState, useEffect } from 'react';

const iconStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  position: 'fixed',
  top: '24px',
  right: '32px',
  zIndex: 1000,
  outline: 'none',
  transition: 'color 0.3s'
};

const ThemeSwitcher: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-theme' : '';
    setPulse(true);
    const timeout = setTimeout(() => setPulse(false), 350);
    return () => clearTimeout(timeout);
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      style={{
        ...iconStyle
      }}
      onClick={() => setDark((d) => !d)}
    >
      <span
        style={{
          display: 'inline-block',
          transition: 'transform 0.35s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.3s',
          transform: pulse ? 'scale(1.18)' : 'scale(1)',
          opacity: pulse ? 0.7 : 1
        }}
      >
        {dark ? (
          // Sun icon for dark mode (to indicate switch to light) - use a light color for visibility
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f48fb1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <g>
              <line x1="12" y1="2" x2="12" y2="4"/>
              <line x1="12" y1="20" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
              <line x1="2" y1="12" x2="4" y2="12"/>
              <line x1="20" y1="12" x2="22" y2="12"/>
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
            </g>
          </svg>
        ) : (
          // Moon with stars icon for light mode (to indicate switch to dark) - use a dark color
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#232946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="#232946" stroke="none"/>
            <circle cx="15" cy="10" r="1" fill="#232946" stroke="none"/>
          </svg>
        )}
      </span>
    </button>
  );
};

export default ThemeSwitcher;