import React from 'react'
import { useLanguage } from './LanguageContext'

const PRESENTATIONS = [
  {
    conference: 'SIGN10 2024',
    url: 'https://sites.google.com/view/sign10/home',
    dates: { en: 'December 9–12, 2024', fr: '9–12 décembre 2024' },
    title: {
      en: 'Poster Presentation: Exploring Cross-Cultural and Cross-Linguistic Exchange For Sign Language Students.',
      fr: 'Présentation par affiche : Exploration d\'un échange interculturel et interlinguistique pour les étudiants en langue des signes.',
    },
  },
]

const LINKS = [
  {
    url: 'https://www.instagram.com/reel/DQd2pGTkftG/',
     label: 'Instagram — IDGS Universität Hamburg',
    description: {
      en: 'The Institut für Deutsche Gebärdensprache at the Universität Hamburg\'s Instagram post featuring our virtual exchange.',
      fr: 'Publication Instagram de l\'Institut für Deutsche Gebärdensprache de l\'Université de Hambourg présentant notre échange virtuel.',
    },
  },
]

export default function Presentations() {
  const { lang, t } = useLanguage()

  return (
    <main style={{
      minHeight: 'calc(100vh - 100px)',
      background: '#f0f7fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 28px 60px',
    }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>

        {/* Presentations section */}
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: '32px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '24px',
          textAlign: 'center',
        }}>
          {lang === 'fr' ? 'Présentations & Liens' : 'Presentations & Links'}
        </h2>

        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          {lang === 'fr' ? 'Présentations' : 'Presentations'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {PRESENTATIONS.map((p, i) => (
            <div key={i} style={{
              background: 'var(--paper-card)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '24px 28px',
            }}>
             <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: '4px',
              }}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    {p.conference}
                  </a>
                ) : p.conference}
              </div>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '13px',
                color: 'var(--ink-soft)',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {p.dates[lang]}
              </div>
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--ink-soft)',
                margin: 0,
              }}>
                {p.title[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Links section */}
        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          {lang === 'fr' ? 'Liens' : 'Links'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {LINKS.map((link, i) => (
            <div key={i} style={{
              background: 'var(--paper-card)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '24px 28px',
            }}>
      <a        
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '15px',
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  wordBreak: 'break-all',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {link.label}
              </a>
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: '14px',
                lineHeight: '1.7',
                color: 'var(--ink-soft)',
                margin: 0,
              }}>
                {link.description[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
