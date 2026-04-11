import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Navigation, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-secondary hover:bg-primary-container transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Side: Info */}
            <div className="lg:w-1/3 p-8 lg:p-12 bg-secondary text-white flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 rounded-full mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container font-headline">
                      {t('Área de Cobertura', 'Service Area')}
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold font-headline leading-tight">
                    {t('Atlanta y Región Metro', 'Atlanta & Metro Region')}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary-container" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">{t('Sede Central', 'Headquarters')}</p>
                      <p className="text-sm font-medium">3715 Northcrest Rd, Atlanta, GA 30340</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Navigation className="text-primary-container" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">{t('Cobertura', 'Coverage')}</p>
                      <p className="text-sm font-medium">Marietta, Alpharetta, Lawrenceville, Decatur, Smyrna & more.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <a 
                  href="tel:+14705950121"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-container text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('Llámanos ahora', 'Call us now')}</p>
                    <p className="text-xl font-bold font-headline">+1 (470) 595-0121</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="lg:w-2/3 h-[450px] lg:h-auto relative bg-surface-container-low group/map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106093.0034293844!2d-84.453965!3d33.748995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1712850000000!5m2!1sen!2sus" 
                className="w-full h-full border-0 grayscale contrast-125 brightness-90 transition-all duration-700 group-hover/map:grayscale-0 group-hover/map:brightness-100"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* SOTA Overlay: Service Area Pulse */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary-container/30 rounded-full animate-[ping_3s_infinite] opacity-20"></div>
                <div className="absolute w-48 h-48 border-2 border-primary-container/20 rounded-full animate-[ping_4s_infinite] opacity-10"></div>
              </div>

              {/* Showroom Card Overlay (SOTA version of the user's screenshot) */}
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', damping: 20 }}
                className="absolute bottom-6 left-6 right-6 lg:left-auto lg:w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-headline font-bold text-lg tracking-tight">Atlanta Showroom</h4>
                    <div className="px-2 py-0.5 bg-primary-container text-secondary text-[8px] font-black uppercase tracking-widest rounded">OPEN</div>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-secondary flex items-center justify-center shrink-0 shadow-lg shadow-primary-container/20">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Direct Line</p>
                      <a href="tel:4045059623" className="text-lg font-bold font-headline hover:text-primary-container transition-colors">404-505-9623</a>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all border border-white/10">
                    {t('Ver Direcciones', 'Get Directions')}
                  </button>
                </div>
              </motion.div>

              {/* Map Floating Badge */}
              <div className="absolute top-8 left-8 bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t('Técnicos en Ruta', 'Technicians En Route')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
