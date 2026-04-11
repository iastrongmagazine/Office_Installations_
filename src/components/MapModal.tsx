import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Navigation, Phone, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect } from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  const { t } = useLanguage();

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-0 md:p-6 lg:items-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl bg-white md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-screen md:min-h-0"
          >
            {/* Mobile Header / Close */}
            <div className="lg:hidden sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-secondary border-b border-white/5">
              <button 
                onClick={onClose}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">{t('Volver', 'Back')}</span>
              </button>
              <span className="text-xs font-black tracking-widest text-primary-container uppercase">OIM MAP</span>
            </div>

            {/* Desktop Close Button */}
            <button 
              onClick={onClose}
              className="hidden lg:flex absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-primary-container hover:text-secondary transition-all duration-300 group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Side: Info */}
            <div className="lg:w-1/3 p-8 lg:p-16 bg-secondary text-white flex flex-col justify-between relative">
              <div className="space-y-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 rounded-full mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container font-headline">
                      {t('Área de Cobertura', 'Service Area')}
                    </span>
                  </div>
                  <h3 className="text-4xl font-extrabold font-headline leading-tight tracking-tighter">
                    {t('Atlanta y Región Metro', 'Atlanta & Metro Region')}
                  </h3>
                  <p className="mt-4 text-white/40 text-sm leading-relaxed">
                    {t('Brindamos servicios de instalación profesional en todo el estado de Georgia, con enfoque principal en el área metropolitana de Atlanta.', 'Providing professional installation services across the entire state of Georgia, with a primary focus on the Atlanta metropolitan area.')}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="text-primary-container" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{t('Sede Central', 'Headquarters')}</p>
                      <p className="text-base font-medium leading-snug">3715 Northcrest Rd, Suite 19<br/>Atlanta, GA 30340</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Navigation className="text-primary-container" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{t('Ciudades Principales', 'Main Cities')}</p>
                      <p className="text-sm font-medium text-white/70 leading-relaxed">
                        Marietta, Alpharetta, Lawrenceville, Decatur, Smyrna, Sandy Springs, Roswell & Duluth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/5">
                <a 
                  href="tel:+14705950121"
                  className="flex items-center gap-5 group p-4 -m-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-container text-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-container/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t('Línea Directa', 'Direct Line')}</p>
                    <p className="text-2xl font-black font-headline tracking-tight">+1 (470) 595-0121</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="lg:w-2/3 h-[500px] lg:h-auto relative bg-surface-container-low group/map overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106093.0034293844!2d-84.453965!3d33.748995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1712850000000!5m2!1sen!2sus" 
                className="w-full h-full border-0 grayscale contrast-125 brightness-90 transition-all duration-1000 group-hover/map:grayscale-0 group-hover/map:brightness-100 group-hover/map:scale-105"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* SOTA Overlay: Service Area Pulse */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-96 h-96 border-2 border-primary-container/20 rounded-full animate-[ping_4s_infinite] opacity-20"></div>
                <div className="absolute w-64 h-64 border-2 border-primary-container/10 rounded-full animate-[ping_6s_infinite] opacity-10"></div>
              </div>

              {/* Map Floating Badge */}
              <div className="absolute top-8 right-8 bg-secondary/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{t('Técnicos Activos', 'Active Technicians')}</span>
              </div>

              {/* Mobile Bottom Close (Extra safety) */}
              <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2">
                <button 
                  onClick={onClose}
                  className="bg-primary-container text-secondary font-bold px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-2"
                >
                  <X size={18} />
                  {t('Cerrar Mapa', 'Close Map')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
