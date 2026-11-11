import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { value } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S04Value() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={3} tone="light">{value.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5 max-w-[20ch]"><Rich text={value.title} accent="text-cyan-deep" /></motion.h2>

        <div className="mt-8 grid items-stretch gap-3 lg:mt-auto lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] lg:pt-6">
          <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease, delay: 0.35 }} className="glass-light cmp-p rounded-[18px] p-5">
            <p className="label text-ink/55">{value.inputsLabel}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {value.inputs.map((x) => <span key={x} className="rounded-full bg-ink/[0.06] px-3 py-1.5 text-[13.5px] text-ink/85">{x}</span>)}
            </div>
          </motion.div>
          <ArrowRight className="mx-auto hidden h-5 w-5 self-center text-cyan-deep lg:block" />
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.55 }} className="cmp-p rounded-[18px] bg-ink p-5 text-white">
            <p className="label text-cyan">{value.coreLabel}</p>
            <ul className="mt-3 grid gap-2">
              {value.core.map((x, i) => (
                <li key={x} className="flex gap-3 text-[15px]"><span className="text-[12px] font-semibold text-cyan">0{i + 1}</span>{x}</li>
              ))}
            </ul>
          </motion.div>
          <ArrowRight className="mx-auto hidden h-5 w-5 self-center text-cyan-deep lg:block" />
          <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease, delay: 0.75 }} className="cmp-p rounded-[18px] bg-cyan-deep p-5 text-white">
            <p className="label text-white/75">{value.outputsLabel}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {value.outputs.map((x) => <span key={x} className="rounded-[10px] bg-white/15 px-3 py-2.5 text-[14px] font-semibold">{x}</span>)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
