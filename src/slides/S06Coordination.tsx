import { motion } from 'framer-motion'
import { coordination } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S06Coordination() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="tex-grid-dark pointer-events-none absolute inset-0" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={5}>{coordination.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]"><Rich text={coordination.title} /></motion.h2>

        <div className="relative mt-8 lg:mt-auto lg:pt-6">
          <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-white/10 lg:block" />
          <motion.div className="absolute left-0 top-[25px] hidden h-px w-full origin-left bg-gradient-to-r from-cyan via-cyan to-cyan/20 lg:block" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.6, ease, delay: 0.4 }} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coordination.flow.map((f, i) => (
              <motion.li key={f.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.14 }} className="flex gap-3 lg:block">
                <span className={`relative grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[14px] text-[15px] font-semibold ${i === 0 ? 'bg-cyan text-ink' : 'glass-cyan text-cyan'}`}>0{i + 1}</span>
                <div>
                  <p className="text-[16px] font-semibold lg:mt-4">{f.name}</p>
                  <p className="mt-0.5 max-w-[26ch] text-[13.5px] leading-snug text-white/70">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="cmp-mt mt-7 grid gap-2.5 sm:grid-cols-3">
          {coordination.gains.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 1.1 + i * 0.1 }} className="frost cmp-p p-4">
              <p className="text-[15px] font-semibold">{g.title}</p>
              <p className="mt-1 text-[13.5px] leading-snug text-white/70">{g.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
