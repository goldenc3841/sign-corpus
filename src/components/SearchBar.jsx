import React from 'react'

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '520px',
  },
  input: {
    width: '100%',
    padding: '12px 16px 12px 44px',
    background: 'var(--paper-card)',
    border: '1.5px solid var(--border)',
    borderRadius: 'var(--radius)',
    fontSize: '15px',
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.15s',
  },
  icon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--ink-faint)',
    pointerEvents: 'none',
    fontSize: '17px',
  },
  clear: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--ink-faint)',
    padding: '4px',
    lineHeight: 1,
    fontSize: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }
}

export default function SearchBar({ value, onChange }) {
  return (
    <div style={styles.wrapper}>
      <span style={styles.icon}>⌕</span>
      <input
        style={styles.input}
        type="text"
        placeholder="Search by word or concept…"
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
      {value && (
        <button style={styles.clear} onClick={() => onChange('')} aria-label="Clear search">×</button>
      )}
    </div>
  )
}
