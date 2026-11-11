import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { clients } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S08Clients() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_85%_30%,rgba(92,227,229,0.10),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={7}>{clients.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5"><Rich text={clients.title} /></motion.h2>
        <motion.p variants={rise} className="lead mt-5 max-w-[60ch]">{clients.lead}</motion.p>
        <div className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:pt-6">
          {clients.criteria.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.1 }} className="glass cmp-p !rounded-[16px] p-5">
              <span className="text-[12px] font-semibold text-cyan">0{i + 1}</span>
              <p className="mt-2 text-[16.5px] font-semibold">{c.name}</p>
              <p className="mt-1 text-[13.5px] leading-snug text-white/70">{c.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={rise} className="frost cmp-p cmp-mt mt-4 flex items-center gap-3 p-4 lg:p-5">
          <Filter className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.8} />
          <p className="text-[14.5px] text-white/85">{clients.phase2}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
