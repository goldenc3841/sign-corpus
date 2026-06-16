import React, { useState, useMemo } from 'react'
import SearchBar from './components/SearchBar'
import SignCard from './components/SignCard'
import VideoModal from './components/VideoModal'
import { useConversationData } from './useConversationData'

export default function Conversations() {
  const { allVideos, loading, error } = useConversationData()
  const [query, setQuery] = useState('')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filtered = useMemo(() => {
    return allVideos.filter(v => {
      const q = query.toLowerCase()
      if (q && !v.gloss?.toLowerCase().includes(q)) return false
      return true
    })
  }, [allVideos, query])

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 28px 60px' }}>
      <div style={{ marginBottom: '24px' }}>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {error && (
        <div style={{
          background: '#fef2f2', border: '1px solid #fca5a5',
          borderRadius: 'var(--radius)', padding: '16px 20px',
          color: '#991b1b', fontFamily: 'var(--mono)', fontSize: '13px',
        }}>
          <strong>Could not load videos.</strong> {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--ink-faint)' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>∅</div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '13px' }}>No videos match your search.</p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map(video => (
            <SignCard key={video.id} sign={video} onClick={() => setSelectedVideo(video)} />
          ))}
        </div>
      )}

      {selectedVideo && (
        <VideoModal sign={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </main>
  )
}