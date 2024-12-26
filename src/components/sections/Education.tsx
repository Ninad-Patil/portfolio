import React from 'react';
import { GraduationCap } from 'lucide-react';
import { colors } from '../../theme';
import SectionTitle from '../SectionTitle';

const Education: React.FC = () => (
  <section className="mb-20">
    <SectionTitle icon={GraduationCap} title="Education" />
    <div className={`${colors.primary.card} rounded-lg shadow-md p-6`}>
      <h3 className="text-xl font-bold">Pillai College of Engineering</h3>
      <p className={colors.secondary.text}>Bachelor of Engineering in Information Technology</p>
      <p className={colors.secondary.text}>CGPA: 7.7 (2018-2022)</p>
    </div>
  </section>
);

export default Education;