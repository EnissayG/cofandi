import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <Mail size={20} className="text-white" />
            <span className="text-white font-normal">
              Contactez-nous
            </span>
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 600,
              lineHeight: 1.2
            }}
          >
            Parlons de Votre Projet
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
          >
            Notre équipe est prête à répondre à toutes vos questions et à discuter de vos besoins
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 
                className="text-xl font-semibold text-primary"
              >
                Email
              </h3>
              <a 
                href="mailto:info@confandi.com"
className="text-gray-600 hover:text-primary transition-colors font-normal"
              >
                info@confandi.com
              </a>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 
                className="text-xl font-semibold text-primary"
              >
                Téléphone
              </h3>
              <p 
className="text-gray-600 font-normal"
              >
                +1 (514) 555-CAFE
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 
                className="text-xl font-semibold text-primary"
              >
                Adresse
              </h3>
              <p 
className="text-gray-600 font-normal"
              >
                Montréal, QC<br />Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}