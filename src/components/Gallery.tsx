import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface" id="proyectos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">{t('Galería de Proyectos', 'Project Gallery')}</h2>
          <div className="flex justify-center gap-4 font-headline text-sm font-semibold">
            <button className="px-6 py-2 bg-primary-container text-on-primary rounded-full">{t('Corporativo', 'Corporate')}</button>
            <button className="px-6 py-2 text-on-surface-variant hover:text-on-surface transition-colors">{t('Ejecutivo', 'Executive')}</button>
            <button className="px-6 py-2 text-on-surface-variant hover:text-on-surface transition-colors">{t('Antes y Después', 'Before & After')}</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Tech Hub Installation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn8txIk-EWgaQEP0-hVl1M7Gtw05-RnUlnfbu3KkAu6BOd1EJ5-KXKKhBWBs6761kgyLOflUZL6AVsHDGErKu_lhGDLLRI0jmhp9kgH_7mWLEzOop7Sk2drKH7GlGZoKj1LPJyY5sI8ItwU5320qLp2P0PNGlaLVn4nt7pZ2j2eAF1ifF3EfK57j2AOXuijNI-2OESoiEwAyAUU2HYewzlRzINh1Ua44NxHsi3XihGSwAMmHsd452quQ6dfyNtt7b3XK-VfclqW1bE"/>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-bold font-headline text-lg">{t('Instalación de Centro Tecnológico', 'Tech Hub Installation')}</h3>
            <p className="text-xs text-on-surface-variant">Atlanta, GA</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Executive Boardroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpSr9QHEf9M-AbckOC7jo9V2YEHle0hPRNkEbZedEmc0tB-sXF-qM2RDMaM3Y6lLLiMYJjhoyPf0wyEE3p9OlGfNwJldeNmNi5WfdvinVLj9VTcFEV-uULN53U0FdgJVNj4X_nTWShzpaUF5iAEiP9RAJIoRAYrqbla7RmD2ojLO7GcwBUaYZnUk8F8uqsVuwQ4LQnU7Ube0soWls-NUwiy5Cgnq8dJz2o16cH66R6hfR_kxep58pHDRW3bdoTmvP5iLbcducJ_eO0"/>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-bold font-headline text-lg">{t('Sala de Juntas Ejecutiva', 'Executive Boardroom')}</h3>
            <p className="text-xs text-on-surface-variant">{t('Distrito de Buckhead', 'Buckhead District')}</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Floor Reconfiguration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfn50aCctOitf0-BqZPimdingEUnVG-K6lt-4FJxJ8hh5R3MTUQ0kkY6smRboKmm2IZyMsRXACSv-n0M-b9qEoBo_RxoNTJydbyajI6JTDPJMY22iTUH8iZCnIXEA4n5i_lHiBHT196nxlP3SuqeFDxspXN7i8QsLu62nrGmz2GTfq42-r2J0m2UGSI_MjAQbad2cODTiZTAU_hFFGhs_jApBGyEk2eP1o1ISmghtf_5Fj4MadgZ_N1R4WGXFOIrKPVsKsXMl2WAcr"/>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-bold font-headline text-lg">{t('Reconfiguración de Piso', 'Floor Reconfiguration')}</h3>
            <p className="text-xs text-on-surface-variant">{t('Parque Empresarial Alpharetta', 'Alpharetta Business Park')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
