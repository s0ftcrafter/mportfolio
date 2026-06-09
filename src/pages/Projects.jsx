import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { publicUrl } from '../utils/publicUrl'

function Projects() {
  const { t } = useLanguage()

  return (
    <section className="page page--projects">
      <div className="page-badge">{t('projects.badge')}</div>
      <h1>{t('projects.title')}</h1>
      <p className="page-lead">{t('projects.lead')}</p>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={project.name}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card project-card--stagger-${index + 1}`}
            >
              <div className="project-card__preview">
                {project.image ? (
                  <img
                    src={publicUrl(project.image)}
                    alt={`${t('projects.screenshot')} ${project.name}`}
                    className="project-card__image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-card__placeholder" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <div className="project-card__head">
                  <span className="project-card__num">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="project-card__title">{project.name}</h2>
                </div>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-card__link">{t('projects.open')}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
