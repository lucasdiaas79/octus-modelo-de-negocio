import { motion } from 'framer-motion'
import { closing } from '../content/content'
import { Logo } from '../components/Logo'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { TentacleLines } from '../components/Textures'
import { ease, rise, stagger } from '../components/motion'

export default function S13Closing() {
  return (
    <div className="tex-grid-dark relative min-h-[100dvh] overflow-hidden bg-black">
      <TentacleLines opacity={0.08} />
      <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Logo /></motion.div>
        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.h2 variants={rise} className="display h-lg max-w-[18ch]"><Rich text={closing.title} /></motion.h2>
            <div className="mt-8 grid gap-0 border-t border-white/10">
              {closing.summary.map((s, i) => (
                <motion.div key={s.k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.12 }} className="grid gap-1 border-b border-white/10 py-3.5 sm:grid-cols-[180px_1fr]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-cyan">{s.k}</p>
                  <p className="text-[15px] text-white/85">{s.v}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={rise} className="mt-6 text-[12px] text-white/45">{closing.signature}</motion.p>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[min(440px,54vh)] lg:block">
            <AnimatedSymbol className="h-full w-full" delay={0.3} float />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
