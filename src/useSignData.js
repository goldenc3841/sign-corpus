import { useState, useEffect } from 'react'

const TOKEN = 'pat8OghzyyESvfRVT.0814c3a3a7a82b14920e44dfe38df528f0b12611ad973500825edc82da5dff3b'
const BASE_ID = 'app4jPwliS62HdqLp'
const TABLE = 'Sign_Language_Corpus'

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
        gloss: f.gloss || null,
        language: f.language_text || null,
        university: f.university_text || null,
        signer_id: Array.isArray(f.signer_id) ? f.signer_id[0] : (f.signer_id || null),
        sign_id: f.sign_id || null,
        video_url: f.video_url || null,
        youtube_timestamp: f.youtube_timestamp || null,
      }
    })
    allRecords = [...allRecords, ...records]
    offset = data.offset
  } while (offset)
  return allRecords.sort((a, b) => (a.gloss || '').localeCompare(b.gloss || ''))
}

export function useSignData() {
  const [allSigns, setAllSigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchAllRecords()
      .then(records => { setAllSigns(records); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [])
  return { allSigns, loading, error }
}