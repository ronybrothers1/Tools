import { motion } from 'motion/react';
import { Category, CalculatorItem, colorMap } from '../data';
import { CalculatorCard } from './CalculatorCard';
import { Sparkles } from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  calculators: CalculatorItem[];
  index: number;
  isSearching: boolean;
}

export function CategorySection({ category, calculators, index, isSearching }: CategorySectionProps) {
  if (calculators.length === 0) return null;

  const Icon = category.icon;
  const colors = colorMap[category.colorTheme];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="sticky top-0 z-20 flex items-center gap-3 mb-5 py-3 bg-bg/85 backdrop-blur-md border-b border-border-subtle/50 -mx-4 px-4 sm:-mx-2 sm:px-2 md:-mx-4 md:px-4 rounded-b-lg">
        <div className={`w-9 h-9 rounded-[11px] flex items-center justify-center shrink-0 ${colors.bg} ${colors.text}`}>
          <Icon className="w-4 h-4" strokeWidth={2} />
        </div>
        <h2 className="font-display text-[11.5px] font-bold tracking-[0.12em] uppercase text-text-sub whitespace-nowrap">
          {category.name}
        </h2>
        <div className="flex-1 h-[1px] bg-border-subtle hidden sm:block"></div>
        <span className="text-[10.5px] font-semibold text-text-muted bg-surf-2 border border-border-subtle rounded-full px-2.5 py-1 font-display whitespace-nowrap ml-auto sm:ml-0">
          {calculators.length} kalkulator
        </span>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))] gap-3 max-sm:grid-cols-[repeat(auto-fill,minmax(144px,1fr))] max-[480px]:grid-cols-3 max-[360px]:grid-cols-2 max-[480px]:gap-2.5">
        {calculators.map(calc => (
          <CalculatorCard key={calc.id} item={calc} />
        ))}
        
        {/* Coming Soon Optimization: Render only 1 card per category */}
        {!isSearching && (
          <div className="flex flex-col items-start gap-[11px] p-[20px_17px_17px] bg-surf-1 border border-border-subtle rounded-2xl relative overflow-hidden opacity-40 cursor-default pointer-events-none max-[480px]:p-[13px_11px] max-[480px]:rounded-[13px]">
            <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0 relative z-10 bg-white/5 text-text-muted max-[480px]:w-[34px] max-[480px]:h-[34px] max-[480px]:rounded-[9px]">
              <Sparkles className="w-[19px] h-[19px] max-[480px]:w-[15px] max-[480px]:h-[15px]" strokeWidth={1.8} />
            </div>
            <span className="font-display text-[13px] font-semibold leading-[1.35] relative z-10 text-text-muted max-[480px]:text-[11.5px]">
              Segera Hadir
            </span>
            <span className="inline-flex items-center gap-1 font-display text-[9px] font-bold tracking-[0.1em] uppercase text-text-muted bg-white/5 border border-white/10 rounded-full px-2 py-0.5 relative z-10 max-[480px]:text-[8px] max-[480px]:px-1.5">
              Fitur Baru
            </span>
          </div>
        )}
      </div>
    </motion.section>
  );
}
