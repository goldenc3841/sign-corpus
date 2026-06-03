import React from 'react'

const styles = {
  panel: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
  },
  label: {
    fontSize: '11px',
    fontFamily: 'var(--mono)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    marginRight: '2px',
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  select: {
    padding: '8px 28px 8px 10px',
    background: 'var(--paper-card)',
    border: '1.5px solid var(--border)',
    borderRadius: 'var(--radius)',
    fontSize: '13px',
    color: 'var(--ink)',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239a9088'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    outline: 'none',
    transition: 'border-color 0.15s',
  },
  divider: {
    width: '1px',
    height: '20px',
    background: 'var(--border)',
    margin: '0 4px',
  },
  count: {
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    color: 'var(--ink-faint)',
    marginLeft: 'auto',
  }
}

export default function FilterPanel({ filters, onChange, languages, universities, resultCount, totalCount }) {
  function set(key, value) {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div style={styles.panel}>
      <div style={styles.group}>
        <span style={styles.label}>Language</span>
        <select
          style={styles.select}
          value={filters.language}
          onChange={e => set('language', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        >
          <option value="">All languages</option>
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div style={styles.divider} />

      <div style={styles.group}>
        <span style={styles.label}>University</span>
        <select
          style={styles.select}
          value={filters.university}
          onChange={e => set('university', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        >
          <option value="">All universities</option>
          {universities.map(uni => (
            <option key={uni} value={uni}>{uni}</option>
          ))}
        </select>
      </div>

      <div style={styles.divider} />

      <div style={styles.group}>
        <span style={styles.label}>Signer</span>
        <select
          style={styles.select}
          value={filters.signer}
          onChange={e => set('signer', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        >
          <option value="">All signers</option>
          <option value="native">Native signers only</option>
        </select>
      </div>

      <span style={styles.count}>
        {resultCount === totalCount
          ? `${totalCount} signs`
          : `${resultCount} of ${totalCount} signs`}
      </span>
    </div>
  )
}
