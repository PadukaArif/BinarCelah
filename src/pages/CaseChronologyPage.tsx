import React, { useState, useMemo } from 'react';
import { CaseLayout } from '../components/case/CaseLayout';
import {
  CHRONOLOGY_PAGE_HEADER,
  CHRONOLOGY_MANDATORY_DISCLAIMER,
  CHRONOLOGY_NODES,
  CHRONOLOGY_FOOTER_DATA,
} from '../data/caseChronologyData';
import { DateProtocolLegend } from '../components/case/chronology/DateProtocolLegend';
import { ChronologyFilterBar } from '../components/case/chronology/ChronologyFilterBar';
import { ChronologyFeed } from '../components/case/chronology/ChronologyFeed';
import { CriticalGapBanner } from '../components/case/chronology/CriticalGapBanner';
import { PumpAuditSection } from '../components/case/chronology/PumpAuditSection';
import { PpidMonitoringWidget } from '../components/case/chronology/PpidMonitoringWidget';
import { StatusBadge } from '../components/common/StatusBadge';
import { AlertCircle, Shield, Hash } from 'lucide-react';

export const CaseChronologyPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [eventFilter, setEventFilter] = useState<string>('all');
  const [sectorFilter, setSectorFilter] = useState<string>('sekonyer');
  const [viewMode, setViewMode] = useState<'kronologi' | 'dual' | 'graph'>('kronologi');

  const filteredNodes = useMemo(() => {
    return CHRONOLOGY_NODES.filter((node) => {
      // Status filter
      if (statusFilter === 'primer' && !node.simpulBadge.includes('PRIMER')) return false;
      if (statusFilter === 'skenario' && !node.simpulBadge.includes('SKENARIO')) return false;
      if (statusFilter === 'lintas' && !node.simpulBadge.includes('SKENARIO')) return false;
      if (statusFilter === 'hukum' && !node.simpulBadge.includes('HUKUM')) return false;
      if (statusFilter === 'fiskal' && !node.simpulBadge.includes('FISKAL')) return false;

      // Event type filter
      if (eventFilter !== 'all' && node.eventType !== eventFilter) return false;

      return true;
    });
  }, [statusFilter, eventFilter]);

  const isFiltered = statusFilter !== 'all' || eventFilter !== 'all';

  const handleResetFilters = () => {
    setStatusFilter('all');
    setEventFilter('all');
    setSectorFilter('sekonyer');
  };

  return (
    <CaseLayout activeTab="kronologi">
      <div className="space-y-8">
        {/* 1. Chronology Sub-Header */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-sapphire uppercase tracking-wider block mb-1">
                MODUL INVESTIGASI TAHAP 2
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
                {CHRONOLOGY_PAGE_HEADER.title}
              </h2>
            </div>
            <StatusBadge
              label={CHRONOLOGY_PAGE_HEADER.badge}
              type="case_param"
            />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl font-sans">
            {CHRONOLOGY_PAGE_HEADER.subtitle}
          </p>
        </div>

        {/* 2. Mandatory Contextual Disclaimer (F-103 Mandate) */}
        <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-900 block mb-0.5">
              Penafian Kontekstual Metodologi & Parameter Waktu:
            </strong>
            <p>{CHRONOLOGY_MANDATORY_DISCLAIMER}</p>
          </div>
        </div>

        {/* 3. Filter Control Bar */}
        <ChronologyFilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          eventFilter={eventFilter}
          setEventFilter={setEventFilter}
          sectorFilter={sectorFilter}
          setSectorFilter={setSectorFilter}
          totalNodes={CHRONOLOGY_NODES.length}
          filteredCount={filteredNodes.length}
          onReset={handleResetFilters}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {/* 4. Date Protocol Legend */}
        <DateProtocolLegend />

        {/* 5. Chronological Timeline Feed */}
        <ChronologyFeed
          nodes={filteredNodes}
          isFiltered={isFiltered}
          onResetFilters={handleResetFilters}
        />

        {/* 6. Crimson Critical Gap Warning Banner */}
        <CriticalGapBanner />

        {/* 7. Audit Triangulation Card for Celah #01 */}
        <PumpAuditSection />

        {/* 8. PPID Public Information Request Monitoring Widget */}
        <PpidMonitoringWidget />

        {/* 9. Footer Integrity & Checksum Banner */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-3 max-w-2xl">
            <Shield className="w-5 h-5 text-sapphire shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-navy text-xs uppercase block">
                Integritas Bukti & Batasan Faktual
              </strong>
              <p className="leading-relaxed text-[11px] text-slate-500">
                {CHRONOLOGY_FOOTER_DATA.integrityStatement}
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] shrink-0 space-y-1">
            <div className="flex items-center gap-1.5 text-navy font-bold">
              <Hash className="w-3.5 h-3.5 text-slate-400" />
              <span>MERKLE ROOT HASH</span>
            </div>
            <div className="text-slate-600 truncate max-w-xs">
              {CHRONOLOGY_FOOTER_DATA.merkleRoot}
            </div>
            <div className="text-[10px] text-slate-400">
              Disinkronisasi: {CHRONOLOGY_FOOTER_DATA.syncedAt}
            </div>
          </div>
        </div>
      </div>
    </CaseLayout>
  );
};

