import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('in') // 'in' | 'pulse' | 'out'

  useEffect(() => {
    // Fase 1: apareix el logo (600ms)
    // Fase 2: pols suau (800ms)
    // Fase 3: desapareix (500ms)
    const t1 = setTimeout(() => setPhase('pulse'), 600)
    const t2 = setTimeout(() => setPhase('out'), 1400)
    const t3 = setTimeout(() => onComplete?.(), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-nit flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'out' ? 0 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => { if (phase === 'out') setPhase('done') }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src="/logo-green.png"
              alt="Arrel Studio"
              className="w-16 h-16 object-contain"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                phase === 'pulse'
                  ? { opacity: 1, scale: [1, 1.06, 1], transition: { duration: 0.8, ease: 'easeInOut' } }
                  : phase === 'out'
                  ? { opacity: 1, scale: 0.8 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Barra de progrés */}
            <div className="w-24 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-verd-accent rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
