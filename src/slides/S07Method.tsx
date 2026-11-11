import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { method } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S07Method() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={6} tone="light">{method.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5 max-w-[18ch]"><Rich text={method.title} accent="text-cyan-deep" /></motion.h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:pt-6">
          {method.steps.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.35 + i * 0.14 }} className={`cmp-p flex flex-col rounded-[18px] p-5 ${i === 3 ? 'bg-ink text-white' : 'glass-light'}`}>
              <span className={`text-[clamp(30px,3vw,46px)] font-extralight leading-none ${i === 3 ? 'text-cyan' : 'text-cyan-deep'}`}>0{i + 1}</span>
              <p className="mt-4 text-[18px] font-semibold tracking-[-0.01em]">{s.name}</p>
              <p className={`mt-1.5 text-[14px] leading-snug ${i === 3 ? 'text-white/75' : 'text-ink/70'}`}>{s.text}</p>
              <p className={`mt-auto flex items-center gap-1.5 pt-5 text-[12px] font-semibold uppercase tracking-[0.1em] ${i === 3 ? 'text-cyan' : 'text-cyan-deep'}`}>
                <ArrowDownRight className="h-3.5 w-3.5" />{s.out}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease, delay: 1 }} className="mt-4 hidden h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-deep/30 via-cyan-deep to-ink lg:block" />
      </motion.div>
    </div>
  )
}
