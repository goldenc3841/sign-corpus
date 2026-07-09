import React from 'react'
import { useLanguage } from './LanguageContext'

export default function Poster() {
  const { lang } = useLanguage()

  return (
    <main style={{
      minHeight: 'calc(100vh - 100px)',
      background: '#f0f7fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 28px 60px',
    }}>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <img
          src="/winter-golden-poster.jpg"
          alt="Presentation poster"
          style={{
            width: '100%',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}
        />
      </div>
    </main>
  )
}
