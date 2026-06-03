// Maps sign language codes to accent colors for badges.
// Add more languages here as your corpus grows.
const LANGUAGE_COLORS = {
  'ASL':    { bg: '#e8f0fe', text: '#1a56a4', border: '#93b4f0' },
  'BSL':    { bg: '#fce8e6', text: '#a31515', border: '#f0a0a0' },
  'Auslan': { bg: '#e6f4ea', text: '#1a6e35', border: '#86c99a' },
  'JSL':    { bg: '#fef3e0', text: '#8a5a00', border: '#f0c96e' },
  'LSF':    { bg: '#f0e8fe', text: '#5b1ab0', border: '#c09af0' },
  'DGS':    { bg: '#e8fafe', text: '#0a6e82', border: '#7dcfe0' },
  'ISL':    { bg: '#fdecea', text: '#b03030', border: '#e8a0a0' },
  'LSE':    { bg: '#e8fef0', text: '#1a7a4a', border: '#80d4a0' },
}

const DEFAULT = { bg: 'var(--paper-warm)', text: 'var(--ink-soft)', border: 'var(--border)' }

export function getLanguageColor(language) {
  if (!language) return DEFAULT
  // Try exact match first, then prefix match
  return LANGUAGE_COLORS[language] || LANGUAGE_COLORS[language.toUpperCase()] || DEFAULT
}
