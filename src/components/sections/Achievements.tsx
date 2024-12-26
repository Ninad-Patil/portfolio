import React from 'react';
import { Award } from 'lucide-react';
import { colors } from '../../theme';
import SectionTitle from '../SectionTitle';

const Achievements: React.FC = () => (
  <section>
    <SectionTitle icon={Award} title="Achievements" />
    <div className={`${colors.primary.card} rounded-lg shadow-md p-6`}>
      <p className="text-lg">TCS CodeVita Finalist (Rank under 5000 out of 1 lakh+)</p>
    </div>
  </section>
);

export default Achievements;