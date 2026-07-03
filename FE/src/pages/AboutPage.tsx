import { AboutHero } from '../components/about/AboutHero';
import { AboutIntro } from '../components/about/AboutIntro';
import { FunFacts } from '../components/about/FunFacts';
import { AboutServices } from '../components/about/AboutServices';
import { PageDetailing } from '../components/ui/PageDetailing';
import { Founders } from '../components/home/Founders';
import { Team } from '../components/about/Team';

export const AboutPage = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <PageDetailing />
      <AboutHero />
      <AboutIntro />
      <Founders />
      <Team />
      <FunFacts />
      <AboutServices />
    </main>
  );
};
