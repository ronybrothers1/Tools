import {
  LayoutGrid, GitCommit, Table, Mountain,
  Hammer, Layers, Grid, PaintRoller, AlignJustify, Paintbrush,
  Route, MonitorUp, GripHorizontal, Shovel, MountainSnow, Search, Box, Tent,
  Waves, Settings, Shield, Zap, Sun, ArrowRightLeft, Calculator,
  HeartPulse, Activity, Baby,
  Receipt, FileText, Type, Landmark, Users, PieChart,
  Sprout, Key,
  LucideIcon
} from 'lucide-react';

export type ColorTheme = 'amber' | 'sky' | 'emerald' | 'rose' | 'violet' | 'orange' | 'teal' | 'lime' | 'fuchsia' | 'cyan' | 'red' | 'indigo' | 'apbdes';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  colorTheme: ColorTheme;
}

export interface CalculatorItem {
  id: string;
  categoryId: string;
  name: string;
  url?: string;
  icon: LucideIcon;
  colorTheme: ColorTheme;
  isFeatured?: boolean;
  isComingSoon?: boolean;
  searchTerms: string;
}

export const categories: Category[] = [
  { id: 'konstruksi', name: 'Struktur & Beton', icon: LayoutGrid, colorTheme: 'amber' },
  { id: 'finishing', name: 'Finishing & Arsitektur', icon: Layers, colorTheme: 'sky' },
  { id: 'infrastruktur', name: 'Infrastruktur & Sipil', icon: Route, colorTheme: 'emerald' },
  { id: 'teknik', name: 'Teknik & Mekanikal', icon: Settings, colorTheme: 'violet' },
  { id: 'kesehatan', name: 'Kesehatan & Posyandu', icon: HeartPulse, colorTheme: 'rose' },
  { id: 'umum', name: 'Keuangan & Administrasi', icon: Receipt, colorTheme: 'teal' },
  { id: 'pertanian', name: 'Pertanian & Utilitas', icon: Sprout, colorTheme: 'lime' },
];

