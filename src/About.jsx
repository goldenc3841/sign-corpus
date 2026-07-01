import React from 'react'

const TEAM = [
  {
    name: 'Caitlin Golden',
    role: 'Co-Founder & Program Director',
    bio: `Caitlin Golden received her MA from the University of Hamburg with a focus on comparative sign language constructed action storytelling in ASL and DGS (German Sign Language). She further received a Fulbright Specialist Grant to expand her CA storytelling research to include LSF (French Sign Language), which she studied at the University of Poitiers. Caitlin is passionate about understanding sign language and Deaf culture from a global scale.`,
    photo: '/Caitlin_Golden.JPG',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/caitlin-golden-seattle/' },
      { label: 'Email', url: 'goldenc5310@gmail.com' },
    ],
  },
  {
    name: 'Kristi Winter',
    role: 'Co-Founder & Program Director, American Sign Language Specialist',
    bio: `Kristi Winter is a full-time faculty member in the UW Linguistics Department and holds a BA in ASL Studies and an MA in Linguistics from Gallaudet University, along with ASLTA's highest-level Professional Certificate. With over 20 years of ASL teaching experience across universities and colleges, her research focuses on the sociolinguistics of Deaf communities, ASL morphology, and second language acquisition. She currently serves as President of the Washington State chapter of ASLTA.`,
    photo: '/Kristi_Winter.jpg',
    links: [
      { label: 'Email', url: 'kwinter2@uw.edu' },
    ],
  },
  {
    name: 'Dr. Tano Jean-Jacques Angoua',
    role: `Côte d'Ivoire Sign Language Specialist`,
    bio: `Dr. Tano Jean-Jacques Angoua is an Assistant Professor in the Department of Language Sciences at Félix Houphouët-Boigny University in Abidjan, Côte d'Ivoire, and one of the few African scholars whose work is entirely dedicated to the documentation and promotion of sign languages in West Africa. He earned his PhD in Sign Language Linguistics from Leiden University in 2016, with a dissertation on Bouakako Sign Language (LaSiBo), representing one of the first comprehensive descriptions of a village sign language in Francophone Africa. His research spans language documentation, Deaf education, sign language interpreting, linguistic justice, and the representation of African sign languages in AI and digital technologies. He has been a visiting researcher at Leiden University and a Fulbright Visiting Scholar at the University of New Mexico (2024), and has collaborated with universities and research centers across Europe, North America, and Africa. He is particularly known for his work on Côte d'Ivoire Sign Language (LSCI) and Bouakako Sign Language (LaSiBo), for which he has developed extensive video corpora contributing to their scientific recognition.`,
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/theirhandle' },
    ],
  },
    {
    name: 'Dr. Junhui Yang',
    role: `British Sign Language Specialist`,
    bio: 'Bio coming soon!',
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/theirhandle' },
    ],
  },
    {
    name: 'Alexander Eisenzimmer',
    role: `German Sign Language Specialist`,
    bio: 'Bio coming soon!',
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/theirhandle' },
    ],
  },
  {
    name: 'Louise No Myrup',
    role: `Danish Sign Language Specialist`,
    bio: 'Bio coming soon!',
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
    }}>
      {initials}
    </div>
  )
}

export default function About() {
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
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: '32px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '24px',
          textAlign: 'center',
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
          fontFamily: 'var(--serif)',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
<p style={{ margin: '0 0 16px' }}>
  Welcome to VISLEX! We are a group of global sign language academics with a focus on globally-accessible sign language learning. 
</p>
<p style={{ margin: '0 0 16px' }}>
  Five years ago, Kristi Winter and Caitlin Golden had the idea to create a virtual sign language exchange program - a barrier-free, inexpensive opportunity for sign language students around the globe to connect to each other without leaving their homes.
</p>
<p style={{ margin: 0 }}>
  Now, to expand beyond the limitations of our exchange sessions, we have created VISLEX: a searchable corpus of sign language video data, built to support sign language education, global connectivity for the Deaf community, and linguistic research. 
</p>
        </div>

        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '20px',
          textAlign: 'center',
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
                  fontFamily: 'var(--serif)',
                  fontSize: '13px',
                  color: 'var(--ink-soft)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {person.role}
                </div>
                <p style={{
                  fontFamily: 'var(--serif)',
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
                          fontFamily: 'var(--serif)',
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
      </div>
    </main>
  )
}
