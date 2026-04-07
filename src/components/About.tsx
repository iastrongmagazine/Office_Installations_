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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
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
            <p>{t('OI Office Installations ha sido un pilar en Atlanta desde 2018. Nuestro viaje comenzó con una misión simple: proporcionar las soluciones de mobiliario de oficina más meticulosas y confiables de la región.', 'OI Office Installations has been a cornerstone in Atlanta since 2018. Our journey began with a simple mission: to provide the most meticulous and reliable office furniture solutions in the region.')}</p>
            <p>{t('Con años de experiencia técnica, nuestro equipo se destaca en el manejo de mobiliario corporativo de alta gama y configuraciones residenciales complejas. Nos enorgullecemos de nuestra comunicación bilingüe, asegurando un servicio claro y eficiente para nuestra diversa clientela tanto en inglés como en español.', 'With years of technical expertise, our team excels in handling high-end corporate furniture and complex residential setups. We pride ourselves on our bilingual communication, ensuring clear and efficient service for our diverse clientele in both English and Español.')}</p>
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
