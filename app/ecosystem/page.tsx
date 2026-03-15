import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EcosystemDirectory from '../components/EcosystemDirectory';

export default function Ecosystem() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-serif text-[40px] sm:text-[48px] tracking-tight text-text-primary">
            Ecosystem
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            The Midwest startup network - and we keep expanding.
          </p>

          <div className="mt-12">
            <EcosystemDirectory />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
