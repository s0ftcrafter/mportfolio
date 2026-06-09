import { useEffect, useRef, useState } from 'react'
import { languages } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  const current = languages.find((item) => item.code === lang) ?? languages[0]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectLang = (code) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div className="lang-toggle" ref={rootRef}>
      <button
        type="button"
        className="lang-toggle__btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('lang.select')}
        aria-expanded={open}
      >
        <span className="lang-toggle__flag" aria-hidden="true">
          {current.flag}
        </span>
      </button>

      {open && (
        <ul className="lang-toggle__menu" role="listbox">
          {languages.map((item) => (
            <li key={item.code} role="option" aria-selected={item.code === lang}>
              <button
                type="button"
                className={`lang-toggle__option ${item.code === lang ? 'lang-toggle__option--active' : ''}`}
                onClick={() => selectLang(item.code)}
              >
                <span className="lang-toggle__flag" aria-hidden="true">
                  {item.flag}
                </span>
                <span className="lang-toggle__code">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageToggle
