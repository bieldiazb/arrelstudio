import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../hooks/useAnimation'

export default function AvisLegal() {
  const { i18n } = useTranslation()
  const isCA = i18n.language === 'ca'

  return (
    <div className="min-h-screen bg-nit">
      {/* Navbar simple */}
      <nav className="border-b border-white/5 px-6 h-16 flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-baseline gap-0">
          <span className="font-display font-black text-xl text-crema tracking-tight uppercase">ARREL</span>
          <span className="font-serif italic text-verd-accent text-2xl leading-none">.</span>
        </Link>
        <Link to="/" className="text-xs text-white/40 hover:text-crema font-sans tracking-widest uppercase transition-colors flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          {isCA ? 'Tornar' : 'Volver'}
        </Link>
      </nav>

      <motion.main
        className="max-w-3xl mx-auto px-6 py-20"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="text-verd-accent text-xs font-sans tracking-widest uppercase mb-4 font-medium">
          {isCA ? 'Avís legal' : 'Aviso legal'}
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-display font-black text-5xl text-crema uppercase tracking-tight leading-[0.95] mb-12">
          {isCA ? 'AVÍS' : 'AVISO'}<br />
          <span className="font-serif italic text-verd-accent normal-case">{isCA ? 'legal' : 'legal'}</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="prose prose-invert max-w-none font-sans font-light text-white/60 leading-relaxed space-y-8">
          {isCA ? (
            <>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">1. Dades identificatives</h2>
                <p className="text-sm">En compliment de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és:</p>
                <ul className="text-sm mt-3 space-y-1 list-none pl-0">
                  <li><span className="text-white/40">Titular:</span> <span className="text-crema/80">Biel Díaz Basullas</span></li>
                  <li><span className="text-white/40">Activitat:</span> <span className="text-crema/80">Disseny i desenvolupament web</span></li>
                  <li><span className="text-white/40">Domicili:</span> <span className="text-crema/80">Sant Fruitós de Bages, Barcelona</span></li>
                  <li><span className="text-white/40">Email:</span> <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a></li>
                </ul>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">2. Objecte i àmbit d'aplicació</h2>
                <p className="text-sm">Aquest avís legal regula l'ús del lloc web arrelstudio.cat. L'accés i l'ús d'aquest lloc web implica l'acceptació plena de les presents condicions.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">3. Propietat intel·lectual</h2>
                <p className="text-sm">Tots els continguts d'aquest lloc web (textos, imatges, logotips, disseny, codi) són propietat d'Arrel Studio. Queda prohibida la seva reproducció sense autorització expressa.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">4. Responsabilitat</h2>
                <p className="text-sm">Arrel Studio no es fa responsable dels danys derivats de l'ús incorrecte del lloc web ni de la interrupció del servei per causes alienes al seu control.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">5. Legislació aplicable</h2>
                <p className="text-sm">Les presents condicions es regeixen per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals de Barcelona.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">1. Datos identificativos</h2>
                <p className="text-sm">En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es:</p>
                <ul className="text-sm mt-3 space-y-1 list-none pl-0">
                  <li><span className="text-white/40">Titular:</span> <span className="text-crema/80">Biel Díaz Basullas</span></li>
                  <li><span className="text-white/40">Actividad:</span> <span className="text-crema/80">Diseño y desarrollo web</span></li>
                  <li><span className="text-white/40">Domicilio:</span> <span className="text-crema/80">Sant Fruitós de Bages, Barcelona</span></li>
                  <li><span className="text-white/40">Email:</span> <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a></li>
                </ul>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">2. Objeto y ámbito de aplicación</h2>
                <p className="text-sm">Este aviso legal regula el uso del sitio web arrelstudio.cat. El acceso y uso de este sitio web implica la aceptación plena de las presentes condiciones.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">3. Propiedad intelectual</h2>
                <p className="text-sm">Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño, código) son propiedad de Arrel Studio. Queda prohibida su reproducción sin autorización expresa.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">4. Responsabilidad</h2>
                <p className="text-sm">Arrel Studio no se hace responsable de los daños derivados del uso incorrecto del sitio web ni de la interrupción del servicio por causas ajenas a su control.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">5. Legislación aplicable</h2>
                <p className="text-sm">Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona.</p>
              </section>
            </>
          )}
        </motion.div>
      </motion.main>
    </div>
  )
}
