import { useLanguage } from '../context/LanguageContext'
import SocialLinks from '../components/SocialLinks'
import { publicUrl } from '../utils/publicUrl'

function Home() {
  const { t } = useLanguage()

  return (
    <section className="page page--home">
      <div className="page-badge">{t('home.badge')}</div>

      <div className="hero">
        <div className="hero__top">
          <img
            className="hero__photo"
            src={publicUrl('/profile.png')}
            alt={t('home.photoAlt')}
            width={96}
            height={96}
          />
          <h1 className="hero__title">
            <span className="hero__line">{t('home.hello')}</span>
            <span className="hero__line">
              {t('home.im')} <span className="hero__highlight">{t('home.name')}</span>
            </span>
          </h1>
        </div>
        <p className="hero__text">
          {t('home.intro')} <strong>s0ftcrafter</strong>.
        </p>
      </div>

      <div className="page-cards">
        <article className="page-card page-card--dark page-card--stagger-1">
          <span className="page-card__label">M</span>
          <h2>{t('home.aboutTitle')}</h2>
          <p>{t('home.aboutText')}</p>
        </article>
        <article className="page-card page-card--light page-card--stagger-2">
          <span className="page-card__label">8</span>
          <h2>{t('home.projectsTitle')}</h2>
          <p>{t('home.projectsText')}</p>
        </article>
      </div>

      <SocialLinks className="page-socials" />
    </section>
  )
}

export default Home
