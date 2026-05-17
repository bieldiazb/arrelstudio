import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../hooks/useAnimation'

export default function Privacitat() {
  const { i18n } = useTranslation()
  const isCA = i18n.language === 'ca'

  return (
    <div className="min-h-screen bg-nit">
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
          {isCA ? 'Privacitat' : 'Privacidad'}
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-display font-black text-5xl text-crema uppercase tracking-tight leading-[0.95] mb-12">
          {isCA ? 'POLÍTICA DE' : 'POLÍTICA DE'}<br />
          <span className="font-serif italic text-verd-accent normal-case">{isCA ? 'privacitat' : 'privacidad'}</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="space-y-8 font-sans font-light text-white/60 leading-relaxed">
          {isCA ? (
            <>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">1. Responsable del tractament</h2>
                <ul className="text-sm space-y-1 list-none pl-0">
                  <li><span className="text-white/40">Responsable:</span> <span className="text-crema/80">Biel Díaz Basullas (Arrel Studio)</span></li>
                  <li><span className="text-white/40">Contacte:</span> <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a></li>
                </ul>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">2. Quines dades recollim</h2>
                <p className="text-sm">Quan ens contactes a través del formulari web o per email, recollim les dades que tu mateix ens proporciones: nom, negoci, email o telèfon i el contingut del missatge. No recollim dades de pagament ni informació sensible a través de la web.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">3. Per a què usem les teves dades</h2>
                <p className="text-sm">Les dades s'utilitzen exclusivament per respondre a la teva consulta i gestionar la relació comercial si contractes els nostres serveis. No cedirem les teves dades a tercers sense el teu consentiment, excepte per obligació legal.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">4. Els teus drets</h2>
                <p className="text-sm">D'acord amb el RGPD i la LOPDGDD, tens dret d'accés, rectificació, supressió, oposició, portabilitat i limitació del tractament. Per exercir-los, escriu a <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a> adjuntant una còpia del teu DNI.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">5. Cookies</h2>
                <p className="text-sm">Aquest lloc web pot utilitzar cookies tècniques necessàries per al seu funcionament. No s'utilitzen cookies de seguiment ni de publicitat sense el teu consentiment previ.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">6. Conservació de les dades</h2>
                <p className="text-sm">Conservem les teves dades mentre sigui necessari per a la finalitat per a la qual van ser recollides i durant els terminis legalment establerts.</p>
              </section>
              <p className="text-xs text-white/25 pt-4 border-t border-white/5">Darrera actualització: Maig 2025</p>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">1. Responsable del tratamiento</h2>
                <ul className="text-sm space-y-1 list-none pl-0">
                  <li><span className="text-white/40">Responsable:</span> <span className="text-crema/80">Biel Díaz Basullas (Arrel Studio)</span></li>
                  <li><span className="text-white/40">Contacto:</span> <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a></li>
                </ul>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">2. Qué datos recogemos</h2>
                <p className="text-sm">Cuando nos contactas a través del formulario web o por email, recogemos los datos que tú mismo nos proporcionas: nombre, negocio, email o teléfono y el contenido del mensaje. No recogemos datos de pago ni información sensible a través de la web.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">3. Para qué usamos tus datos</h2>
                <p className="text-sm">Los datos se utilizan exclusivamente para responder a tu consulta y gestionar la relación comercial si contratas nuestros servicios. No cederemos tus datos a terceros sin tu consentimiento, salvo por obligación legal.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">4. Tus derechos</h2>
                <p className="text-sm">De acuerdo con el RGPD y la LOPDGDD, tienes derecho de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento. Para ejercerlos, escribe a <a href="mailto:hola@arrelstudio.cat" className="text-verd-accent hover:underline">hola@arrelstudio.cat</a> adjuntando una copia de tu DNI.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">5. Cookies</h2>
                <p className="text-sm">Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No se utilizan cookies de seguimiento ni de publicidad sin tu consentimiento previo.</p>
              </section>
              <section>
                <h2 className="font-display font-bold text-crema text-sm uppercase tracking-widest mb-3">6. Conservación de los datos</h2>
                <p className="text-sm">Conservamos tus datos mientras sea necesario para la finalidad para la que fueron recogidos y durante los plazos legalmente establecidos.</p>
              </section>
              <p className="text-xs text-white/25 pt-4 border-t border-white/5">Última actualización: Mayo 2025</p>
            </>
          )}
        </motion.div>
      </motion.main>
    </div>
  )
}
