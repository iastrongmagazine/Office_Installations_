import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Drill } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-black/5">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Drill className="w-7 h-7 text-[#191c1d]" />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-black tracking-tight text-[#191c1d] font-headline leading-none uppercase">Office</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#191c1d] uppercase mt-0.5">Installations</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 font-headline font-medium text-sm tracking-tight">
          <a className="text-[#FF5F5E] font-semibold border-b-2 border-[#FF5F5E]/50 pb-1" href="#servicios">{t('Servicios', 'Services')}</a>
          <a className="text-[#5a413f] hover:text-[#FF5F5E] transition-colors" href="#proyectos">{t('Proyectos', 'Projects')}</a>
          <a className="text-[#5a413f] hover:text-[#FF5F5E] transition-colors" href="#nosotros">{t('Nosotros', 'About Us')}</a>
          <a className="text-[#5a413f] hover:text-[#FF5F5E] transition-colors" href="#contacto">{t('Contacto', 'Contact')}</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-[#5a413f] font-headline font-bold text-xs tracking-tight cursor-pointer hover:text-primary-container transition-all duration-300 bg-surface-container-highest px-3 py-1.5 rounded-full"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <motion.a 
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary text-xs font-semibold px-5 py-2.5 rounded-xl hover:opacity-80 transition-all duration-300"
          >
            {t('Iniciar Proyecto', 'Start Project')}
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
