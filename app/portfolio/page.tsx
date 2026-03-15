import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';
import portfolioData from '@/data/portfolio.json';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-serif text-[40px] sm:text-[48px] tracking-tight text-text-primary">
            Portfolio
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            Startups built by W1 members.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData.map((startup) => (
              <PortfolioCard key={startup.name} {...startup} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-secondary">
              Building something?{' '}
              <a
                href="https://www.w1build.com/"
                className="text-gold-bright hover:underline font-medium"
              >
                Join W1 &rarr;
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
