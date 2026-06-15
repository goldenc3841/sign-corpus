import React from 'react'
import { getLanguageColor } from './languageColors'

// Converts a YouTube URL or video ID into a thumbnail image URL.
function getYouTubeThumbnail(url) {
  if (!url) return null
  // Handle youtu.be/ID and youtube.com/watch?v=ID and youtube.com/embed/ID
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/)
  if (!match) return null
  return `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`
}

const cardStyle = {
  background: 'var(--paper-card)',
  border: '1.5px solid var(--border)',
  borderRadius: 'var(--radius)',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s',
  display: 'flex',
  flexDirection: 'column',
}

export default function SignCard({ sign, onClick }) {
  const thumbnail = getYouTubeThumbnail(sign.video_url)
  const langColor = getLanguageColor(sign.language)

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.borderColor = 'var(--border-strong)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`View sign: ${sign.gloss}`}
    >
      {/* Thumbnail */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--paper-warm)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Thumbnail for ${sign.gloss}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ink-faint)', fontSize: '28px',
          }}>
            ▶
          </div>
        )}
        {/* Play overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(26,23,20,0.18)',
          opacity: 0,
          transition: 'opacity 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          <div style={{
            width: 40, height: 40,
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', paddingLeft: '3px',
          }}>▶</div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h3 style={{
            fontFamily: 'var(--serif)',
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1.2,
            flex: 1,
          }}>
            {sign.gloss || '—'}
          </h3>
          {sign.language && (
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              padding: '3px 8px',
              borderRadius: '2px',
              background: langColor.bg,
              color: langColor.text,
              border: `1px solid ${langColor.border}`,
              whiteSpace: 'normal',
              flexShrink: 0,
              letterSpacing: '0.04em',
            }}>
              {sign.language}
            </span>
          )}
        </div>

        <div style={{ fontSize: '12px', color: 'var(--ink-faint)', fontFamily: 'var(--mono)', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {sign.university && <span>{sign.university}</span>}
        </div>
      </div>
    </div>
  )
}
