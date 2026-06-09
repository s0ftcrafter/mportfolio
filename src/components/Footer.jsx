import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p className="footer__copy">{t('footer')}</p>
    </footer>
  )
}

export default Footer
