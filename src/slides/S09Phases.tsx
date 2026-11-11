import { motion } from 'framer-motion'
import { phases } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

export default function S09Phases() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="tex-grid-dark pointer-events-none absolute inset-0" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={8}>{phases.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5"><Rich text={phases.title} /></motion.h2>
        <motion.p variants={rise} className="lead mt-4 max-w-[60ch]">{phases.lead}</motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.4 }} className="mt-8 overflow-hidden rounded-[18px] border border-white/10 lg:mt-auto">
          <div className="hidden grid-cols-[150px_1fr_1fr] lg:grid">
            <span className="bg-black/30" />
            <p className="bg-white/[0.06] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/80">{phases.cols[0]}</p>
            <p className="bg-cyan px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">{phases.cols[1]}</p>
          </div>
          {phases.rows.map((r, i) => (
            <motion.div key={r.aspect} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }} className="grid border-t border-white/10 lg:grid-cols-[150px_1fr_1fr]">
              <p className="bg-black/30 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-cyan">{r.aspect}</p>
              <p className="px-5 py-3 text-[14px] leading-snug text-white/80 lg:py-3.5"><span className="mr-2 text-[11px] font-semibold text-white/45 lg:hidden">FASE 1</span>{r.a}</p>
              <p className="bg-cyan/[0.07] px-5 py-3 text-[14px] leading-snug text-white lg:py-3.5"><span className="mr-2 text-[11px] font-semibold text-cyan lg:hidden">FASE 2</span>{r.b}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
