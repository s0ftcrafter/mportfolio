import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser'

// EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_zbb21fi'
const EMAILJS_TEMPLATE_ID = 'template_4hj2nm7'
const EMAILJS_PUBLIC_KEY = 'cr54xjJ0xTsKUto8q'

const initialForm = { name: '', email: '', message: '' }

function ContactForm() {
  const { t } = useLanguage()
  const formRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('error')
      setErrorMessage(t('contact.emailNotConfigured'))
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.text || t('contact.error'))
    }
  }

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">{t('contact.title')}</h2>
      <p className="contact-form__desc">{t('contact.desc')}</p>

      <form ref={formRef} className="contact-form__form" onSubmit={handleSubmit} noValidate>
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
