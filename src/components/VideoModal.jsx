import React, { useEffect } from 'react'
import { getLanguageColor } from './languageColors'

// Converts a YouTube URL to an embeddable URL
function toEmbedUrl(url) {
  if (!url) return null
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/)
  if (!match) return null
  return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
}

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(26,23,20,0.75)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  backdropFilter: 'blur(4px)',
}

const modalStyle = {
  background: 'var(--paper-card)',
  borderRadius: 'var(--radius)',
  border: '1.5px solid var(--border)',
  width: '100%',
  maxWidth: '680px',
  maxHeight: '90vh',
  overflow: 'auto',
  boxShadow: '0 24px 80px rgba(26,23,20,0.35)',
  display: 'flex',
  flexDirection: 'column',
}

export default function VideoModal({ sign, onClose }) {
  const embedUrl = toEmbedUrl(sign.video_url)
  const langColor = getLanguageColor(sign.language)

  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={overlayStyle} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={modalStyle}>

        {/* Video player */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', flexShrink: 0 }}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={sign.gloss}
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#666', fontSize: '14px',
            }}>
              No video available
            </div>
          )}
        </div>

        {/* Metadata */}
        <div style={{ padding: '24px 28px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--ink)',
                marginBottom: '6px',
              }}>
                {sign.gloss || 'Untitled sign'}
              </h2>
              {sign.language && (
                <span style={{
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  background: langColor.bg,
                  color: langColor.text,
                  border: `1px solid ${langColor.border}`,
                  letterSpacing: '0.04em',
                }}>
                  {sign.language}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              style={{
                fontSize: '22px',
                color: 'var(--ink-faint)',
                lineHeight: 1,
                padding: '4px 8px',
                borderRadius: 'var(--radius)',
                flexShrink: 0,
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Metadata grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            borderTop: '1px solid var(--border)',
            paddingTop: '18px',
          }}>
            {[
              { label: 'Sign language', value: sign.language },
              { label: 'University', value: sign.university },
              { label: 'Signer ID', value: sign.signer_id },
              { label: 'Sign ID', value: sign.sign_id },
              { label: 'YouTube timestamp', value: sign.youtube_timestamp },
            ].filter(row => row.value).map(({ label, value }) => (
              <div key={label}>
                <div style={{
                  fontSize: '10px',
                  fontFamily: 'var(--mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-faint)',
                  marginBottom: '4px',
                }}>
                  {label}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Direct YouTube link */}
          {sign.video_url && (
            <a
              href={sign.video_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '20px',
                fontSize: '13px',
                fontFamily: 'var(--mono)',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--accent-soft)',
                paddingBottom: '1px',
              }}
            >
              Open on YouTube ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
