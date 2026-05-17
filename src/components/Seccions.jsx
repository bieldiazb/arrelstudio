import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, slideLeft, slideRight, stagger, staggerFast, useScrollReveal } from '../hooks/useAnimation'

export function ComFunciona() {
  const { t } = useTranslation()
  const passos = t('comFunciona.passos', { returnObjects: true })
  const { ref, isInView } = useScrollReveal()
  const { ref: passosRef, isInView: passosInView } = useScrollReveal()

  return (
    <section id="com-funciona" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-5 font-medium">{t('comFunciona.label')}</motion.div>
          <motion.h2 variants={fadeUp} className="leading-[0.9] tracking-tight mb-20">
            <span className="block font-display font-black text-5xl md:text-6xl text-crema uppercase">{t('comFunciona.titol1')}</span>
            <span className="block font-serif italic text-5xl md:text-6xl text-verd-accent">{t('comFunciona.titol2')}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={passosRef}
          className="grid md:grid-cols-3 gap-12"
          variants={stagger}
          initial="hidden"
          animate={passosInView ? 'visible' : 'hidden'}
        >
          {passos.map((p, i) => (
            <motion.div key={p.num} variants={fadeUp} className="relative">
              <div className="font-display font-black text-[8rem] leading-none text-white/4 select-none -left-2 tracking-tight">{p.num}</div>
              <div className="relative ">
                <motion.div
                  className="w-8 h-px bg-verd-accent mb-6"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={passosInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <h3 className="font-display font-black text-crema text-sm mb-3 tracking-widest uppercase">{p.title}</h3>
                <p className="font-sans font-light text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 p-8 rounded-2xl bg-nit-2 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={passosInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="font-display font-bold text-crema mb-1 tracking-tight">{t('comFunciona.banner')}</div>
            <div className="font-sans font-light text-sm text-white/40">{t('comFunciona.bannerSub')}</div>
          </div>
          <a href="#contacte" className="flex-shrink-0 bg-verd-accent text-nit font-sans font-semibold px-6 py-3 rounded-full hover:bg-verd-clar transition-colors text-xs tracking-widest uppercase">
            {t('comFunciona.cta')}
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export function SobreMi() {
  const { t } = useTranslation()
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  return (
    <section id="sobre-mi" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          ref={leftRef}
          variants={stagger}
          initial="hidden"
          animate={leftInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-6 font-medium">{t('sobreMi.label')}</motion.div>
          <motion.h2 variants={slideLeft} className="leading-[0.9] tracking-tight mb-8">
            <span className="block font-display font-black text-5xl md:text-6xl text-crema uppercase">{t('sobreMi.titol1')}</span>
            <span className="block font-display font-black text-5xl md:text-6xl text-crema uppercase">{t('sobreMi.titol2')}</span>
            <span className="block font-serif italic text-5xl md:text-6xl text-verd-accent">{t('sobreMi.titol3')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans font-light text-white/50 leading-relaxed mb-4 text-sm">{t('sobreMi.p1')}</motion.p>
          <motion.p variants={fadeUp} className="font-sans font-light text-white/50 leading-relaxed mb-8 text-sm">{t('sobreMi.p2')}</motion.p>
          <motion.a
            variants={fadeUp}
            href="#contacte"
            className="inline-flex items-center gap-2 text-verd-accent font-sans font-semibold text-xs tracking-widest uppercase hover:gap-3 transition-all"
          >
            {t('sobreMi.cta')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </motion.a>
        </motion.div>

        <motion.div
          ref={rightRef}
          className="flex justify-center md:justify-end"
          variants={slideRight}
          initial="hidden"
          animate={rightInView ? 'visible' : 'hidden'}
        >
          <div className="relative">
            <motion.div
              className="w-72 h-72 rounded-2xl bg-nit-2 border border-white/8 flex items-center justify-center"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="text-center">
                <div className="font-serif italic text-6xl text-verd-accent mb-3">Bd</div>
                <div className="font-sans font-light text-xs text-white/40 tracking-widest uppercase">Biel Díaz Basullas</div>
                <div className="font-sans font-light text-xs text-white/25 mt-1">{t('sobreMi.lloc')}</div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-verd-accent text-nit font-sans font-semibold text-xs px-4 py-2 rounded-full tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={rightInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('sobreMi.anys')}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export function FAQ() {
  const { t } = useTranslation()
  const faqs = t('faq.items', { returnObjects: true })
  const { ref, isInView } = useScrollReveal()
  const { ref: faqRef, isInView: faqInView } = useScrollReveal()

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">

        <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-5 font-medium">{t('faq.label')}</motion.div>
          <motion.h2 variants={fadeUp} className="leading-[0.9] tracking-tight mb-16">
            <span className="block font-display font-black text-5xl text-crema uppercase">{t('faq.titol1')}</span>
            <span className="block font-serif italic text-5xl text-verd-accent">{t('faq.titol2')}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={faqRef}
          className="divide-y divide-white/5"
          variants={stagger}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, i) => (
            <motion.details key={i} variants={fadeUp} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-sans font-medium text-sm text-crema/70 group-open:text-crema transition-colors">{faq.q}</span>
                <svg className="w-4 h-4 text-verd-accent flex-shrink-0 transition-transform group-open:rotate-45" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </summary>
              <p className="font-sans font-light text-sm text-white/40 leading-relaxed mt-4 pr-8">{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export function Contacte() {
  const { t, i18n } = useTranslation()
  const { ref, isInView } = useScrollReveal()
  const { ref: formRef, isInView: formInView } = useScrollReveal()
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'ok' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isCA = i18n.language === 'ca'

  return (
    <section id="contacte" className="py-28 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-verd-mig/8 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-2xl mx-auto">

        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-5 font-medium">{t('contacte.label')}</motion.div>
          <motion.h2 variants={fadeUp} className="leading-[0.9] tracking-tight mb-4">
            <span className="block font-display font-black text-5xl md:text-6xl text-crema uppercase">{t('contacte.titol1')}</span>
            <span className="block font-serif italic text-5xl md:text-6xl text-verd-accent">{t('contacte.titol2')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans font-light text-white/40 text-sm mt-6">{t('contacte.sub')}</motion.p>
        </motion.div>

        {status === 'ok' ? (
          <motion.div
            className="bg-nit-2 rounded-2xl p-12 border border-verd-mig/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-14 h-14 rounded-full bg-verd-mig/15 border border-verd-mig/30 flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8E040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="font-display font-black text-2xl text-crema uppercase tracking-tight mb-3">
              {isCA ? 'MISSATGE ENVIAT' : 'MENSAJE ENVIADO'}
            </h3>
            <p className="font-sans font-light text-white/50 text-sm leading-relaxed mb-8">
              {isCA
                ? "Gràcies per contactar amb Arrel Studio. Et respondré en menys de 24 hores."
                : "Gracias por contactar con Arrel Studio. Te responderé en menos de 24 horas."}
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs font-sans font-semibold text-verd-accent tracking-widest uppercase hover:underline"
            >
              {isCA ? 'Enviar un altre missatge' : 'Enviar otro mensaje'}
            </button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            action="https://formspree.io/f/mnjrqqld"
            onSubmit={handleSubmit}
            className="bg-nit-2 rounded-2xl p-8 border border-white/8 grid gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs text-white/25 mb-2 uppercase tracking-widest font-medium">{t('contacte.nom')}</label>
                <input type="text" name="nom" required placeholder={t('contacte.nomPh')}
                  className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans font-light text-sm text-crema placeholder-white/15 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
              </div>
              <div>
                <label className="block font-sans text-xs text-white/25 mb-2 uppercase tracking-widest font-medium">{t('contacte.negoci')}</label>
                <input type="text" name="negoci" placeholder={t('contacte.negociPh')}
                  className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans font-light text-sm text-crema placeholder-white/15 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
              </div>
            </div>
            <div>
              <label className="block font-sans text-xs text-white/25 mb-2 uppercase tracking-widest font-medium">{t('contacte.contacte')}</label>
              <input type="text" name="contacte" required placeholder={t('contacte.contactePh')}
                className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans font-light text-sm text-crema placeholder-white/15 focus:outline-none focus:border-verd-accent/50 transition-colors"/>
            </div>
            <div>
              <label className="block font-sans text-xs text-white/25 mb-2 uppercase tracking-widest font-medium">{t('contacte.missatge')}</label>
              <textarea name="missatge" rows={4} placeholder={t('contacte.missatgePh')}
                className="w-full bg-nit border border-white/8 rounded-xl px-4 py-3 font-sans font-light text-sm text-crema placeholder-white/15 focus:outline-none focus:border-verd-accent/50 transition-colors resize-none"></textarea>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" required id="privacy" className="mt-1 accent-verd-accent"/>
              <label htmlFor="privacy" className="font-sans font-light text-xs text-white/25">
                {t('contacte.privacy')}{' '}
                <a href="/privacitat" className="text-verd-accent hover:underline">{t('contacte.privacyLink')}</a>
              </label>
            </div>

            {status === 'error' && (
              <p className="text-xs font-sans text-red-400 text-center">
                {isCA ? "Hi ha hagut un error. Prova de nou o escriu a hola@arrelstudio.cat" : "Ha habido un error. Inténtalo de nuevo o escribe a hola@arrelstudio.cat"}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-verd-accent text-nit font-sans font-semibold py-4 rounded-full text-xs tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: status === 'sending' ? 1 : 1.02, backgroundColor: '#97C459' }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              transition={{ duration: 0.15 }}
            >
              {status === 'sending'
                ? (isCA ? 'Enviant...' : 'Enviando...')
                : t('contacte.enviar')}
            </motion.button>
            <p className="text-center font-sans font-light text-xs text-white/20">
              {t('contacte.o')}{' '}
              <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-0">
          <span className="font-display font-black text-lg text-crema tracking-tight uppercase">ARREL</span>
          <span className="font-serif italic text-verd-accent text-xl leading-none">.</span>
        </div>
        <div className="font-sans font-light text-xs text-white/25 text-center">
          {t('footer.lloc')} · hola@arrelstudio.cat
        </div>
        <div className="flex items-center gap-4 font-sans font-light text-xs text-white/25">
          <a href="/avis-legal" className="hover:text-white/60 transition-colors">{t('footer.avisLegal')}</a>
          <span>·</span>
          <a href="/privacitat" className="hover:text-white/60 transition-colors">{t('footer.privacitat')}</a>
          <span>·</span>
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  )
}