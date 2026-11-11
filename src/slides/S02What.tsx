import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Cpu, Megaphone, Settings2 } from 'lucide-react'
import { what } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { ease, rise, stagger } from '../components/motion'

const icons = [BarChart3, Settings2, Cpu, Megaphone]

export default function S02What() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="tex-grid-dark pointer-events-none absolute inset-0" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={1}>{what.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5 max-w-[20ch]"><Rich text={what.title} /></motion.h2>
        <motion.p variants={rise} className="lead mt-5 max-w-[62ch]">{what.lead}</motion.p>

        <div className="mt-8 grid items-stretch gap-3 lg:mt-auto lg:grid-cols-[1fr_auto_1fr] lg:pt-6">
          <div className="grid grid-cols-2 gap-2.5">
            {what.pillars.slice(0, 2).concat(what.pillars.slice(2)).map((p, i) => {
              const Icon = icons[i]
              return (
                <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.1 }} className="glass cmp-p !rounded-[14px] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-cyan/15 text-cyan">
                    <span className="draw" style={{ ['--d' as string]: `${0.5 + i * 0.12}s` }}><Icon className="h-4 w-4" strokeWidth={1.8} /></span>
                  </span>
                  <p className="mt-3 text-[15.5px] font-semibold">{p.name}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-white/70">{p.text}</p>
                </motion.div>
              )
            })}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease, delay: 0.6 }} className="solid-deep mx-auto flex w-full max-w-[260px] flex-col items-center justify-center rounded-[18px] p-5 text-center lg:w-[220px]">
            <AnimatedSymbol className="h-20 w-20" delay={0.8} />
            <p className="mt-3 text-[15px] font-semibold">{what.center}</p>
          </motion.div>
          <motion.div variants={rise} className="frost cmp-p flex flex-col justify-center gap-3 p-5">
            <p className="label text-cyan">Evolução do modelo</p>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/[0.08] px-3.5 py-2 text-[14px]">{what.evolution.from}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-cyan" />
            </div>
            <span className="self-start rounded-full bg-cyan px-3.5 py-2 text-[14px] font-semibold text-ink">{what.evolution.to}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
