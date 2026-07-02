import React from 'react'
import { useLanguage } from './LanguageContext'

const TEAM = [
  {
    name: 'Caitlin Golden',
    role: {
      en: 'Co-Founder & Program Director',
      fr: 'Co-fondatrice & Directrice du programme',
    },
    bio: {
      en: `Caitlin Golden received her MA from the University of Hamburg with a focus on comparative sign language constructed action storytelling in ASL and DGS (German Sign Language). She further received a Fulbright Specialist Grant to expand her CA storytelling research to include LSF (French Sign Language), which she studied at the University of Poitiers. Caitlin is passionate about understanding sign language and Deaf culture from a global scale.`,
      fr: `Caitlin Golden a obtenu son master à l'Université de Hambourg, avec une spécialisation en narration d'action construite comparative en LSQ et en DGS (langue des signes allemande). Elle a également reçu une bourse Fulbright pour étendre ses recherches à la LSF (langue des signes française), qu'elle a étudiée à l'Université de Poitiers. Caitlin est passionnée par la compréhension de la langue des signes et de la culture sourde à l'échelle mondiale.`,
    },
    photo: '/Caitlin_Golden.JPG',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
      { label: 'Email', url: 'mailto:you@example.com' },
    ],
  },
  {
    name: 'Kristi Winter',
    role: {
      en: 'Cofounder and Program Director, American Sign Language Expert',
      fr: 'Co-fondatrice & Directrice du programme et experte en langue des signes americaine',
    },
    bio: {
      en: `Kristi Winter is a full-time faculty member in the UW Linguistics Department and holds a BA in ASL Studies and an MA in Linguistics from Gallaudet University, along with ASLTA's highest-level Professional Certificate. With over 20 years of ASL teaching experience across universities and colleges, her research focuses on the sociolinguistics of Deaf communities, ASL morphology, and second language acquisition. She currently serves as President of the Washington State chapter of ASLTA.`,
      fr: `Kristi Winter est membre à temps plein du département de linguistique de l'UW et détient une licence en études ASL ainsi qu'un master en linguistique de l'Université Gallaudet, ainsi que le certificat professionnel le plus élevé de l'ASLTA. Forte de plus de 20 ans d'expérience dans l'enseignement de l'ASL, ses recherches portent sur la sociolinguistique des communautés sourdes, la morphologie de l'ASL et l'acquisition des langues secondes. Elle est actuellement présidente de la section de l'État de Washington de l'ASLTA.`,
    },
    photo: '/Kristi_Winter.jpg',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
    ],
  },
  {
    name: 'Dr. Tano Jean-Jacques Angoua',
    role: {
      en: `Côte d'Ivoire Sign Language Expert`,
      fr: `Experte en langue des signes de Côte d'Ivoire`,
    },
    bio: {
      en: `Dr. Tano Jean-Jacques Angoua is an Assistant Professor in the Department of Language Sciences at Félix Houphouët-Boigny University in Abidjan, Côte d'Ivoire, and one of the few African scholars whose work is entirely dedicated to the documentation and promotion of sign languages in West Africa. He earned his PhD in Sign Language Linguistics from Leiden University in 2016, with a dissertation on Bouakako Sign Language (LaSiBo), representing one of the first comprehensive descriptions of a village sign language in Francophone Africa. His research spans language documentation, Deaf education, sign language interpreting, linguistic justice, and the representation of African sign languages in AI and digital technologies. He has been a visiting researcher at Leiden University and a Fulbright Visiting Scholar at the University of New Mexico (2024), and has collaborated with universities and research centers across Europe, North America, and Africa. He is particularly known for his work on Côte d'Ivoire Sign Language (LSCI) and Bouakako Sign Language (LaSiBo), for which he has developed extensive video corpora contributing to their scientific recognition.`,
      fr: `Le Dr Tano Jean-Jacques Angoua est maître de conférences au Département des sciences du langage de l'Université Félix Houphouët-Boigny d'Abidjan, en Côte d'Ivoire, et l'un des rares chercheurs africains dont les travaux sont entièrement consacrés à la documentation et à la promotion des langues des signes en Afrique de l'Ouest. Il a obtenu son doctorat en linguistique des langues des signes à l'Université de Leyde en 2016, avec une thèse sur la langue des signes Bouakako (LaSiBo), l'une des premières descriptions complètes d'une langue des signes villageoise en Afrique francophone. Ses recherches portent sur la documentation linguistique, l'éducation des sourds, l'interprétation en langue des signes, la justice linguistique et la représentation des langues des signes africaines dans l'IA et les technologies numériques. Il a été chercheur invité à l'Université de Leyde et boursier Fulbright à l'Université du Nouveau-Mexique (2024). Il est particulièrement connu pour ses travaux sur la langue des signes de Côte d'Ivoire (LSCI) et la langue des signes Bouakako (LaSiBo).`,
    },
    photo: '',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/theirhandle' },
    ],
  },
   {
    name: 'Dr. Junhui Yang',
    role: {
      en: `British Sign Language Expert`,
      fr: `Experte en langue des signes britannique`,
    },
    bio: {
      en: `Dr. Yang is a Senior Lecturer at the University of Lanchashire, where she teaches Sign Linguistics, Deaf People in Society, Sign and Society, and British Sign Language courses in BSL & Deaf Studies Team. She supervises postgraduate project on sign languages and international Deaf cultural studies. Her international collaborations are constantly developing and she has gained a notable reputation both in the UK and abroad through the many papers and posters that she has presented at academic conferences. This has included securing funding for many Erasmus+ projects and student exchange trips.`,
      fr: `Dr. Yang est maître de conférences à l'Université du Lancashire, où elle enseigne la linguistique des langues des signes, les sourds dans la société, les signes et la société, ainsi que des cours de langue des signes britannique (BSL) au sein de l'équipe BSL & Deaf Studies. Elle encadre des projets de recherche de troisième cycle sur les langues des signes et les études culturelles sourdes à l'échelle internationale. Ses collaborations internationales sont en constante évolution et elle a acquis une réputation notable au Royaume-Uni et à l'étranger grâce aux nombreuses communications et affiches qu'elle a présentées lors de conférences académiques. Cela comprend l'obtention de financements pour de nombreux projets Erasmus+ et voyages d'échange étudiants.`,
    },
      photo: '/Junhui_Yang.jpg',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
      { label: 'Email', url: 'mailto:you@example.com' },
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
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: '32px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '24px',
          textAlign: 'center',
        }}>
          {t.about.title}
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
          <p style={{ margin: 0 }}>{t.about.description}</p>
        </div>

        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--ink)',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          {t.about.team}
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
                  {person.role[lang]}
                </div>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'var(--ink-soft)',
                  margin: '0 0 14px',
                }}>
                  {person.bio[lang]}
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
