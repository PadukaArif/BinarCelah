import React from 'react';
import { CaseLayout } from '../components/case/CaseLayout';
import { FactualNarrativeSection } from '../components/case/FactualNarrativeSection';
import { TriangulationMatrixSection } from '../components/case/TriangulationMatrixSection';
import { AccountabilityGapsSection } from '../components/case/AccountabilityGapsSection';
import { CaseSidebar } from '../components/case/CaseSidebar';

export const CaseOverviewPage: React.FC = () => {
  return (
    <CaseLayout activeTab="ringkasan">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (~65% width): Narrative & Triangulation & Gaps */}
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Apa yang terjadi? */}
          <FactualNarrativeSection />

          {/* Section 2: Apa yang ditunjukkan bukti? */}
          <TriangulationMatrixSection />

          {/* Section 3: Apa yang belum jelas? (Celah Bukti) */}
          <AccountabilityGapsSection />
        </div>

        {/* Right Column (~35% width): Spatial, Custody, Drop, Metadata */}
        <div className="lg:col-span-4">
          <CaseSidebar />
        </div>
      </div>
    </CaseLayout>
  );
};

