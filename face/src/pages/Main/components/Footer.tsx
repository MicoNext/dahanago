import { useTheme } from '../../../components/providers/ThemeProvider'
import { HiOutlineHeart } from 'react-icons/hi'

const navigation = {
  main: [
    { label: 'Меню', href: '#menu' },
    { label: 'Адреса', href: '#locations' },
  ],
  info: [
    { label: 'Черкесск, ул. Промышленная, 15', href: '#locations' },
    { label: '+7 (8782) 25-45-40', href: 'tel:+78782254540' },
    { label: 'hello@dahanago.ru', href: 'mailto:hello@dahanago.ru' },
  ],
}

export const Footer = () => {
  const theme = useTheme()
  const { colors, font } = theme

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id='footer' className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">
          <div className="text-center lg:text-left lg:max-w-xs">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('hero')
              }}
              className="inline-block mb-4"
              style={{
                fontFamily: "'Marck Script', cursive",
                fontSize: '36px',
                color: colors.dahanagoRed,
                textDecoration: 'none',
              }}
            >
              Даханаго
            </a>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: font.family.primary,
                fontWeight: font.weight.regular,
                color: colors.textSecondary,
              }}
            >
              Кондитерская для души. Создаём торты и десерты с любовью и вниманием к каждой детали.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            <div className="text-center sm:text-left">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{
                  fontFamily: font.family.primary,
                  fontWeight: font.weight.medium,
                  color: colors.text,
                }}
              >
                Страницы
              </p>
              <div className="space-y-3">
                {navigation.main.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(item.href.replace('#', ''))
                    }}
                    className="block text-sm transition-colors duration-200 hover:opacity-70"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{
                  fontFamily: font.family.primary,
                  fontWeight: font.weight.medium,
                  color: colors.text,
                }}
              >
                Контакты
              </p>
              <div className="space-y-3">
                {navigation.info.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm transition-colors duration-200 hover:opacity-70"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 sm:mt-18 pt-8"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: font.family.primary,
              fontWeight: font.weight.regular,
              color: colors.textSecondary,
            }}
          >
            © 2025 Даханаго. Все права защищены.
          </p>

          <div className="flex items-center gap-1.5">
            <span
              className="text-xs"
              style={{
                fontFamily: font.family.primary,
                fontWeight: font.weight.regular,
                color: colors.textSecondary,
              }}
            >
              Сделано с
            </span>
            <HiOutlineHeart className="w-3.5 h-3.5" style={{ color: colors.dahanagoRed }} />
            <span
              className="text-xs"
              style={{
                fontFamily: font.family.primary,
                fontWeight: font.weight.regular,
                color: colors.textSecondary,
              }}
            >
              любовью
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}