import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useSearchParams } from 'react-router-dom'
import { useSignData } from './useSignData'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import SignCard from './components/SignCard'
import VideoModal from './components/VideoModal'
import Conversations from './Conversations'
import About from './About'
import Home from './Home'

function SignsPage() {
  const { allSigns, loading, error } = useSignData()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [filters, setFilters] = useState({ language: '', university: '' })
  const [selectedSign, setSelectedSign] = useState(null)

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setQuery(q)
  }, [searchParams])

  const languages = useMemo(() =>
    [...new Set(allSigns.map(s => s.language).filter(Boolean))].sort(),
    [allSigns]
  )
  const universities = useMemo(() =>
    [...new Set(allSigns.map(s => s.university).filter(Boolean))].sort(),
    [allSigns]
  )

  const filteredSigns = useMemo(() => {
    return allSigns.filter(sign => {
      const q = query.toLowerCase()
      if (q && !sign.gloss?.toLowerCase().includes(q)) return false
      if (filters.language && sign.language !== filters.language) return false
      if (filters.university && sign.university !== filters.university) return false
      return true
    })
  }, [allSigns, query, filters])

  return (
    <>
      <div style={{ background: '#f0f7fa', borderBottom: '1.5px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '14px 0' }}>
            <SearchBar value={query} onChange={setQuery} />
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              languages={languages}
              universities={universities}
              resultCount={filteredSigns.length}
              totalCount={allSigns.length}
            />
          </div>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 28px 60px' }}>
        {error && (
          <div style={{
            background: '#fef2f2', border: '1px solid #fca5a5',
            borderRadius: 'var(--radius)', padding: '16px 20px',
            color: '#991b1b', fontFamily: 'var(--mono)', fontSize: '13px',
            marginBottom: '24px',
          }}>
            <strong>Could not load signs.</strong> Check that your .env file has the correct Airtable token and base ID.<br />
            <span style={{ opacity: 0.7 }}>Error: {error}</span>
          </div>
        )}

        {loading && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{
                background: 'var(--paper-card)', border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius)', overflow: 'hidden',
              }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--paper-warm)' }} />
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ height: '20px', width: '60%', background: 'var(--paper-warm)', borderRadius: '2px' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && filteredSigns.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--ink-faint)' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>∅</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '13px' }}>No signs match your search.</p>
            <button
              onClick={() => { setQuery(''); setFilters({ language: '', university: '' }) }}
              style={{ marginTop: '16px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Clear all filters
            </button>
          </div>
        )}

        {!loading && !error && filteredSigns.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {filteredSigns.map(sign => (
              <SignCard key={sign.id} sign={sign} onClick={() => setSelectedSign(sign)} />
            ))}
          </div>
        )}

        {selectedSign && (
          <VideoModal sign={selectedSign} onClose={() => setSelectedSign(null)} />
        )}
      </main>
    </>
  )
}

function Header() {
  const navLinkStyle = ({ isActive }) => ({
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '13px',
    fontFamily: 'var(--sans)',
    fontWeight: 500,
    textDecoration: 'none',
    background: isActive ? 'var(--accent)' : 'transparent',
    color: isActive ? '#ffffff' : 'var(--ink-soft)',
    border: `1.5px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
    transition: 'all 0.15s',
  })

  return (
    <header style={{
      borderBottom: '1.5px solid var(--border)',
      background: '#f0f7fa',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 0',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src="/vislex-logo.png"
              alt="VISLEX logo"
              style={{ height: '80px', width: 'auto' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{
                fontFamily: 'var(--serif)',
                fontSize: '44px',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1,
                margin: 0,
              }}>
                VISLEX
              </h1>
              <span style={{
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--ink)',
                letterSpacing: '0.04em',
              }}>
                Virtual Sign Language Exchange Corpus
              </span>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '8px' }}>
            <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
            <NavLink to="/signs" style={navLinkStyle}>Signs</NavLink>
            <NavLink to="/conversations" style={navLinkStyle}>Conversations</NavLink>
            <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signs" element={<SignsPage />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}