import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const PAGE_KEYS = {
  '/': 'home',
  '/blog': 'blog',
  '/projects': 'projects',
}

function PageMeta() {
  const { pathname } = useLocation()
  const { lang, t } = useLanguage()

  useEffect(() => {
    const pageKey = PAGE_KEYS[pathname] ?? 'home'
    document.title = t(`seo.pages.${pageKey}`)

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = t('seo.description')
  }, [pathname, lang, t])

  return null
}

export default PageMeta
