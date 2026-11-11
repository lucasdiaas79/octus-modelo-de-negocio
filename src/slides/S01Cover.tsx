import { motion } from 'framer-motion'
import { cover, meta } from '../content/content'
import { Logo } from '../components/Logo'
import { AnimatedSymbol } from '../components/Animated'
import { TentacleLines, Glow } from '../components/Textures'
import { rise, stagger } from '../components/motion'

export default function S01Cover() {
  return (
    <div className="tex-grid-dark relative min-h-[100dvh] overflow-hidden bg-black">
      <TentacleLines opacity={0.08} />
      <Glow className="right-[-10%] top-[10%] h-[70vh] w-[70vh]" />
      <motion.div variants={stagger(0.12, 0.2)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Logo /></motion.div>
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="pt-10 lg:pt-0">
            <motion.p variants={rise} className="label flex items-center gap-2 text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {cover.tag}
            </motion.p>
            <motion.h1 variants={rise} className="display h-xl mt-5">{cover.title}</motion.h1>
            <motion.p variants={rise} className="lead mt-6 max-w-[40ch]">{cover.subtitle}</motion.p>
            <motion.div variants={rise} className="mt-10 border-t border-white/10 pt-5 text-[13px] text-white/60">{meta.date}</motion.div>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[min(520px,62vh)] lg:block">
            <AnimatedSymbol className="h-full w-full" delay={0.4} float />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
