import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <Image
          src="/w1_logo.png"
          alt="W1"
          width={48}
          height={48}
          className="mx-auto mb-6"
        />
        <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight text-text-primary">
          W1 builds the Midwest&apos;s next
          <br className="hidden sm:block" /> generation of founders.
        </h1>
        <p className="mt-5 text-lg text-text-secondary font-sans max-w-xl mx-auto">
          A student startup community across Western Michigan and beyond.
        </p>
      </div>
    </section>
  );
}
