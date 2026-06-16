import { useState, useEffect } from 'react'

const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const TABLE = 'Conversations'

async function fetchAllRecords() {
  let allRecords = []
  let offset = null
  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`)
    if (offset) url.searchParams.set('offset', offset)
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${TOKEN}` }
    })
    if (!res.ok) throw new Error(`Airtable error: ${res.status} ${res.statusText}`)
    const data = await res.json()
    const records = (data.records || []).map(r => {
      const f = r.fields
      return {
        id: r.id,
        gloss: f.title || f.gloss || null,
        language: f.language_text || null,
        university: f.university_text || null,
        sign_id: f.conversation_id || null,
        video_url: f.video_url || null,
        youtube_timestamp: f.youtube_timestamp || null,
      }
    })
    allRecords = [...allRecords, ...records]
    offset = data.offset
  } while (offset)
  return allRecords.sort((a, b) => (a.gloss || '').localeCompare(b.gloss || ''))
}

export function useConversationData() {
  const [allVideos, setAllVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchAllRecords()
      .then(records => { setAllVideos(records); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [])
  return { allVideos, loading, error }
}