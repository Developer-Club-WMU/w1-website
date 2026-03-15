'use client';

import { getNextSession, formatSessionDate } from '@/data/bronco-build-it-links';
import PillarCard from './PillarCard';

export default function BroncoBuildIt() {
  const session = getNextSession();
  const href = session?.url ?? '/';
  const footnote = session ? `Next session: ${formatSessionDate(session.date)}` : undefined;

  return (
    <PillarCard
      id="bronco-build-it"
      title="Bronco Build It"
      description="Every Sunday at 2pm. Show up, build, ship."
      image="/images/cards/w1_build.png"
      href={href}
      external
      footnote={footnote}
    />
  );
}