export const calculators: CalculatorItem[] = [
  // Struktur & Beton
  { id: 'betonisasi', categoryId: 'konstruksi', name: 'Betonisasi', url: 'https://www.rony.biz.id/beton', icon: LayoutGrid, colorTheme: 'amber', searchTerms: 'betonisasi beton' },
  { id: 'pembesian', categoryId: 'konstruksi', name: 'Pembesian', url: 'https://www.rony.biz.id/pembesian10-kg', icon: GitCommit, colorTheme: 'sky', searchTerms: 'pembesian besi tulangan' },
  { id: 'tabel-besi', categoryId: 'konstruksi', name: 'Tabel Besi', url: 'https://www.rony.biz.id/tabel-besi', icon: Table, colorTheme: 'orange', searchTerms: 'tabel besi berat baja' },
  { id: 'pondasi-batu', categoryId: 'konstruksi', name: 'Pondasi Batu', url: 'https://www.rony.biz.id/pondasi-batu', icon: Mountain, colorTheme: 'emerald', searchTerms: 'pondasi batu belah' },
  
  // Finishing & Arsitektur
  { id: 'bekisting', categoryId: 'finishing', name: 'Bekisting', url: 'https://www.rony.biz.id/bekisting', icon: Hammer, colorTheme: 'rose', searchTerms: 'bekisting cetakan beton' },
  { id: 'plesteran', categoryId: 'finishing', name: 'Plesteran', url: 'https://www.rony.biz.id/plesteran', icon: Layers, colorTheme: 'violet', searchTerms: 'plesteran dinding' },
  { id: 'keramik', categoryId: 'finishing', name: 'Keramik', url: 'https://www.rony.biz.id/keramik', icon: Grid, colorTheme: 'emerald', searchTerms: 'keramik lantai pemasangan' },
  { id: 'acian', categoryId: 'finishing', name: 'Acian', url: 'https://www.rony.biz.id/acian', icon: PaintRoller, colorTheme: 'teal', searchTerms: 'acian dinding halus' },
  { id: 'pasangan-bata', categoryId: 'finishing', name: 'Pasangan Bata', url: 'https://www.rony.biz.id/pasangan-bata', icon: AlignJustify, colorTheme: 'red', searchTerms: 'pasangan bata dinding' },
  { id: 'pengecatan', categoryId: 'finishing', name: 'Pengecatan', url: 'https://www.rony.biz.id/pengecatan', icon: Paintbrush, colorTheme: 'fuchsia', searchTerms: 'pengecatan tembok cat' },

  // Infrastruktur & Sipil
  { id: 'rab-jalan', categoryId: 'infrastruktur', name: 'RAB Jalan', url: 'https://www.rony.biz.id/rab-jalan', icon: Route, colorTheme: 'amber', searchTerms: 'rab jalan rabat beton' },
  { id: 'pek-plafon', categoryId: 'infrastruktur', name: 'Pek. Plafon', url: 'https://www.rony.biz.id/pek-plafon', icon: MonitorUp, colorTheme: 'sky', searchTerms: 'pekerjaan plafon langit-langit' },
  { id: 'pavingisasi', categoryId: 'infrastruktur', name: 'Pavingisasi', url: 'https://www.rony.biz.id/pavingisasi', icon: GripHorizontal, colorTheme: 'violet', searchTerms: 'pavingisasi paving block' },
  { id: 'pek-galian', categoryId: 'infrastruktur', name: 'Pek. Galian', url: 'https://www.rony.biz.id/pek-galian', icon: Shovel, colorTheme: 'teal', searchTerms: 'pekerjaan galian tanah' },
  { id: 'pengurugan', categoryId: 'infrastruktur', name: 'Pengurugan', url: 'https://www.rony.biz.id/pengurugan', icon: MountainSnow, colorTheme: 'emerald', searchTerms: 'pengurugan timbunan tanah' },
  { id: 'penghitung-tangga', categoryId: 'infrastruktur', name: 'Penghitung Tangga', url: 'https://www.rony.biz.id/penghitung-tangga', icon: Search, colorTheme: 'cyan', searchTerms: 'penghitung tangga anak tangga' },
  { id: 'balok-beton', categoryId: 'infrastruktur', name: 'Penghitung Balok', url: 'https://www.rony.biz.id/balok-beton', icon: Box, colorTheme: 'orange', searchTerms: 'penghitung balok beton struktur' },
  { id: 'atap-baja-ringan', categoryId: 'infrastruktur', name: 'Atap Baja Ringan', url: 'https://www.rony.biz.id/atap-baja-ringan', icon: Tent, colorTheme: 'indigo', searchTerms: 'atap baja ringan rangka kuda-kuda' },

  // Teknik & Mekanikal
  { id: 'saluran-drainase', categoryId: 'teknik', name: 'Saluran Drainase', url: 'https://www.rony.biz.id/dimensi-saluran', icon: Waves, colorTheme: 'sky', searchTerms: 'saluran drainase dimensi' },
  { id: 'mekanika-teknik', categoryId: 'teknik', name: 'Mekanika Teknik', url: 'https://www.rony.biz.id/mekanika-teknik', icon: Settings, colorTheme: 'violet', searchTerms: 'mekanika teknik struktur' },
  { id: 'sifat-baja', categoryId: 'teknik', name: 'Sifat Baja', url: 'https://www.rony.biz.id/sifat-baja', icon: Shield, colorTheme: 'amber', searchTerms: 'sifat baja material' },
  { id: 'listrik-elektronika', categoryId: 'teknik', name: 'Listrik & Elektronika', url: 'https://www.rony.biz.id/listrik-elektronika', icon: Zap, colorTheme: 'orange', searchTerms: 'listrik elektronika kelistrikan' },
  { id: 'pencahayaan-ventilasi', categoryId: 'teknik', name: 'Pencahayaan & Ventilasi', url: 'https://www.rony.biz.id/pencahayaan-ventilasi', icon: Sun, colorTheme: 'cyan', searchTerms: 'pencahayaan ventilasi ruangan' },
  { id: 'konversi-unit', categoryId: 'teknik', name: 'Konversi Unit', url: 'https://www.rony.biz.id/konversi-unit', icon: ArrowRightLeft, colorTheme: 'emerald', searchTerms: 'konversi unit satuan' },
  { id: 'matematika', categoryId: 'teknik', name: 'Matematika', url: 'https://www.rony.biz.id/matematika', icon: Calculator, colorTheme: 'indigo', searchTerms: 'matematika kalkulator dasar' },

  // Kesehatan & Posyandu
  { id: 'kesehatan', categoryId: 'kesehatan', name: 'Kesehatan', url: 'https://www.rony.biz.id/kesehatan', icon: HeartPulse, colorTheme: 'rose', searchTerms: 'kesehatan bmi kalori kehamilan' },
  { id: 'tekanan-darah', categoryId: 'kesehatan', name: 'Tekanan Darah', url: 'https://www.rony.biz.id/tekanan-darah', icon: Activity, colorTheme: 'red', searchTerms: 'tekanan darah blood pressure' },
  { id: 'posyandu', categoryId: 'kesehatan', name: 'Posyandu', url: 'https://www.rony.biz.id/posyandu', icon: Baby, colorTheme: 'fuchsia', searchTerms: 'posyandu balita tumbuh kembang' },

  // Keuangan & Administrasi
  { id: 'kalkulator-pajak', categoryId: 'umum', name: 'Kalkulator Pajak', url: 'https://www.rony.biz.id/kalkulator-pajak', icon: Receipt, colorTheme: 'red', searchTerms: 'kalkulator pajak pph' },
  { id: 'nota-generator', categoryId: 'umum', name: 'Nota Generator', url: 'https://www.rony.biz.id/nota-generator', icon: FileText, colorTheme: 'orange', searchTerms: 'nota generator invoice digital' },
  { id: 'terbilang', categoryId: 'umum', name: 'Terbilang', url: 'https://www.rony.biz.id/terbilang', icon: Type, colorTheme: 'teal', searchTerms: 'terbilang angka huruf' },
  { id: 'akuntansi-bumdes', categoryId: 'umum', name: 'Akuntansi Bumdes', url: 'https://www.rony.biz.id/akuntansi-bumdes', icon: Landmark, colorTheme: 'emerald', searchTerms: 'keuangan akuntansi bumdes' },
  { id: 'koperasi-desa', categoryId: 'umum', name: 'Koperasi Desa', url: 'https://www.rony.biz.id/koperasi-desa', icon: Users, colorTheme: 'sky', searchTerms: 'koperasi desa simpan pinjam' },
  { id: 'infografis-apbdes', categoryId: 'umum', name: 'Infografis APBDes', url: 'https://www.rony.biz.id/infografis-apbdes', icon: PieChart, colorTheme: 'apbdes', searchTerms: 'infografis apbdes anggaran desa keuangan', isFeatured: true },

  // Pertanian & Utilitas
  { id: 'pupuk', categoryId: 'pertanian', name: 'Pupuk', url: 'https://www.rony.biz.id/pupuk', icon: Sprout, colorTheme: 'lime', searchTerms: 'pupuk pertanian tanaman' },
  { id: 'password-generator', categoryId: 'pertanian', name: 'Password Generator', url: 'https://www.rony.biz.id/password-generator', icon: Key, colorTheme: 'amber', searchTerms: 'password generator keamanan' },
];

