import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden" id="mapa">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-secondary rounded-[3rem] shadow-2xl overflow-hidden min-h-[600px]">
          {/* Left Side: Info Panel */}
          <div className="lg:w-1/3 p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="space-y-12 relative z-10">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 rounded-full mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container font-headline">
                    {t('Área de Cobertura', 'Service Area')}
                  </span>
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-extrabold font-headline leading-tight tracking-tighter">
                  {t('Atlanta y alrededores', 'Atlanta and Surrounding Area')}
                </h2>
                <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-sm">
                  {t('Brindamos servicios de instalación profesional en todo el estado de Georgia, llegando hasta las fronteras con Florida, Alabama y Tennessee.', 'Providing professional installation services across the entire state of Georgia, reaching the borders of Florida, Alabama, and Tennessee.')}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary-container/10 transition-colors">
                    <MapPin className="text-primary-container" size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{t('Sede Central', 'Headquarters')}</p>
                    <p className="text-lg font-medium leading-snug">3715 Northcrest Rd, Suite 19<br/>Atlanta, GA 30340</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary-container/10 transition-colors">
                    <Navigation className="text-primary-container" size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{t('Alcance Regional', 'Regional Reach')}</p>
                    <p className="text-sm font-medium text-white/70 leading-relaxed">
                      {t('Servicio en todo Georgia, llegando a fronteras con Florida, Alabama y Tennessee.', 'Serving all of Georgia, reaching borders with Florida, Alabama, and Tennessee.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5 relative z-10">
              <a 
                href="tel:+14705950121"
                className="flex items-center gap-6 group p-4 -m-4 rounded-3xl hover:bg-white/5 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container text-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-primary-container/20">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t('Línea Directa', 'Direct Line')}</p>
                  <p className="text-3xl font-black font-headline tracking-tight">+1 (470) 595-0121</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Map Canvas */}
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
              <div className="w-[500px] h-[500px] border-2 border-primary-container/20 rounded-full animate-[ping_5s_infinite] opacity-20"></div>
              <div className="absolute w-[350px] h-[350px] border-2 border-primary-container/10 rounded-full animate-[ping_7s_infinite] opacity-10"></div>
            </div>

            {/* Map Floating Badge */}
            <div className="absolute top-10 right-10 bg-secondary/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">{t('Técnicos Activos en Georgia', 'Active Technicians in Georgia')}</span>
            </div>

            {/* SOTA Corner Accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-container pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
