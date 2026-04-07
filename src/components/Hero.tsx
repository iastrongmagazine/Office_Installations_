import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-6 lg:px-12 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant font-headline">
              {t('Ingeniería de Gestión de Espacios Corporativos', 'Corporate Space Management Engineering')}
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
            {t('Instalación Profesional de ', 'Professional ')}<span className="text-primary-container/50">{t('Mobiliario de Oficina', 'Office Furniture')}</span>{t('', ' Installation')}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            {t('Desde 2018, brindamos servicios confiables y de alta calidad en ensamblaje, reconfiguración y reubicación de mobiliario para espacios corporativos y residenciales.', 'Since 2018, we have provided reliable, high-quality furniture assembly, reconfiguration, and relocation services for corporate and residential spaces.')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              href="#contacto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary-container text-on-primary font-bold px-6 py-4 rounded-xl shadow-lg shadow-primary-container/20 flex items-center gap-2 transition-all"
            >
              {t('Obtén una Cotización Gratis', 'Get a Free Quote')}
            </motion.a>
            <motion.a 
              href="https://wa.me/14705950121"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2, backgroundColor: 'var(--color-surface-container-low)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-surface-container-lowest text-on-surface border border-outline-variant/30 font-bold px-6 py-4 rounded-xl flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-[#25D366]">chat</span>
              {t('Chat en WhatsApp', 'Chat on WhatsApp')}
            </motion.a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-outline-variant/10">
            <div className="space-y-1">
              <span className="block text-xl font-bold font-headline text-on-surface">{t('8+ Años', '8+ Years')}</span>
              <span className="block text-xs text-on-surface-variant font-medium">{t('de Experiencia', 'Experience')}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl font-bold font-headline text-on-surface">{t('Bilingüe', 'Bilingual')}</span>
              <span className="block text-xs text-on-surface-variant font-medium">{t('Inglés y Español', 'English & Español')}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl font-bold font-headline text-on-surface">{t('Licencia', 'Licensed')}</span>
              <span className="block text-xs text-on-surface-variant font-medium">{t('y Seguro', '& Insured')}</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl font-bold font-headline text-on-surface">{t('Atlanta', 'Atlanta')}</span>
              <span className="block text-xs text-on-surface-variant font-medium">{t('Servicio Metro', 'Metro Service')}</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl shadow-black/10">
            <img className="w-full h-full object-cover" alt="Modern minimalist corporate office interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZX7W3v0rYym7o0_HMi1pFXDrXpp-3Y0bBhZBNvczadJ5N_kA1HOCzaDT8L6PwXO_6QCeNJfrRQ-Iny83OSw3KHcDCa4DsgNm4TyA2NZRkFgeMptqEjRg19ReAlUY3icIumSLvxEm7CFI9YInXu_bwC4FopQG5GuZkkdQFp2vKrDvAe2meoNMDLFRkowQkgQHwtLX7Q4KCJ28-25Swo2eOubQPlSws7ZK0UUQunoirt1IDrzIkT-lZ14pfTZN67P-ioTZ9BswjIyN"/>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <div className="flex gap-1 text-primary-container mb-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            </div>
            <p className="text-[10px] italic text-on-surface-variant">{t('"Equipo muy profesional, rápido y confiable. ¡Altamente recomendado!"', '"Very professional team, fast and reliable. Highly recommend!"')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
