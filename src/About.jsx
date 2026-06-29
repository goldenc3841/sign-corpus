import React from 'react'

const TEAM = [
  {
    name: 'Caitlin Golden',
    role: 'Co-Founder & Program Director',
    bio: `Caitlin Golden received her MA from the University of Hamburg with a focus on comparative sign language constructed action storytelling in ASL and DGS (German Sign Language). She further received a Fulbright Specialist Grant to expand her CA storytelling research to include LSF (French Sign Language), which she studied at the University of Poitiers. Caitlin is passionate about understanding sign language and Deaf culture from a global scale.`,
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
      { label: 'Email', url: 'mailto:you@example.com' },
    ],
  },
  {
    name: 'Kristi Winter',
    role: 'Co-Founder & Program Director',
    bio: `Kristi Winter is a full-time faculty member in the UW Linguistics Department and holds a BA in ASL Studies and an MA in Linguistics from Gallaudet University, along with ASLTA's highest-level Professional Certificate. With over 20 years of ASL teaching experience across universities and colleges, her research focuses on the sociolinguistics of Deaf communities, ASL morphology, and second language acquisition. She currently serves as President of the Washington State chapter of ASLTA.`,
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
    ],
  },
  {
    name: 'Dr. Tano Jean-Jacques Angoua',
    role: `Côte d'Ivoire Sign Language Specialist`,
    bio: 'Brief bio here.',
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/theirhandle' },
    ],
  },
]

function Avatar({ name, photo }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return photo ? (
    <img
      src={photo}
      alt={name}
      style={{
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid var(--border)',
        flexShrink: 0,
      }}
    />
  ) : (
    <div style={{
      width: '88px',
      height: '88px',
      borderRadius: '50%',
      background: 'var(--border)',
      color: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--serif)',
      fontSize: '26px',
      fontWeight: 500,
      flexShrink: 0,
      border: '2px solid var(--border)',
    }}>
      {initials}
    </div>
  )
}

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
        marginBottom: '40px',
      }}>
        <p style={{ margin: 0 }}>
          VISLEX is a searchable corpus of sign language video data, built to support
          sign language education, global connectivity for the Deaf community, and linguistic research. It grew out of
          the Sign Language Virtual Exchange Program at the University of Washington.
        </p>
      </div>

      <h3 style={{
        fontFamily: 'var(--serif)',
        fontSize: '22px',
        fontWeight: 400,
        color: 'var(--ink)',
        marginBottom: '20px',
      }}>
        Team
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {TEAM.map((person) => (
          <div
            key={person.name}
            style={{
              background: 'var(--paper-card)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '28px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}
          >
            <Avatar name={person.name} photo={person.photo} />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: '2px',
              }}>
                {person.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'var(--ink-soft)',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {person.role}
              </div>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.7',
                color: 'var(--ink-soft)',
                margin: '0 0 14px',
              }}>
                {person.bio}
              </p>
              {person.links.length > 0 && (
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {person.links.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '13px',
                        color: 'var(--ink)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
