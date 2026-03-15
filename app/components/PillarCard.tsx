import Link from 'next/link';

interface PillarCardProps {
  id?: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  footnote?: string;
  children?: React.ReactNode;
}

export default function PillarCard({
  id,
  title,
  description,
  href,
  external = false,
  footnote,
  children,
}: PillarCardProps) {
  const cardContent = (
    <div
      id={id}
      className="bg-warm-white rounded-2xl p-8 sm:p-10 border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {children}
      <h3 className="font-serif text-[24px] sm:text-[28px] text-text-primary mt-4">
        {title}
      </h3>
      <p className="text-text-secondary text-base mt-2 flex-grow">{description}</p>
      {footnote && (
        <p className="text-sm text-gold-bright font-medium mt-4">{footnote}</p>
      )}
      <div className="mt-4 flex items-center gap-1 text-gold-bright text-sm font-medium">
        <span>{external ? 'RSVP' : 'Explore'}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <Link href={href}>{cardContent}</Link>;
}
