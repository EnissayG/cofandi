import { ArrowRight, Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    reason: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
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
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 600, 
                  color: '#2A3B8F',
                  lineHeight: 1.2
                }}
              >
                Contactez-nous
              </h2>
              <p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#2A3B8F]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#2A3B8F]" />
                </div>
                <div>
                  <h3 
                    className="mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#2A3B8F' }}
                  >
                    Email
                  </h3>
                  <a 
                    href="mailto:info@confandi.com"
                    className="text-gray-600 hover:text-[#2A3B8F] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    info@confandi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#2A3B8F]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#2A3B8F]" />
                </div>
                <div>
                  <h3 
                    className="mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#2A3B8F' }}
                  >
                    Téléphone
                  </h3>
                  <a 
                    href="tel:+15141234567"
                    className="text-gray-600 hover:text-[#2A3B8F] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    +1 (514) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#2A3B8F]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#2A3B8F]" />
                </div>
                <div>
                  <h3 
                    className="mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#2A3B8F' }}
                  >
                    Localisation
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  >
                    Montréal, Québec<br />Canada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  placeholder="votre@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  placeholder="+1 (514) 123-4567"
                />
              </div>

              {/* Organization */}
              <div>
                <label 
                  htmlFor="organization" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  placeholder="Nom de votre entreprise ou institution"
                />
              </div>

              {/* Reason */}
              <div>
                <label 
                  htmlFor="reason" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Raison du contact *
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all bg-white"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
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

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 focus:border-[#2A3B8F] focus:outline-none focus:ring-2 focus:ring-[#2A3B8F]/20 transition-all resize-none"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-10 py-4 bg-[#2A3B8F] text-white rounded-[28px] hover:bg-[#1f2d6b] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Envoyer le message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
