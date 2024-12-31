import React from 'react';
import { Award } from 'lucide-react';
import { colors } from '../../theme';
import SectionTitle from '../SectionTitle';

const Achievements: React.FC = () => (
  <section>
    <SectionTitle icon={Award} title="Achievements" />
    <div className={`${colors.primary.card} rounded-lg shadow-md p-6`}>
      <p className="text-lg">Pillai CodeChamps Hackathon Winner.</p>
      <p className="text-lg">Headed the CodeWrites Club. (Organized various coding workshops in college)</p>
      <p className="text-lg">Open Source Contributor on GitHub.</p>
    </div>
  </section>
);

export default Achievements;
