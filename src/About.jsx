import React from 'react'

export default function About() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 28px 60px' }}>
      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: '32px',
        fontWeight: 400,
        color: 'var(--ink)',
        marginBottom: '24px',
      }}>
        About Us
      </h2>
      <div style={{
        background: 'var(--paper-card)',
        border: '1.5px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '32px',
        fontSize: '15px',
        lineHeight: '1.8',
        color: 'var(--ink-soft)',
      }}>
        <p>Add your about us text here.</p>
      </div>
    </main>
  )
}