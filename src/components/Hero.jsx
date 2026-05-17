import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger } from '../hooks/useAnimation'

export default function Hero() {
  const { t } = useTranslation()

  const stats = [
    { val: t('hero.stat1val'), sub: t('hero.stat1sub') },
    { val: t('hero.stat2val'), sub: t('hero.stat2sub') },
    { val: t('hero.stat3val'), sub: t('hero.stat3sub') },
  ]

  const pills = [t('hero.pill1'), t('hero.pill2'), t('hero.pill3'), t('hero.pill4')]

  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">
      {/* Orbs de fons */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-verd-mig/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-verd-accent/5 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{backgroundImage: 'linear-gradient(#639922 1px, transparent 1px), linear-gradient(90deg, #639922 1px, transparent 1px)', backgroundSize: '80px 80px'}}>
      </div>

      <div className="relative max-w-6xl mx-auto w-full py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

          <motion.div
            className="max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 border border-verd-mig/30 text-verd-accent text-xs font-sans px-3 py-1.5 rounded-full mb-10 bg-verd-mig/5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-verd-accent rounded-full animate-pulse"></span>
              {t('hero.badge')}
            </motion.div>

            <div className="leading-[0.9] tracking-tight mb-3">
              <motion.span
                variants={fadeUp}
                className="block font-display font-black text-7xl md:text-8xl lg:text-[96px] text-crema uppercase"
              >
                {t('hero.titol1')}
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block font-serif italic text-6xl md:text-7xl lg:text-8xl text-verd-accent"
              >
                {t('hero.titol2')}
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block font-display font-black text-7xl md:text-8xl lg:text-[96px] text-crema uppercase"
              >
                {t('hero.titol3')}
              </motion.span>
            </div>

            <motion.p variants={fadeUp} className="font-sans font-light text-white/50 text-lg leading-relaxed mb-10 max-w-lg mt-8">
              {t('hero.desc')}{' '}
              <span className="text-crema/80 font-medium">{t('hero.desde')}</span>
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a href="#paquets" className="bg-verd-accent text-nit font-sans font-semibold px-7 py-3.5 rounded-full hover:bg-verd-clar transition-all hover:scale-[1.02] tracking-wide text-sm uppercase">
                {t('hero.cta1')}
              </a>
              <a href="#contacte" className="text-crema/60 font-sans text-sm hover:text-crema transition-colors flex items-center gap-2 font-medium">
                {t('hero.cta2')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex md:flex-col gap-8 md:gap-8 md:text-right pb-2 flex-shrink-0"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="font-display font-black text-3xl text-verd-accent tracking-tight">{s.val}</div>
                <div className="font-sans text-xs text-white/30 mt-1 font-light">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pills */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/8 flex flex-wrap gap-6 items-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {pills.map((text, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="flex items-center gap-2 text-xs font-sans text-white/35 font-light tracking-wide"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#A8E040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
