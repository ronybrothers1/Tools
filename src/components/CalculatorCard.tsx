import { ArrowUpRight } from 'lucide-react';
import { CalculatorItem, colorMap } from '../data';

interface CalculatorCardProps {
  item: CalculatorItem;
}

export function CalculatorCard({ item }: CalculatorCardProps) {
  const Icon = item.icon;
  const colors = colorMap[item.colorTheme];

  if (item.isComingSoon) {
    return (
      <div className="flex flex-col items-start gap-[11px] p-[20px_17px_17px] bg-surf-1 border border-border-subtle rounded-2xl relative overflow-hidden opacity-40 cursor-default pointer-events-none">
        <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0 relative z-10 bg-white/5 text-text-muted">
          <Icon className="w-[19px] h-[19px]" strokeWidth={1.8} />
        </div>
        <span className="font-display text-[13px] font-semibold leading-[1.35] relative z-10 text-text-muted">
          Segera Hadir
        </span>
        <span className="inline-flex items-center gap-1 font-display text-[9px] font-bold tracking-[0.1em] uppercase text-text-muted bg-white/5 border border-white/10 rounded-full px-2 py-0.5 relative z-10">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-start gap-[11px] p-[20px_17px_17px] bg-surf-1 border rounded-2xl no-underline text-text-main relative overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        item.isFeatured 
          ? 'bg-gradient-to-br from-blue-400/10 via-sky-400/5 to-teal-400/10 border-blue-400/25 hover:border-blue-400/50 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5),0_4px_12px_rgba(96,165,250,0.15)]' 
          : `border-border-subtle hover:bg-surf-2 hover:-translate-y-[5px] hover:scale-[1.012] hover:border-border-hover ${colors.hoverShadow}`
      } focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-3 active:-translate-y-[2px] active:scale-[1.004]`}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-200 pointer-events-none rounded-[inherit] group-hover:opacity-100"></div>
      <div className="absolute left-0 top-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>

      <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-3 ${colors.bg} ${colors.text}`}>
        <Icon className="w-[19px] h-[19px]" strokeWidth={1.8} />
      </div>
      
      <span className={`font-display text-[13px] font-semibold leading-[1.35] relative z-10 ${item.isFeatured ? 'text-[#a5c8ff]' : 'text-text-main'}`}>
        {item.name}
      </span>

      {item.isFeatured && (
        <span className="inline-flex items-center gap-1 font-display text-[8.5px] font-bold tracking-[0.12em] uppercase text-blue-400 bg-blue-400/10 border border-blue-400/25 rounded-full px-2 py-0.5 relative z-10">
          <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></span>
          Baru
        </span>
      )}

      <ArrowUpRight className="absolute top-[14px] right-[14px] w-[14px] h-[14px] text-text-sub opacity-0 -translate-x-[5px] translate-y-[5px] transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2} />
    </a>
  );
}
