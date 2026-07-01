import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from './LanguageContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { t } = useLanguage()

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/signs?q=${encodeURIComponent(query.trim())}`)
    } else {
      navigate('/signs')
    }
  }

  return (
    <main style={{
      minHeight: 'calc(100vh - 100px)',
      background: '#f0f7fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 28px 60px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <img
          src="/vislex-logo.png"
          alt="VISLEX logo"
          style={{ height: '120px', width: 'auto' }}
        />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: '52px',
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1,
            margin: 0,
          }}>
            VISLEX
          </h1>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '15px',
            color: 'var(--ink)',
            marginTop: '6px',
            letterSpacing: '0.04em',
          }}>
            {t.home.subtitle}
          </p>
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--serif)',
        fontSize: '16px',
        color: 'var(--ink-soft)',
        textAlign: 'center',
        maxWidth: '580px',
        lineHeight: 1.7,
        marginBottom: '36px',
      }}>
        {t.home.welcome}
      </p>

      <p style={{
        fontFamily: 'var(--serif)',
        fontSize: '16px',
        color: 'var(--ink-soft)',
        textAlign: 'center',
        maxWidth: '580px',
        lineHeight: 1.7,
        marginBottom: '36px',
        marginTop: '12px',
      }}>
        <strong>{t.home.contact}</strong>
      </p>

      <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '520px' }}>
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
            color: 'var(--ink-faint)', fontSize: '15px', pointerEvents: 'none',
          }}>⌕</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.home.searchPlaceholder}
            style={{
              width: '100%',
              padding: '14px 48px 14px 40px',
              fontFamily: 'var(--serif)',
              fontSize: '15px',
              color: 'var(--ink)',
              background: 'var(--paper-card)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius)',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.15s',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <button
            type="submit"
            style={{
              position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 16px',
              fontFamily: 'var(--sans)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {t.home.searchButton}
          </button>
        </div>
      </form>
    </main>
  )
}
