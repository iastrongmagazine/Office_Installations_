import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">{t('Nuestros Servicios', 'Our Services')}</h2>
            <p className="text-on-surface-variant">{t('Nos especializamos en crear entornos de trabajo funcionales y estéticos. Desde la instalación de un solo escritorio hasta la reubicación completa de su empresa, garantizamos precisión y cuidado en cada paso.', 'We specialize in creating functional and aesthetic work environments. From installing a single desk to completely relocating your company, we guarantee precision and care at every step.')}</p>
          </div>
          <div className="hidden md:block">
            <span className="text-primary-container font-bold text-sm tracking-widest uppercase">{t('Nuestra Experiencia', 'Our Expertise')}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            className="md:col-span-2 bg-surface-container-lowest p-8 lg:p-12 rounded-xl border border-outline-variant/10 transition-all group"
          >
            <div className="flex flex-col lg:flex-row gap-8 h-full">
              <div className="flex-1">
                <span className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary-container">desk</span>
                </span>
                <h3 className="text-2xl font-bold font-headline mb-4">{t('Instalación de Mobiliario de Oficina', 'Office Furniture Installation')}</h3>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Escritorios y estaciones de trabajo', 'Desks & workstations')}</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Cubículos', 'Cubicles')}</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Mesas de conferencias', 'Conference tables')}</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Sillas y unidades de almacenamiento', 'Chairs & storage units')}</li>
                </ul>
              </div>
              <div className="lg:w-1/2 aspect-video lg:aspect-square rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" alt="Office installation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALtKeYuroWa2Uu0tv_b8nlZ9uxPjr7bojRt-JU2zn9yJDeDOndZtvuIyQUxe12_T_ZJeltpEJpv3ipCWs4cgch_57y5-Shu72iQhfYDOX5O2GxWol2qOD64wqy6Vvv_JDaUc9tc8jubbitDsrJXNkhBWq6vQZ-ne8bFytLaLD_UDWXww31f-9Y_R2xQQR-nv-Vxq7Y-p9XRiv3umKR-xc_1M_hPT-RMHWEm1gyfzegbiCE3auKAbKQ2m8vIxm2Q7HZf_omJv-9ytA7"/>
              </div>
            </div>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/5 flex flex-col justify-between transition-all group"
          >
            <div>
              <span className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container">architecture</span>
              </span>
              <h3 className="text-2xl font-bold font-headline mb-4">{t('Configuración y Reconfiguración', 'Office Setup & Reconfiguration')}</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Nuevas configuraciones de oficina', 'New office setups')}</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Rediseño de espacios de trabajo', 'Workspace redesign')}</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Reorganización de mobiliario', 'Furniture rearrangement')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/5 transition-all group"
          >
            <span className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary-container">local_shipping</span>
            </span>
            <h3 className="text-2xl font-bold font-headline mb-4">{t('Desmontaje y Mudanza', 'Disassembly & Moving')}</h3>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Desmontaje seguro', 'Safe disassembly')}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Reubicación', 'Relocation')}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> {t('Reinstalación', 'Reinstallation')}</li>
            </ul>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            className="md:col-span-2 bg-secondary text-white p-8 lg:p-12 rounded-xl relative overflow-hidden transition-all group"
          >
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary-container">business</span>
                </span>
                <h3 className="text-3xl font-extrabold font-headline">{t('Proyectos Comerciales', 'Commercial Projects')}</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary-container"></span> {t('Oficinas pequeñas y grandes', 'Small & large offices')}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary-container"></span> {t('Entornos corporativos', 'Corporate environments')}</li>
                <li className="flex items-center gap-3 md:col-span-2"><span className="w-2 h-2 rounded-full bg-primary-container"></span> {t('Proyectos de entrega rápida', 'Fast turnaround projects')}</li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary-container/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
