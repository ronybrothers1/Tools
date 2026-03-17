import { motion } from 'motion/react';
import { LayoutGrid, Layers, RefreshCw } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.16em] uppercase text-sky-400 bg-sky-400/10 border border-sky-400/20 rounded-full px-4 py-1.5 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] animate-pulse"></span>
        Professional Grade · 2025
      </div>
      <h1 className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-4">
        Kalkulator<br />
        <em className="not-italic text-gradient">Pintar</em>
      </h1>
      <p className="text-text-sub text-[15px] font-normal max-w-[560px] leading-[1.75]">
        Kumpulan kalkulator profesional untuk konstruksi, teknik, kesehatan, dan kehidupan sehari-hari — cepat, akurat, dan mudah digunakan.
      </p>
      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2.5 mt-7"
      >
        <span className="inline-flex items-center gap-2 font-display text-[11.5px] font-semibold tracking-[0.06em] text-sky-400 bg-sky-400/5 border border-sky-400/20 rounded-[10px] px-3.5 py-2 transition-colors">
          <LayoutGrid className="w-[13px] h-[13px]" />
          54 Kalkulator
        </span>
        <span className="inline-flex items-center gap-2 font-display text-[11.5px] font-semibold tracking-[0.06em] text-text-sub bg-surf-2 border border-border-subtle rounded-[10px] px-3.5 py-2 transition-colors">
          <Layers className="w-[13px] h-[13px]" />
          7 Kategori
        </span>
        <span className="inline-flex items-center gap-2 font-display text-[11.5px] font-semibold tracking-[0.06em] text-text-sub bg-surf-2 border border-border-subtle rounded-[10px] px-3.5 py-2 transition-colors">
          <RefreshCw className="w-[13px] h-[13px]" />
          Selalu Diperbarui
        </span>
      </motion.div>
    </motion.header>
  );
}