export const colorMap: Record<ColorTheme, { bg: string, text: string, border: string, hoverBorder: string, hoverShadow: string, hoverBg: string }> = {
  amber: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20', hoverBorder: 'hover:border-amber-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(251,191,36,0.15)]', hoverBg: 'hover:bg-surf-2' },
  sky: { bg: 'bg-sky-400/10', text: 'text-sky-400', border: 'border-sky-400/20', hoverBorder: 'hover:border-sky-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(56,189,248,0.15)]', hoverBg: 'hover:bg-surf-2' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20', hoverBorder: 'hover:border-emerald-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(52,211,153,0.15)]', hoverBg: 'hover:bg-surf-2' },
  rose: { bg: 'bg-rose-400/10', text: 'text-rose-400', border: 'border-rose-400/20', hoverBorder: 'hover:border-rose-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(251,113,133,0.15)]', hoverBg: 'hover:bg-surf-2' },
  violet: { bg: 'bg-violet-400/10', text: 'text-violet-400', border: 'border-violet-400/20', hoverBorder: 'hover:border-violet-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(167,139,250,0.15)]', hoverBg: 'hover:bg-surf-2' },
  orange: { bg: 'bg-orange-400/10', text: 'text-orange-400', border: 'border-orange-400/20', hoverBorder: 'hover:border-orange-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(251,146,60,0.15)]', hoverBg: 'hover:bg-surf-2' },
  teal: { bg: 'bg-teal-400/10', text: 'text-teal-400', border: 'border-teal-400/20', hoverBorder: 'hover:border-teal-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(45,212,191,0.15)]', hoverBg: 'hover:bg-surf-2' },
  lime: { bg: 'bg-lime-400/10', text: 'text-lime-400', border: 'border-lime-400/20', hoverBorder: 'hover:border-lime-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(163,230,53,0.15)]', hoverBg: 'hover:bg-surf-2' },
  fuchsia: { bg: 'bg-fuchsia-400/10', text: 'text-fuchsia-400', border: 'border-fuchsia-400/20', hoverBorder: 'hover:border-fuchsia-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(232,121,249,0.15)]', hoverBg: 'hover:bg-surf-2' },
  cyan: { bg: 'bg-cyan-400/10', text: 'text-cyan-400', border: 'border-cyan-400/20', hoverBorder: 'hover:border-cyan-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(34,211,238,0.15)]', hoverBg: 'hover:bg-surf-2' },
  red: { bg: 'bg-red-400/10', text: 'text-red-400', border: 'border-red-400/20', hoverBorder: 'hover:border-red-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(248,113,113,0.15)]', hoverBg: 'hover:bg-surf-2' },
  indigo: { bg: 'bg-indigo-400/10', text: 'text-indigo-400', border: 'border-indigo-400/20', hoverBorder: 'hover:border-indigo-400/40', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(129,140,248,0.15)]', hoverBg: 'hover:bg-surf-2' },
  apbdes: { bg: 'bg-blue-400/20', text: 'text-blue-400', border: 'border-blue-400/30', hoverBorder: 'hover:border-blue-400/50', hoverShadow: 'hover:shadow-[0_20px_48px_rgba(0,0,0,0.5),0_4px_12px_rgba(96,165,250,0.15)]', hoverBg: 'hover:bg-surf-2' },
};
