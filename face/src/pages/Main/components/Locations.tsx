import { motion } from 'framer-motion'
import { useTheme } from '../../../components/providers/ThemeProvider'
import { HiOutlineClock, HiOutlinePhone, HiOutlineMap, HiOutlineCake, HiOutlineHeart } from 'react-icons/hi'

interface Location {
  id: string
  city: string
  type: 'cafe'
  address: string
  phone: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  metro?: string
}

interface Production {
  id: string
  city: string
  type: 'production'
  address: string
  phone: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  description: string
}

const locations: Location[] = [
  {
    id: '1',
    city: 'Черкесск',
    type: 'cafe',
    address: 'ул. Ленина, 45',
    phone: '+7 (8782) 25-45-30',
    hours: '08:00 – 22:00',
    coordinates: { lat: 44.2233, lng: 42.0578 },
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600',
    metro: 'Центр',
  },
  {
    id: '2',
    city: 'Черкесск',
    type: 'cafe',
    address: 'пр. Победы, 120',
    phone: '+7 (8782) 25-45-31',
    hours: '09:00 – 23:00',
    coordinates: { lat: 44.2289, lng: 42.0512 },
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600',
    metro: 'Победа',
  },
  {
    id: '3',
    city: 'Черкесск',
    type: 'cafe',
    address: 'ул. Кавказская, 78',
    phone: '+7 (8782) 25-45-32',
    hours: '07:30 – 21:00',
    coordinates: { lat: 44.2156, lng: 42.0634 },
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600',
    metro: 'Южный',
  },
  {
    id: '5',
    city: 'Ставрополь',
    type: 'cafe',
    address: 'ул. Доваторцев, 55',
    phone: '+7 (8652) 45-22-10',
    hours: '08:00 – 22:00',
    coordinates: { lat: 45.0445, lng: 41.9691 },
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600',
    metro: 'Юго-Запад',
  },
  {
    id: '6',
    city: 'Ставрополь',
    type: 'cafe',
    address: 'пр. Карла Маркса, 32',
    phone: '+7 (8652) 45-22-11',
    hours: '09:00 – 23:00',
    coordinates: { lat: 45.0502, lng: 41.9745 },
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f570215b8?w=600',
    metro: 'Центр',
  },
]

const production: Production = {
  id: '4',
  city: 'Черкесск',
  type: 'production',
  address: 'ул. Промышленная, 15',
  phone: '+7 (8782) 25-45-40',
  hours: 'Круглосуточно',
  coordinates: { lat: 44.2311, lng: 42.0432 },
  image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200',
  description:
    'Здесь рождаются все наши десерты. Только натуральные ингредиенты, ручная работа и контроль качества на каждом этапе. Мы не готовим впрок — каждый торт создаётся под ваш заказ.',
}

const cities = [
  { name: 'Черкесск', count: 3, label: 'Карачаево-Черкесия' },
  { name: 'Ставрополь', count: 2, label: 'Ставропольский край' },
]

