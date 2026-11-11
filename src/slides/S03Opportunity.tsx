import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { opportunity } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { TentacleLines } from '../components/Textures'
import { ease, rise, stagger } from '../components/motion'

export default function S03Opportunity() {
  const cols = [opportunity.without, opportunity.with]
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <TentacleLines opacity={0.06} />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={2}>{opportunity.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]"><Rich text={opportunity.title} /></motion.h2>
        <motion.p variants={rise} className="lead mt-5 max-w-[64ch]">{opportunity.lead}</motion.p>
        <div className="mt-8 grid gap-3 lg:mt-auto lg:grid-cols-2 lg:pt-6">
          {cols.map((c, ci) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.4 + ci * 0.15 }} className={`cmp-p rounded-[18px] p-5 lg:p-6 ${ci ? 'glass-cyan' : 'glass'}`}>
              <p className={`label ${ci ? 'text-cyan' : 'text-white/50'}`}>{c.title}</p>
              <ul className="mt-4 grid gap-2.5">
                {c.items.map((it) => (
                  <li key={it} className={`flex gap-3 text-[15px] ${ci ? 'text-white' : 'text-white/60'}`}>
                    {ci ? <Check className="mt-[3px] h-4 w-4 shrink-0 text-cyan" strokeWidth={2.2} /> : <X className="mt-[3px] h-4 w-4 shrink-0 text-white/35" strokeWidth={2} />}
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
