import ContactForm from '../components/ContactForm'
import { useLanguage } from '../context/LanguageContext'

function Blog() {
  const { t } = useLanguage()
  const posts = t('blog.posts')

  return (
    <section className="page page--blog">
      <div className="page-hero">
        <div className="page-badge">{t('blog.badge')}</div>
        <h1>{t('blog.title')}</h1>
        <p className="page-lead">{t('blog.lead')}</p>
      </div>

      <div className="page-body">
        <ul className="blog-list">
          {posts.map((post, index) => (
            <li key={post.title} className={`blog-item blog-item--stagger-${index + 1}`}>
              <span className={`blog-item__tag blog-item__tag--${post.tagVariant}`}>
                {post.tag}
              </span>
              <h2>{post.title}</h2>
              <p className="blog-item__desc">{post.desc}</p>
              <time>{post.date}</time>
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  )
}

export default Blog
