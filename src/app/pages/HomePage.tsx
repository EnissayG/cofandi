import { Hero } from '../components/Hero';
import { WhyConfandi } from '../components/WhyConfandi';
import { HowItWorks } from '../components/HowItWorks';
import { MachineShowcase } from '../components/MachineShowcase';
import { Locations } from '../components/Locations';
import { UseCases } from '../components/UseCases';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyConfandi />
      <HowItWorks />
      <MachineShowcase />
      <Locations />
      <UseCases />
    </>
  );
}
