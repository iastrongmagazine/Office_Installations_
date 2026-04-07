import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import React, { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: 'Office Furniture Installation',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const message = `*Nueva Solicitud de Cotización*
Nombre: ${formData.name}
Empresa: ${formData.company || 'N/A'}
Teléfono: ${formData.phone}
Servicio: ${formData.service}
Detalles: ${formData.details || 'Ninguno'}`;

      const whatsappUrl = `https://wa.me/14705950121?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      setFormData({ name: '', company: '', phone: '', service: 'Office Furniture Installation', details: '' });
    } catch (error) {
      console.error('Error redirecting to WhatsApp:', error);
      setStatus('error');
    }
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
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=3715+NORTHCREST+RD+SUITE+19,+ATLANTA,+GA+30340" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-primary-container transition-colors block"
                  >
                    3715 NORTHCREST RD SUITE 19<br/>ATLANTA, GA 30340
                  </a>
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
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{t('Detalles Adicionales (Opcional)', 'Additional Details (Optional)')}</label>
                <textarea name="details" value={formData.details} onChange={handleChange} rows={3} className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none" placeholder={t('Explique brevemente su consulta o requerimiento específico...', 'Briefly explain your inquiry or specific requirement...')}></textarea>
              </div>
              
              {status === 'success' && (
                <div className="bg-[#25D366]/10 text-[#25D366] p-4 rounded-xl text-sm font-medium border border-[#25D366]/20">
                  {t('Mensaje Enviado con Éxito, dentro de poco un Director del Equipo se pondrá en comunicación con usted.', 'Message Sent Successfully, a Team Director will contact you shortly.')}
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-error/10 text-error p-4 rounded-xl text-sm font-medium border border-error/20">
                  {t('Hubo un error al enviar el mensaje. Por favor, intente nuevamente o contáctenos por teléfono.', 'There was an error sending the message. Please try again or contact us by phone.')}
                </div>
              )}

              <motion.button 
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                className={`w-full text-on-primary font-bold py-5 rounded-xl transition-all shadow-lg mt-4 ${status === 'submitting' ? 'bg-primary-container/70 cursor-not-allowed' : 'bg-primary-container hover:opacity-90 shadow-primary-container/20'}`}
              >
                {status === 'submitting' ? t('Enviando...', 'Sending...') : t('Solicitar Cotización', 'Request Quote')}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
