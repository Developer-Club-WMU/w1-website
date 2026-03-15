export default function Footer() {
  return (
    <footer className="bg-brown-deep text-text-on-dark">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-on-dark/80">
            &copy; {new Date().getFullYear()} W1 Startup Community |{' '}
            <a href="mailto:w1@student.groups.wexchange.wmich.edu" className="underline">
              w1@student.groups.wexchange.wmich.edu
            </a>
          </p>
          <p className="text-xs text-text-on-dark/50">
            This site uses Microsoft Clarity for analytics.{' '}
            <a
              href="https://privacy.microsoft.com/en-us/privacystatement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-on-dark/80 transition-colors"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
