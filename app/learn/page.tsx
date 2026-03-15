import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import resources from '@/data/resources.json';

export default function Learn() {
  const featured = resources.filter((r) => r.featured);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-serif text-[40px] sm:text-[48px] tracking-tight text-text-primary">
            Learn
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            More resources are on the way.
          </p>

          <div className="mt-12 max-w-xl">
            {featured.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-warm-white rounded-2xl p-8 border border-border cursor-pointer"
              >
                <h2 className="font-serif text-[24px] sm:text-[28px] text-text-primary">
                  {resource.title}
                </h2>
                <p className="text-text-secondary mt-2">{resource.description}</p>
                <div className="mt-4 flex items-center gap-1 text-gold-bright text-sm font-medium">
                  <span>Start learning</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-text-secondary">
            Have a resource to suggest? Reach out at{' '}
            <a href="mailto:w1@student.groups.wexchange.wmich.edu" className="text-gold-bright hover:underline">
              w1@student.groups.wexchange.wmich.edu
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
