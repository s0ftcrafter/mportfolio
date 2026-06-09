import { socials } from '../data/socials'
import { SocialIcon } from './SocialIcons'

function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`.trim()}>
      <ul className="socials__list">
        {socials.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              className={`socials__link socials__link--${social.variant}`}
              aria-label={social.label}
              {...(social.id !== 'email' && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <span className="socials__icon">
                <SocialIcon id={social.id} />
              </span>
              <span className="socials__label">{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
