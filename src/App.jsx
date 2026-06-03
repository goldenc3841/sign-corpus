import React, { useState, useMemo } from 'react'
import { useSignData } from './useSignData'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import SignCard from './components/SignCard'
import VideoModal from './components/VideoModal'

export default function App() {
  const { allSigns, loading, error } = useSignData()
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ language: '', university: '', signer: '' })
  const [selectedSign, setSelectedSign] = useState(null)

  // Build unique filter option lists from the actual data
  const languages = useMemo(() =>
    [...new Set(allSigns.map(s => s.language).filter(Boolean))].sort(),
    [allSigns]
  )
  const universities = useMemo(() =>
    [...new Set(allSigns.map(s => s.university).filter(Boolean))].sort(),
    [allSigns]
  )

  // Filter and search signs client-side (fast, no extra API calls)
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
    <div style={{ minHeight: '100vh' }}>

      {/* Header */}
      <header style={{
        borderBottom: '1.5px solid var(--border)',
        background: 'var(--paper)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          {/* Top bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0 16px',
            borderBottom: '1px solid var(--border)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '4px',
              }}>
                University of Washington
              </div>
              <h1 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1,
              }}>
                Global Sign Language Corpus
              </h1>
            </div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--ink-faint)',
              textAlign: 'right',
            }}>
              {loading ? 'Loading…' : `${allSigns.length} signs`}
            </div>
          </div>

          {/* Search + filters */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '14px 0',
          }}>
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
      </header>

      {/* Main content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 28px 60px' }}>

        {/* Error state */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fca5a5',
            borderRadius: 'var(--radius)',
            padding: '16px 20px',
            color: '#991b1b',
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            marginBottom: '24px',
          }}>
            <strong>Could not load signs.</strong> Check that your .env file has the correct Airtable token and base ID.<br />
            <span style={{ opacity: 0.7 }}>Error: {error}</span>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{
                background: 'var(--paper-card)',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.05}s`,
              }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--paper-warm)' }} />
                <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ height: '20px', width: '60%', background: 'var(--paper-warm)', borderRadius: '2px' }} />
                  <div style={{ height: '12px', width: '40%', background: 'var(--paper-warm)', borderRadius: '2px' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredSigns.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'var(--ink-faint)',
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '40px', marginBottom: '12px' }}>∅</div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '13px' }}>
              No signs match your search.
            </p>
            <button
              onClick={() => { setQuery(''); setFilters({ language: '', university: '', signer: '' }) }}
              style={{
                marginTop: '16px',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: 'var(--accent)',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Sign grid */}
        {!loading && !error && filteredSigns.length > 0 && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
            }}>
              {filteredSigns.map(sign => (
                <SignCard
                  key={sign.id}
                  sign={sign}
                  onClick={() => setSelectedSign(sign)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Modal */}
      {selectedSign && (
        <VideoModal
          sign={selectedSign}
          onClose={() => setSelectedSign(null)}
        />
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
