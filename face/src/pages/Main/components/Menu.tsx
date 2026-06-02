import { motion } from 'framer-motion'
import { useTheme } from '../../../components/providers/ThemeProvider'

interface Cake {
  id: string
  name: string
  description: string
  price: number
  weight: string
  image: string
  badge?: 'hit' | 'new'
  servings: string
}

const cakes: Cake[] = [
  {
    id: '1',
    name: 'Медовик',
    description: 'Мёд, сметана, грецкий орех',
    price: 2800,
    weight: '2 кг',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600',
    badge: 'hit',
    servings: '8–10 персон',
  },
  {
    id: '2',
    name: 'Красный бархат',
    description: 'Какао, сливочный крем, ягоды',
    price: 3400,
    weight: '2.2 кг',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600',
    badge: 'hit',
    servings: '10–12 персон',
  },
  {
    id: '3',
    name: 'Тирамису',
    description: 'Савоярди, маскарпоне, кофе',
    price: 2600,
    weight: '1.8 кг',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
    badge: 'new',
    servings: '6–8 персон',
  },
  {
    id: '4',
    name: 'Чизкейк Нью-Йорк',
    description: 'Сливочный сыр, ваниль, песочная основа',
    price: 3100,
    weight: '1.9 кг',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600',
    servings: '8–10 персон',
  },
  {
    id: '5',
    name: 'Морковный торт',
    description: 'Морковь, корица, сливочный крем',
    price: 2500,
    weight: '1.8 кг',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600',
    servings: '6–8 персон',
  },
  {
    id: '6',
    name: 'Шоколадный мусс',
    description: 'Бельгийский шоколад, воздушный мусс',
    price: 3600,
    weight: '2 кг',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600',
    badge: 'new',
    servings: '10–12 персон',
  },
]

const badgeConfig = {
  hit: { label: 'Хит', bg: '#C49530' },
  new: { label: 'Новинка', bg: '#FC2D58' },
}

export const Menu = () => {
  const theme = useTheme()
  const { colors, font } = theme

  return (
    <section id='menu' className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: font.family.accent,
              fontSize: 'clamp(38px, 5vw, 56px)',
              fontWeight: font.weight.semiBold,
              color: colors.text,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
            }}
          >
            Торты
          </h2>

          <p
            className="text-sm sm:text-base max-w-lg mx-auto"
            style={{
              fontFamily: font.family.primary,
              fontWeight: font.weight.regular,
              color: colors.textSecondary,
              lineHeight: 1.6,
            }}
          >
            Каждый торт создаётся вручную под ваш заказ. Минимум за 24 часа до счастливого момента.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${colors.dahanagoGold})` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.dahanagoGold }} />
            <div className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, ${colors.dahanagoGold}, transparent)` }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cakes.map((cake, index) => (
            <motion.article
              key={cake.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {cake.badge && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-widest uppercase"
                    style={{
                      backgroundColor: badgeConfig[cake.badge].bg,
                      color: '#FFFFFF',
                      fontFamily: font.family.primary,
                    }}
                  >
                    {badgeConfig[cake.badge].label}
                  </div>
                )}

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                  style={{ backgroundColor: colors.white }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={colors.dahanagoRed}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                </motion.button>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl sm:text-2xl"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.semiBold,
                      color: colors.text,
                    }}
                  >
                    {cake.name}
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{
                    fontFamily: font.family.primary,
                    fontWeight: font.weight.regular,
                    color: colors.textSecondary,
                  }}
                >
                  {cake.description}
                </p>

                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                    }}
                  >
                    {cake.weight}
                  </span>
                  <span className="text-[10px]" style={{ color: colors.textSecondary }}>·</span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                    }}
                  >
                    {cake.servings}
                  </span>
                </div>

                <div className="flex items-end justify-between pt-5" style={{ borderTop: `1px solid ${colors.border}` }}>
                  <span
                    className="text-2xl sm:text-3xl leading-none"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.semiBold,
                      color: colors.dahanagoGold,
                    }}
                  >
                    {cake.price.toLocaleString()} ₽
                  </span>

                  <motion.button
                    whileHover={{ gap: '8px' }}
                    className="flex items-center gap-0 px-4 py-2.5 rounded-xl transition-all duration-500 hover:px-5"
                    style={{
                      backgroundColor: colors.dahanagoRed,
                      fontFamily: font.family.primary,
                    }}
                  >
                    <span
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: font.family.primary }}
                    >
                      Заказать
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 group-hover/btn:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}