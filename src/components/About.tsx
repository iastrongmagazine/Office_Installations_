import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-container-low" id="nosotros">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mt-8">
              <img className="w-full h-full object-cover" alt="Detail of high-quality furniture joints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjPMJQ_ZciNZMJcFPJ83zgvp00KAEKGzyOzLcJap9n_69sX06-ccCjXDdz_MiBUpFBCYk1ZG9KFFoWKbpBP_gDmrZt8GyEQnw1Whd9KNdeDmKHSH91aQIVzu3F2sFebBJz1c_QJOH5d2SfRDwN4jwbdPcgfeouq7tS5xErYId79MMbVx4qY9vhN1h_5fhalKqyjAfrV_2FPLyBpWc2az-PkoaIoY7mSM_L6uQdMGU6pxbF-W4E_bQ0bcaAWJ5rqRHE-8TJn8J1SBD"/>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" alt="Professional office installers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP1-it11Alm_HiU7zRhGsBEM37xX9rC4D3KosSlQDWMDstMrZ1Eik21fPs82d4jAtUhNT6QNVcg-Jf0iZGadLumPuEqqzbLUAFvJJwJjqQOvVc-xD4XXht_EBW1ZO4RTD_RDgZ8Ji1vGgTrBy-Bg3b_kPU6caRNHXhnCIiU_3tnAvUNuR4BygWkCNMMSESYtKNI6grcCIjqAbytVGEk0EWpGIl4FxFAN1BaH3-Qv2VmFDMi9R98uYg1kwCq4qPJmBWh9Go3fyA7hSo"/>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-1 lg:order-2"
        >
          <span className="inline-block px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-bold font-headline text-on-surface-variant">{t('Fundada en 2018', 'Founded 2018')}</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight text-on-surface">{t('Experiencia en la que puedes confiar', 'Experience You Can Trust')}</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>{t('En OIM Office Installations, creemos que el entorno de trabajo define el éxito de un equipo. Desde 2018, nos hemos dedicado a transformar espacios vacíos en oficinas dinámicas, funcionales y listas para inspirar.', 'At OIM Office Installations, we believe the work environment defines a team\'s success. Since 2018, we have been dedicated to transforming empty spaces into dynamic, functional offices ready to inspire.')}</p>
            <p>{t('Nuestro equipo combina precisión técnica con un cuidado excepcional por los detalles. Ya sea configurando una sala de juntas ejecutiva o reubicando a toda tu empresa, trabajamos contigo en cada paso para asegurar una transición impecable y sin estrés. Tu visión es nuestra prioridad.', 'Our team combines technical precision with exceptional care for detail. Whether setting up an executive boardroom or relocating your entire company, we work with you every step of the way to ensure a flawless and stress-free transition. Your vision is our priority.')}</p>
          </div>
          <div className="pt-6">
            <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary-container text-3xl">verified_user</span>
              <div>
                <h4 className="font-bold text-sm">{t('Totalmente Asegurados', 'Fully Bonded & Insured')}</h4>
                <p className="text-xs text-on-surface-variant">{t('Protegiendo tu inversión y nuestro lugar de trabajo.', 'Protecting your investment and our workplace.')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
