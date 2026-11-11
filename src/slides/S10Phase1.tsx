import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { phase1 } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { ease, rise, stagger } from '../components/motion'

const pos = ['left-1/2 top-0 -translate-x-1/2', 'right-0 top-1/2 -translate-y-1/2', 'left-1/2 bottom-0 -translate-x-1/2', 'left-0 top-1/2 -translate-y-1/2']

export default function S10Phase1() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={9}>{phase1.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[24ch]"><Rich text={phase1.title} /></motion.h2>

        <div className="mt-8 grid items-center gap-10 lg:my-auto lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pt-6">
          <div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {phase1.revenue.map((r, i) => (
                <motion.div key={r.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.35 + i * 0.12 }} className={`cmp-p rounded-[16px] p-5 ${i ? 'bg-cyan text-ink' : 'glass'}`}>
                  <p className={`label ${i ? 'text-ink/65' : 'text-cyan'}`}>Receita</p>
                  <p className="mt-2 text-[22px] font-semibold tracking-[-0.01em]">{r.name}</p>
                  <p className={`mt-1 text-[14px] leading-snug ${i ? 'text-ink/75' : 'text-white/75'}`}>{r.text}</p>
                </motion.div>
              ))}
            </div>
            <ul className="mt-4 grid gap-2">
              {phase1.notes.map((n, i) => (
                <motion.li key={n} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.1 }} className="flex gap-2.5 text-[14px] text-white/75">
                  <Info className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan" />{n}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-3 text-center text-cyan">{phase1.loopLabel}</p>
            <div className="relative mx-auto aspect-square w-full max-w-[300px] lg:max-w-[min(380px,46vh)]">
              <motion.div className="absolute inset-[16%] rounded-full border border-dashed border-cyan/35" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
              <div className="absolute inset-[36%] opacity-80"><AnimatedSymbol className="h-full w-full" delay={0.4} /></div>
              {phase1.loop.map((c, i) => (
                <div key={c} className={`absolute ${pos[i]}`}>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.18 }} className={`w-[124px] rounded-[12px] px-3 py-2.5 text-center text-[13px] font-semibold leading-tight lg:w-[140px] ${i === 0 ? 'bg-cyan text-ink' : 'glass'}`}>
                    {c}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
