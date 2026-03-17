import { Search, X } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-14 group"
    >
      <Search className="absolute left-[18px] top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-text-muted group-focus-within:text-sky-400 transition-colors pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surf-2 border-[1.5px] border-border-subtle rounded-2xl text-text-main font-sans text-[15px] py-[15px] pr-[20px] pl-[48px] outline-none transition-all focus:border-sky-400/50 focus:bg-surf-3 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08),0_1px_3px_rgba(0,0,0,0.3)] placeholder:text-text-muted"
        placeholder="Cari kalkulator..."
        autoComplete="off"
        spellCheck="false"
        aria-label="Cari kalkulator"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-[14px] top-1/2 -translate-y-1/2 bg-surf-3 border border-border-subtle rounded-lg text-text-sub text-[11px] px-2.5 py-1 cursor-pointer font-sans transition-colors hover:bg-border-hover hover:text-text-main hover:border-border-hover flex items-center gap-1"
          aria-label="Hapus pencarian"
        >
          <X className="w-3 h-3" /> Hapus
        </button>
      )}
    </motion.div>
  );
}
