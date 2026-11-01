import React from 'react';
import { NON_AFFILIATION_NOTICE } from '../../../data/caseGapsData';
import { Shield } from 'lucide-react';

export const NonAffiliationBanner: React.FC = () => {
  return (
    <div className="bg-slate-100 rounded-xl border border-slate-300 p-5 sm:p-6 text-slate-700 space-y-2">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-sapphire shrink-0" />
        <h4 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
          {NON_AFFILIATION_NOTICE.title}
        </h4>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed font-sans pl-6">
        {NON_AFFILIATION_NOTICE.body}
      </p>
    </div>
  );
};

