import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import React, { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: 'Office Furniture Installation'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nueva Solicitud de Cotización de ${formData.name}`;
    const body = `Nombre: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0ATeléfono: ${formData.phone}%0D%0ATipo de Servicio: ${formData.service}`;
    window.location.href = `mailto:oiminstallllc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-container-low/50" id="contacto">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-2xl shadow-black/5 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 space-y-12 bg-[#191c1d] text-white">
            <div>
              <h2 className="text-4xl font-extrabold font-headline mb-6">{t('Construyamos tu espacio de trabajo.', "Let's build your workspace.")}</h2>
              <p className="text-white/60 leading-relaxed">{t('Nuestra área de servicio incluye Atlanta, Marietta, Alpharetta, Lawrenceville y los suburbios circundantes.', 'Our service area includes Atlanta, Marietta, Alpharetta, Lawrenceville, and surrounding suburbs.')}</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
                <div className="text-sm">
                  <p className="font-bold mb-1">{t('Ubicación', 'Location')}</p>
                  <p className="text-white/60">Atlanta, Georgia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">call</span>
                <div className="text-sm">
                  <p className="font-bold mb-1">{t('Teléfono', 'Phone')}</p>
                  <a href="tel:+14705950121" className="text-white/60 hover:text-primary-container transition-colors">+1 (470) 595-0121</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">mail</span>
                <div className="text-sm">
                  <p className="font-bold mb-1">Email</p>
                  <a href="mailto:oiminstallllc@gmail.com" className="text-white/60 hover:text-primary-container transition-colors">oiminstallllc@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">photo_camera</span>
                <div className="text-sm">
                  <p className="font-bold mb-1">Instagram</p>
                  <a href="https://instagram.com/oimayen" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary-container transition-colors">@oimayen</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{t('Nombre', 'Name')}</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder={t('Tu nombre completo', 'Your full name')} type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{t('Empresa', 'Company')}</label>
                <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder={t('Nombre de tu empresa', 'Your company name')} type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{t('Teléfono', 'Phone')}</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="(000) 000-0000" type="tel"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{t('Tipo de Servicio', 'Service Type')}</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all appearance-none">
                  <option value="Office Furniture Installation">{t('Instalación de Mobiliario de Oficina', 'Office Furniture Installation')}</option>
                  <option value="Reconfiguration">{t('Reconfiguración', 'Reconfiguration')}</option>
                  <option value="Disassembly & Moving">{t('Desmontaje y Mudanza', 'Disassembly & Moving')}</option>
                  <option value="Commercial Project">{t('Proyecto Comercial', 'Commercial Project')}</option>
                </select>
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-container text-on-primary font-bold py-5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary-container/20 mt-4"
              >
                {t('Solicitar Cotización', 'Request Quote')}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
