import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CONTACT_EMAIL = 'muhametmuhameddinov345@gmail.com'

const initialForm = { name: '', email: '', message: '' }

function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!CONTACT_EMAIL) {
      setStatus('error')
      setErrorMessage(t('contact.emailNotConfigured'))
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: t('contact.subject'),
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || t('contact.sendFailed'))
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || t('contact.error'))
    }
  }

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">{t('contact.title')}</h2>
      <p className="contact-form__desc">{t('contact.desc')}</p>

      <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
        <label className="contact-form__field">
          <span className="contact-form__label">{t('contact.name')}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
            placeholder={t('contact.namePlaceholder')}
            disabled={status === 'loading'}
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">{t('contact.email')}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="example@mail.com"
            disabled={status === 'loading'}
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">{t('contact.message')}</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            minLength={10}
            rows={5}
            placeholder={t('contact.messagePlaceholder')}
            disabled={status === 'loading'}
          />
        </label>

        <button type="submit" className="contact-form__submit" disabled={status === 'loading'}>
          {status === 'loading' ? t('contact.sending') : t('contact.submit')}
        </button>

        {status === 'success' && (
          <p className="contact-form__message contact-form__message--success" role="status">
            {t('contact.success')}
          </p>
        )}

        {status === 'error' && (
          <p className="contact-form__message contact-form__message--error" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
