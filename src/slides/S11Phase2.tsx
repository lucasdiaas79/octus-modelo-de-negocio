import { motion } from 'framer-motion'
import { Plus, Scale } from 'lucide-react'
import { phase2 } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S11Phase2() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={10} tone="light">{phase2.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]"><Rich text={phase2.title} accent="text-cyan-deep" /></motion.h2>
        <motion.p variants={rise} className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink/70 lg:text-[16px]">{phase2.lead}</motion.p>

        <div className="mt-8 grid gap-5 lg:mt-auto lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 lg:pt-6">
          <div>
            <p className="label text-ink/55">Modelo híbrido</p>
            <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              {phase2.model.map((m, i) => (
                <div key={m.name} className="contents">
                  {i > 0 && <Plus className="mx-auto h-5 w-5 shrink-0 text-cyan-deep" />}
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.15 }} className={`cmp-p flex-1 rounded-[16px] p-5 ${i ? 'bg-cyan-deep text-white' : 'bg-ink text-white'}`}>
                    <p className="text-[22px] font-semibold">{m.name}</p>
                    <p className="mt-1 text-[14px] leading-snug text-white/80">{m.text}</p>
                  </motion.div>
                </div>
              ))}
            </div>
            <motion.p variants={rise} className="mt-4 flex gap-2.5 text-[13.5px] leading-relaxed text-ink/65">
              <Scale className="mt-0.5 h-4 w-4 shrink-0 text-cyan-deep" />{phase2.note}
            </motion.p>
          </div>
          <div>
            <p className="label text-ink/55">{phase2.agreeLabel}</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {phase2.agree.map((a, i) => (
                <motion.div key={a.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.6 + i * 0.1 }} className="glass-light cmp-p rounded-[14px] p-4">
                  <span className="text-[12px] font-semibold text-cyan-deep">0{i + 1}</span>
                  <p className="mt-1 text-[16px] font-semibold">{a.name}</p>
                  <p className="mt-0.5 text-[13px] text-ink/65">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
