import { Smartphone, CreditCard, Coffee } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    step: '01',
    title: 'Sélectionnez votre boisson',
    description: 'Parcourez notre menu sur l\'écran tactile et choisissez parmi notre sélection de boissons premium.'
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Effectuez le paiement',
    description: 'Payez facilement par carte ou sans contact. Rapide, sécurisé et sans tracas.'
  },
  {
    icon: Coffee,
    step: '03',
    title: 'Savourez votre boisson',
    description: 'Récupérez votre boisson fraîchement préparée et profitez d\'un moment de qualité.'
  }
];

export function HowItWorks() {
  return (
    <section id="comment" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            Comment ça marche ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Trois étapes simples pour obtenir votre boisson préférée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative bg-white rounded-[28px] p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-semibold shadow-lg">
                  {step.step}
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}