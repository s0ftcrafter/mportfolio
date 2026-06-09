import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-toggle__icon">
      <path
        fill="currentColor"
        d="M2 18h20v2H2v-2zm2.5-9.5L7 10l2.5-4 2.5 4 2.5-1.5L12 4 9.5 8.5 7 7l-2.5 1.5zM12 4l2.5 4.5L17 7l2.5 1.5L17 10l2.5 4.5H4.5L7 10 4.5 8.5 7 7l2.5-1.5L12 4z"
      />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    setAnimating(true)
    toggleTheme()
    window.setTimeout(() => setAnimating(false), 500)
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${animating ? 'theme-toggle--animating' : ''}`}
      onClick={handleClick}
      aria-label={theme === 'light' ? t('theme.toDark') : t('theme.toLight')}
      title={theme === 'light' ? t('theme.toDark') : t('theme.toLight')}
    >
      <CrownIcon />
    </button>
  )
}

export default ThemeToggle
