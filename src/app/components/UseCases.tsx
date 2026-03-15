import { GraduationCap, Building2, Hotel, Users } from 'lucide-react';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Universités & Campus',
    description: 'Une solution idéale pour les étudiants et le personnel académique en quête de qualité et de rapidité.'
  },
  {
    icon: Building2,
    title: 'Espaces corporatifs',
    description: 'Offrez à vos employés une expérience café premium sans quitter le bureau.'
  },
  {
    icon: Hotel,
    title: 'Hôtels & Hébergements',
    description: 'Proposez à vos clients un service de boissons disponible 24/7 dans vos espaces communs.'
  },
  {
    icon: Users,
    title: 'Espaces publics',
    description: 'Salles d\'attente, centres communautaires et autres lieux à fort passage.'
  }
];

export function UseCases() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            Pour tous les environnements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Confandi s'adapte parfaitement aux besoins de différents types d'établissements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <useCase.icon size={28} className="text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-medium text-primary mb-4 relative">{useCase.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed relative">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
