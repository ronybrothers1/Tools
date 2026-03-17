import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategorySection } from './components/CategorySection';
import { EmptyState } from './components/EmptyState';
import { categories, calculators } from './data';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories.map(cat => ({
        category: cat,
        items: calculators.filter(calc => calc.categoryId === cat.id)
      }));
    }

    const query = searchQuery.toLowerCase().trim();
    
    return categories.map(cat => {
      const items = calculators.filter(calc => 
        calc.categoryId === cat.id && 
        (calc.name.toLowerCase().includes(query) || 
         calc.searchTerms.toLowerCase().includes(query) ||
         cat.name.toLowerCase().includes(query))
      );
      return { category: cat, items };
    }).filter(group => group.items.length > 0);
  }, [searchQuery]);

  const hasResults = filteredData.length > 0;

  return (
    <>
      {/* Background Elements */}
      <div className="bg-mesh" aria-hidden="true"></div>
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-noise" aria-hidden="true"></div>

      <main className="relative z-10 max-w-[1140px] mx-auto px-6 pt-[60px] pb-[72px] max-md:px-4 max-md:pt-10 max-md:pb-14 max-sm:px-3 max-sm:pt-7 max-sm:pb-12">
        <Header />
        
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {!hasResults ? (
          <EmptyState onClear={() => setSearchQuery('')} />
        ) : (
          <div className="space-y-14">
            {filteredData.map(({ category, items }, index) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                calculators={items} 
                index={index} 
                isSearching={searchQuery.trim().length > 0}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-[72px] pt-7 border-t border-border-subtle flex justify-between items-center flex-wrap gap-3.5 text-text-muted text-xs max-md:flex-col max-md:items-start">
          <div className="flex flex-col gap-1">
            <span>Dikembangkan oleh <strong className="text-text-sub font-medium">Imam Sahroni Darmawan, ST</strong></span>
            <span><a href="https://www.rony.biz.id" target="_blank" rel="noopener noreferrer" className="text-text-muted no-underline transition-colors hover:text-sky-400">www.rony.biz.id</a></span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <span className="bg-surf-2 border border-border-subtle rounded-lg px-2.5 py-1 text-[10px] font-display font-semibold tracking-[0.08em] uppercase text-text-muted">v2.2</span>
            <span className="bg-sky-400/5 border border-sky-400/20 rounded-lg px-2.5 py-1 text-[10px] font-display font-semibold tracking-[0.08em] uppercase text-sky-400">{calculators.length} Kalkulator</span>
            <span className="bg-emerald-400/5 border border-emerald-400/20 rounded-lg px-2.5 py-1 text-[10px] font-display font-semibold tracking-[0.08em] uppercase text-emerald-400">+ Infografis APBDes</span>
            <span className="bg-surf-2 border border-border-subtle rounded-lg px-2.5 py-1 text-[10px] font-display font-semibold tracking-[0.08em] uppercase text-text-muted">Professional Grade</span>
          </div>
        </footer>
      </main>
    </>
  );
}
