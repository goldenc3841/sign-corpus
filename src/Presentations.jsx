import React from 'react'
import { useLanguage } from './LanguageContext'

const UPCOMING_EVENTS = [
  {
    title: {
      en: 'Virtual Sign Language Exchange Session: Fall 2026',
      fr: 'Session d\'échange virtuel en langue des signes — Automne 2026',
    },
    sessions: [
      { date: 'Monday, October 5th', time: '10:30-11:20 PST', presenter: 'Alexander Eisenzimmer', language: 'German Sign Language (DGS)' },
      { date: 'Wednesday, October 7th', time: '10:30-11:20 PST', presenter: 'Nvidia', language: 'English/American Sign Language (ASL)' },
      { date: 'Friday, October 9th', time: '10:30-11:20 PST', presenter: 'Junhui Yang', language: 'British Sign Language (BSL)' },
      { date: 'Wednesday, October 14th', time: '10:30-11:20 PST', presenter: 'TBD', language: 'English and/or American Sign Language (ASL)' },
      { date: 'Friday, October 16th', time: '10:30-11:20 PST', presenter: 'Angoua Tano', language: 'Ivory Coast Sign Language (LSCI)' },
      { date: 'Monday, October 19th', time: '10:30-11:20 PST', presenter: 'Leia Clancy (Signapse)', language: 'English/British Sign Language (BSL)' },
      { date: 'Wednesday, October 28th', time: '10:30-11:20 PST', presenter: 'Logan Koch', language: 'English' },
      { date: 'Friday, October 30th', time: '10:30-11:20 PST', presenter: 'Xiaorong Zhou', language: 'Chinese Sign Language (CSL)' },
      { date: 'Monday, November 2nd', time: '10:30-11:20 PST', presenter: 'Eyasu Hailu Tamene', language: 'Ethiopian Sign Language (ESL)' },
      { date: 'Monday, November 16th', time: '10:30-11:20 PST', presenter: 'Brendan Gramer', language: 'American Sign Language (ASL)' }
    ],
    open_to: {
      en: 'Any sign language student or instructor — from the brand-new to the highly skilled.',
      fr: 'Tout étudiant ou instructeur en langue des signes — du débutant au très expérimenté.',
    },
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
  {
    url: 'https://www.instagram.com/reel/Dcy47iiRTf0/?stkn=MXZuNDZmMGg0ZDlxbA%3D%3D',
    label: 'Instagram — IDGS Universität Hamburg',
    description: {
      en: 'The Institut für Deutsche Gebärdensprache at the Universität Hamburg\'s Instagram second post featuring our virtual exchange.',
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
          {lang === 'fr' ? 'Événements, Présentations & Liens' : 'Upcoming Events, Presentations & Links'}
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

              <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
                <table style={{
                  width: '100%',
                  minWidth: '480px',
                  borderCollapse: 'collapse',
                  fontFamily: 'var(--serif)',
                  fontSize: '14px',
                  color: 'var(--ink-soft)',
                }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '6px 12px 6px 0', borderBottom: '1.5px solid var(--border)', color: 'var(--ink)' }}>
                        {lang === 'fr' ? 'Date' : 'Date'}
                      </th>
                      <th style={{ textAlign: 'left', padding: '6px 12px', borderBottom: '1.5px solid var(--border)', color: 'var(--ink)' }}>
                        {lang === 'fr' ? 'Heure' : 'Time'}
                      </th>
                      <th style={{ textAlign: 'left', padding: '6px 12px', borderBottom: '1.5px solid var(--border)', color: 'var(--ink)' }}>
                        {lang === 'fr' ? 'Présentateur' : 'Presenter'}
                      </th>
                      <th style={{ textAlign: 'left', padding: '6px 0 6px 12px', borderBottom: '1.5px solid var(--border)', color: 'var(--ink)' }}>
                        {lang === 'fr' ? 'Langue' : 'Language'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.sessions.map((session, j) => (
                      <tr key={j}>
                        <td style={{ padding: '8px 12px 8px 0', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>{session.date}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>{session.time}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>{session.presenter}</td>
                        <td style={{ padding: '8px 0 8px 12px', borderBottom: '1px solid var(--border)' }}>{session.language}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: 'var(--ink-soft)' }}>
                  <strong>{lang === 'fr' ? 'Ouvert à : ' : 'Open to: '}</strong>{event.open_to[lang]}
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
