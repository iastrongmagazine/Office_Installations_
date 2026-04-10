import { useLanguage } from '../context/LanguageContext';
import { Drill } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#f3f4f5] rounded-t-[2rem] mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="bg-secondary p-10 rounded-2xl inline-flex flex-col items-center justify-center shadow-xl">
            <span className="text-8xl font-black tracking-[-0.08em] text-primary-container font-headline leading-none">OIM</span>
            <span className="text-[16px] font-bold tracking-[0.45em] text-primary-container uppercase mt-6">OFFICE INSTALLATIONS</span>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs font-light text-[#5a413f] max-w-xs mt-4">
            {t('Servicios confiables de instalación de mobiliario de oficina en Georgia y más allá desde 2018.', 'Reliable office furniture installation services across Georgia and beyond since 2018.')}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-light text-[#5a413f]">Atlanta, Georgia</span>
            <a className="font-['Plus_Jakarta_Sans'] text-xs font-light text-[#5a413f] hover:text-primary-container transition-colors" href="tel:+14705950121">+1 (470) 595-0121</a>
            <a className="font-['Plus_Jakarta_Sans'] text-xs font-light text-[#5a413f] hover:text-primary-container transition-colors" href="mailto:oiminstallllc@gmail.com">oiminstallllc@gmail.com</a>
            <a className="font-['Plus_Jakarta_Sans'] text-xs font-light text-[#5a413f] hover:text-primary-container transition-colors" href="https://instagram.com/oimayen" target="_blank" rel="noopener noreferrer">@oimayen</a>
          </div>
          <div className="font-['Plus_Jakarta_Sans'] text-[10px] font-light text-[#5a413f] mt-4">
            © 2024 OI Office Installations. {t('Todos los derechos reservados.', 'All rights reserved.')}
          </div>
        </div>
      </div>
    </footer>
  );
}
