import { SearchX } from 'lucide-react';
import { motion } from 'motion/react';

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-4"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surf-2 border border-border-subtle mb-4">
        <SearchX className="w-8 h-8 text-text-muted" />
      </div>
      <h3 className="font-display text-lg font-semibold text-text-main mb-2">Kalkulator tidak ditemukan</h3>
      <p className="text-text-sub text-sm mb-6 max-w-sm mx-auto">
        Kami tidak dapat menemukan kalkulator yang cocok dengan kata kunci pencarian Anda. Coba gunakan kata kunci lain.
      </p>
      <button
        onClick={onClear}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-surf-2 hover:bg-surf-3 border border-border-subtle rounded-xl text-sm font-medium text-text-main transition-colors"
      >
        Hapus Pencarian
      </button>
    </motion.div>
  );
}
