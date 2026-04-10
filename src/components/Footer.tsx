import { useLanguage } from '../context/LanguageContext';
import { Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary text-white rounded-t-[3rem] mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start">
              <span className="text-6xl font-black tracking-[-0.08em] text-primary-container font-headline leading-none">OIM</span>
              <span className="text-[10px] font-bold tracking-[0.35em] text-primary-container uppercase mt-2">OFFICE INSTALLATIONS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t('Transformando espacios de trabajo con precisión y excelencia desde 2018. Expertos en instalación y reconfiguración corporativa.', 'Transforming workspaces with precision and excellence since 2018. Experts in corporate installation and reconfiguration.')}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/oimayen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container hover:text-secondary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/14705950121" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-container hover:text-secondary transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs">{t('Navegación', 'Navigation')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#servicios" className="hover:text-primary-container transition-colors">{t('Servicios', 'Services')}</a></li>
              <li><a href="#proyectos" className="hover:text-primary-container transition-colors">{t('Proyectos', 'Projects')}</a></li>
              <li><a href="#nosotros" className="hover:text-primary-container transition-colors">{t('Nosotros', 'About Us')}</a></li>
              <li><a href="#contacto" className="hover:text-primary-container transition-colors">{t('Contacto', 'Contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs">{t('Servicios', 'Services')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>{t('Instalación de Mobiliario', 'Furniture Installation')}</li>
              <li>{t('Reconfiguración de Oficinas', 'Office Reconfiguration')}</li>
              <li>{t('Desmontaje y Mudanza', 'Disassembly & Moving')}</li>
              <li>{t('Proyectos Comerciales', 'Commercial Projects')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs">{t('Contacto', 'Contact')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-container shrink-0" />
                <span>3715 NORTHCREST RD SUITE 19, ATLANTA, GA 30340</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-container shrink-0" />
                <a href="tel:+14705950121" className="hover:text-primary-container transition-colors">+1 (470) 595-0121</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-container shrink-0" />
                <a href="mailto:oiminstallllc@gmail.com" className="hover:text-primary-container transition-colors">oiminstallllc@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
            © {currentYear} OIM OFFICE INSTALLATIONS. {t('Desde 2018.', 'Since 2018.')} {t('Todos los derechos reservados.', 'All rights reserved.')}
          </p>
          <div className="flex gap-8 text-[10px] font-medium text-white/40 uppercase tracking-widest">
            <span className="hover:text-white transition-colors cursor-pointer">{t('Privacidad', 'Privacy')}</span>
            <span className="hover:text-white transition-colors cursor-pointer">{t('Términos', 'Terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
