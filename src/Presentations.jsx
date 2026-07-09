import React from 'react'
import { useLanguage } from './LanguageContext'

const UPCOMING_EVENTS = [
  {
    title: {
      en: 'Virtual Sign Language Exchange Session: Fall 2026',
      fr: 'Session d\'échange virtuel en langue des signes — Automne 2026',
    },
    date: { en: 'TBD', fr: 'À déterminer' },
    time: { en: 'TBD', fr: 'À déterminer' },
    topics: {
      en: 'TBD',
      fr: 'À déterminer',
    },
    professors: 'TBD',
    open_to: {
      en: 'Open to any sign language student or instructor — from the brand-new to the highly skilled.',
      fr: 'Ouvert à tout étudiant ou instructeur en langue des signes — du débutant au très expérimenté.',
    },
    contact: 'goldenc5310(at)gmail.com',
  },
]

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
  {
    conference: 'University of Washington Linguistics Colloquium Series',
    dates: { en: 'December 6, 2024', fr: '6 décembre 2024' },
    title: {
      en: 'Exploring Virtual Cross-Cultural and Cross-Linguistic Exchange for Sign Language Students',
      fr: 'Exploration d\'un échange virtuel interculturel et interlinguistique pour les étudiants en langue des signes',
    },
     link: '/poster',
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
      <div style={{ width: '100%', maxWidth: '800px' }}>

        {/* Page title */}
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: '32px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
{lang === 'fr' ? 'Événements, Présentations &amp; Liens' : 'Upcoming Events, Presentations & Links'}
</h2>
        {/* Upcoming Events section */}
        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          {lang === 'fr' ? 'Événements à venir' : 'Upcoming Events'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {UPCOMING_EVENTS.map((event, i) => (
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
                marginBottom: '12px',
              }}>
                {event.title[lang]}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Date : ' : 'Date: '}</strong>{event.date[lang]}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Heure : ' : 'Time: '}</strong>{event.time[lang]}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Sujets : ' : 'Topics: '}</strong>{event.topics[lang]}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Professeurs et universités : ' : 'Professors & Universities: '}</strong>{event.professors}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Ouvert à : ' : 'Open to: '}</strong>{event.open_to[lang]}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Pour plus d\'informations : ' : 'For more info: '}</strong>{event.contact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Presentations section */}
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
                ) : p.link ? (
                  <a href={p.link} style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
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
              {p.poster && (
                <img
                  src={p.poster}
                  alt="Presentation poster"
                  style={{
                    marginTop: '16px',
                    width: '100%',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                  }}
                />
              )}
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