export const Locations = () => {
  const theme = useTheme()
  const { colors, font } = theme

  return (
    <section id='locations' className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-10"
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
            Где нас найти
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
            Пять кафе в двух регионах. И одно сердце — наше производство.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${colors.dahanagoGold})` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.dahanagoGold }} />
            <div className="h-px w-10 sm:w-14" style={{ background: `linear-gradient(90deg, ${colors.dahanagoGold}, transparent)` }} />
          </div>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {cities.map((city, cityIndex) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: cityIndex * 0.2, ease: 'easeOut' }}
            >
              <div className="flex items-baseline gap-3 mb-8 sm:mb-10">
                <h3
                  className="text-2xl sm:text-3xl"
                  style={{
                    fontFamily: font.family.primary,
                    fontWeight: font.weight.semiBold,
                    color: colors.text,
                  }}
                >
                  {city.name}
                </h3>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: font.family.primary,
                    fontWeight: font.weight.regular,
                    color: colors.textSecondary,
                  }}
                >
                  {city.label}
                </span>
                <div
                  className="h-px flex-1 ml-4"
                  style={{ background: `linear-gradient(90deg, ${colors.border}, transparent)` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {locations
                  .filter((loc) => loc.city === city.name)
                  .map((location, index) => (
                    <motion.article
                      key={location.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: cityIndex * 0.2 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative bg-white rounded-2xl overflow-hidden"
                      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                    >
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={location.image}
                          alt={`${location.city} — ${location.address}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <div
                            className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-widest uppercase backdrop-blur-sm"
                            style={{
                              backgroundColor: `${colors.dahanagoGold}E6`,
                              color: colors.white,
                              fontFamily: font.family.primary,
                            }}
                          >
                            Кафе
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                          <div>
                            <p
                              className="text-white/60 text-[10px] tracking-widest uppercase mb-1"
                              style={{ fontFamily: font.family.primary }}
                            >
                              {location.metro}
                            </p>
                            <p
                              className="text-white text-sm leading-snug"
                              style={{
                                fontFamily: font.family.primary,
                                fontWeight: font.weight.medium,
                              }}
                            >
                              {location.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-4">
                          <HiOutlineClock className="w-4 h-4 flex-shrink-0" style={{ color: colors.textSecondary }} />
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: font.family.primary,
                              fontWeight: font.weight.regular,
                              color: colors.textSecondary,
                            }}
                          >
                            {location.hours}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-5">
                          <HiOutlinePhone className="w-4 h-4 flex-shrink-0" style={{ color: colors.textSecondary }} />
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: font.family.primary,
                              fontWeight: font.weight.regular,
                              color: colors.textSecondary,
                            }}
                          >
                            {location.phone}
                          </span>
                        </div>

                        <a
                          href={`https://yandex.ru/maps/?ll=${location.coordinates.lng},${location.coordinates.lat}&z=16&text=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            backgroundColor: colors.dahanagoRed,
                            color: colors.white,
                            fontFamily: font.family.primary,
                            fontWeight: font.weight.medium,
                          }}
                        >
                          <HiOutlineMap className="w-3.5 h-3.5" />
                          Проложить маршрут
                        </a>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 sm:mt-32"
        >
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.dahanagoRed }}
            >
              <HiOutlineHeart className="w-5 h-5 text-white" />
            </div>
            <h3
              className="text-2xl sm:text-3xl"
              style={{
                fontFamily: font.family.primary,
                fontWeight: font.weight.semiBold,
                color: colors.text,
              }}
            >
              Производство
            </h3>
            <div
              className="h-px flex-1 ml-4"
              style={{ background: `linear-gradient(90deg, ${colors.dahanagoRed}40, transparent)` }}
            />
          </div>

          <div
            className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
          >
            <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={production.image}
                alt="Производство Даханаго"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div
                className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-widest uppercase inline-block mb-6"
                style={{
                  backgroundColor: `${colors.dahanagoRed}14`,
                  color: colors.dahanagoRed,
                  fontFamily: font.family.primary,
                }}
              >
                {production.city}
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed mb-8"
                style={{
                  fontFamily: font.family.primary,
                  fontWeight: font.weight.regular,
                  color: colors.textSecondary,
                  lineHeight: 1.8,
                }}
              >
                {production.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <HiOutlineCake className="w-5 h-5 flex-shrink-0" style={{ color: colors.dahanagoRed }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.text,
                    }}
                  >
                    {production.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HiOutlineClock className="w-5 h-5 flex-shrink-0" style={{ color: colors.textSecondary }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                    }}
                  >
                    {production.hours}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="w-5 h-5 flex-shrink-0" style={{ color: colors.textSecondary }} />
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: font.family.primary,
                      fontWeight: font.weight.regular,
                      color: colors.textSecondary,
                    }}
                  >
                    {production.phone}
                  </span>
                </div>
              </div>

              <a
                href={`https://yandex.ru/maps/?ll=${production.coordinates.lng},${production.coordinates.lat}&z=16&text=${encodeURIComponent(production.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto sm:inline-flex px-8 py-3 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: colors.dahanagoRed,
                  color: colors.white,
                  fontFamily: font.family.primary,
                  fontWeight: font.weight.medium,
                }}
              >
                <HiOutlineMap className="w-4 h-4" />
                Показать на карте
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="mt-20 sm:mt-28 bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
        >
          <div className="aspect-[21/9] sm:aspect-[21/7] w-full">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=42.0578%2C44.2233&z=9&pt=42.0578,44.2233,pm2rdl~42.0512,44.2289,pm2rdl~42.0634,44.2156,pm2rdl~42.0432,44.2311,pm2grl~41.9691,45.0445,pm2rdl~41.9745,45.0502,pm2rdl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта Даханаго"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}