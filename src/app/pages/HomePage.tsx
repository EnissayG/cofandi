import { Hero } from '../components/Hero';
import { WhyCofandi } from '../components/WhyConfandi';
import { HowItWorks } from '../components/HowItWorks';
import { MachineShowcase } from '../components/MachineShowcase';
import { Locations } from '../components/Locations';
import { UseCases } from '../components/UseCases';
import { SectionWave } from '../components/SectionWave';

export function HomePage() {
  return (
    <>
      <Hero />
      <SectionWave className="text-gray-50" />
      <WhyCofandi />
      <HowItWorks />
      <MachineShowcase />
      <Locations />
      <UseCases />
    </>
  );
}

