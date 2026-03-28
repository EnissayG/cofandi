import { ArrowRight, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const FORM_NAME = 'contact';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    reason: '',
    message: '',
    'bot-field': ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const body = encode({
        'form-name': FORM_NAME,
        ...formData
      });
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if (!res.ok) throw new Error('Erreur réseau');
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        reason: '',
        message: '',
        'bot-field': ''
      });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                Contactez-nous
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-primary">Email</h3>
                  <a href="mailto:cofandi.inc.ca@gmail.com" className="text-gray-600 hover:text-primary transition-colors font-light">
                    cofandi.inc.ca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-primary">Téléphone</h3>
                  <a href="tel:+15145604627" className="text-gray-600 hover:text-primary transition-colors font-light">
                    (514) 560-4627
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-primary">Localisation</h3>
                  <p className="text-gray-600 font-light">Montréal, Québec<br />Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg">
            <form
              name={FORM_NAME}
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden" aria-hidden="true">
                <label>
                  <input name="bot-field" value={formData['bot-field']} onChange={handleChange} readOnly tabIndex={-1} />
                </label>
              </p>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-[16px] bg-green-50 text-green-800">
                  <CheckCircle size={24} className="flex-shrink-0 text-green-600" />
                  <p className="font-medium">Message envoyé. Nous vous recontacterons rapidement.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-[16px] bg-red-50 text-red-800">
                  <AlertCircle size={24} className="flex-shrink-0 text-red-600" />
                  <p className="font-medium">Une erreur est survenue. Réessayez ou contactez-nous par email.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-normal">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-normal">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700 font-normal">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  placeholder="+1 (514) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block mb-2 text-gray-700 font-normal">Organisation</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                  placeholder="Nom de votre entreprise ou institution"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block mb-2 text-gray-700 font-normal">Raison du contact *</label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white font-light"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="installation">Demande d'installation</option>
                  <option value="demo">Demande de démonstration</option>
                  <option value="devis">Demande de devis</option>
                  <option value="maintenance">Maintenance et support</option>
                  <option value="partenariat">Opportunité de partenariat</option>
                  <option value="autre">Autre question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-normal">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-light"
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-10 py-4 bg-primary text-white rounded-[28px] hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                {status !== 'sending' && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
