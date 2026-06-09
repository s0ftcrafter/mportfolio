const email = import.meta.env.VITE_CONTACT_EMAIL ?? 'muhametmuhameddinov345@gmail.com'

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/s0ftcrafter',
    variant: 'github',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    url: 'https://t.me/mhmttx',
    variant: 'telegram',
  },
  {
    id: 'email',
    label: 'Gmail',
    url: `mailto:${email}`,
    variant: 'email',
  },
]
