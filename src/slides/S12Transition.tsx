import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { transition } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const A = [100, 85, 65, 45]
const W = 560
const H = 220

export default function S12Transition() {
  const xs = (i: number) => 20 + i * ((W - 40) / 3)
  const yA = (v: number) => H - 20 - (v / 100) * (H - 40)
  const top = A.map((v, i) => `${i ? 'L' : 'M'}${xs(i)},${yA(v)}`).join(' ')
  const areaA = `${top} L${xs(3)},${H - 20} L${xs(0)},${H - 20} Z`
  const areaB = `M${xs(0)},20 L${xs(3)},20 L${xs(3)},${yA(A[3])} ${A.slice().reverse().map((v, k) => `L${xs(3 - k)},${yA(v)}`).join(' ')} Z`
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="tex-grid-dark pointer-events-none absolute inset-0" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}><Label n={11}>{transition.label}</Label></motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]"><Rich text={transition.title} /></motion.h2>
        <motion.p variants={rise} className="lead mt-4 max-w-[64ch]">{transition.lead}</motion.p>

        <div className="mt-8 grid gap-5 lg:my-auto lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8 lg:pt-6">
          <div>
            <p className="label text-cyan">{transition.reqLabel}</p>
            <div className="mt-3 grid gap-2">
              {transition.req.map((r, i) => (
                <motion.div key={r} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.1 }} className="glass cmp-p flex items-center gap-3 !rounded-[12px] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" strokeWidth={2} />
                  <p className="text-[14.5px]">{r}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.5 }} className="overflow-hidden rounded-[18px] border border-white/10 bg-black/60">
            <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-white/10 px-4 py-2.5 text-[12px]">
              <span className="flex items-center gap-1.5 text-white/75"><span className="h-2.5 w-2.5 rounded-sm bg-white/25" />{transition.chart.a}</span>
              <span className="flex items-center gap-1.5 text-cyan"><span className="h-2.5 w-2.5 rounded-sm bg-cyan" />{transition.chart.b}</span>
            </div>
            <svg viewBox={`0 0 ${W} ${H + 24}`} className="cmp-chart block w-full">
              <motion.path d={areaA} fill="rgba(255,255,255,0.10)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
              <motion.path d={areaB} fill="rgba(92,227,229,0.75)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} />
              <motion.path d={top} fill="none" stroke="#5CE3E5" strokeWidth={2} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1.4, ease }} />
              {transition.chart.x.map((l, i) => (
                <text key={l} x={xs(i)} y={H + 14} textAnchor={i === 0 ? 'start' : i === 3 ? 'end' : 'middle'} fontSize="11" fill="rgba(255,255,255,0.55)">{l}</text>
              ))}
            </svg>
          </motion.div>
        </div>
        <motion.p variants={rise} className="cmp-mt mt-4 text-[12px] text-white/50">{transition.note}</motion.p>
      </motion.div>
    </div>
  )
}
