import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { delivery } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { ease, rise, stagger } from '../components/motion'

export default function S05Delivery() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_65%,rgba(92,227,229,0.12),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={4}>{delivery.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5"><Rich text={delivery.title} /></motion.h2>
        <div className="mt-8 grid gap-3 lg:my-auto lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center lg:pt-6">
          {delivery.fronts.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: f.center ? 0.35 : 0.6 + i * 0.1 }}
              className={`cmp-p relative rounded-[20px] p-5 lg:p-6 ${f.center ? 'solid-deep lg:py-8' : 'glass'}`}
            >
              {f.center && <div className="absolute right-5 top-5 h-12 w-12 opacity-80"><AnimatedSymbol className="h-full w-full" delay={0.6} /></div>}
              <p className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${f.center ? 'text-cyan' : 'text-white/50'}`}>{f.tag}</p>
              <p className="mt-1 text-[clamp(20px,1.8vw,26px)] font-semibold tracking-[-0.01em]">{f.name}</p>
              <ul className="mt-4 grid gap-2">
                {f.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[14px] text-white/85"><Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={2.2} />{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.p variants={rise} className="cmp-mt mt-6 max-w-[80ch] text-[14px] leading-relaxed text-white/65">{delivery.note}</motion.p>
      </motion.div>
    </div>
  )
}
