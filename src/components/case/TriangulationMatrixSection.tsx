import React, { useState } from 'react';
import { TRIANGULATION_VECTORS, MERKLE_TREE_NOTE } from '../../data/caseOverviewData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import type { TriangulationVector } from '../../types/case';
import { GitCompare, Info, AlertTriangle } from 'lucide-react';

export const TriangulationMatrixSection: React.FC = () => {
  const [selectedVector, setSelectedVector] = useState<TriangulationVector | null>(null);
  const [isTreeModalOpen, setIsTreeModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-sapphire uppercase tracking-wider block mb-1">
            SEKSI INVESTIGASI TAHAP 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
            2. Apa yang ditunjukkan bukti? (Matriks Triangulasi Multi-Vektor)
          </h2>
        </div>
        <StatusBadge
          label="PARAMETER SKENARIO DEMONSTRATIF"
          type="case_param"
        />
      </div>

      {/* Explanatory Lead */}
      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
        <p>
          Prinsip triangulasi BinarCelah membandingkan tiga vektor data independen: observasi ruang, respon regulasi, dan pencatatan alokasi finansial.
        </p>
        <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-lg text-blue-950 text-xs flex items-start gap-2.5">
          <Info className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
          <p>
            <strong>Prinsip Batasan Hubungan Bukti:</strong> Kehadiran tiga vektor data dalam linimasa yang berdekatan tidak secara otomatis membuktikan hubungan kausalitas hukum tanpa adanya dokumen penghubung resmi (seperti kontrak lelang dan Berita Acara Serah Terima).
          </p>
        </div>
      </div>

      {/* Triangulation Matrix Table / Cards */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 font-mono text-[11px] uppercase tracking-wider text-slate-600">
              <th className="py-3 px-4 font-semibold">Vektor Data</th>
              <th className="py-3 px-4 font-semibold">Sumber / Instansi</th>
              <th className="py-3 px-4 font-semibold">Parameter Faktual Skenario</th>
              <th className="py-3 px-4 font-semibold">Klasifikasi Bukti</th>
              <th className="py-3 px-4 font-semibold text-right">Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {TRIANGULATION_VECTORS.map((vec) => (
              <tr key={vec.id} className="hover:bg-slate-50/80 transition-colors">
                {/* Vektor Code & Title */}
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className="font-mono font-bold text-navy block">
                    {vec.vectorCode}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {vec.title}
                  </span>
                </td>

                {/* Source Agency */}
                <td className="py-3.5 px-4 font-medium text-slate-800 whitespace-nowrap">
                  {vec.sourceAgency}
                </td>

                {/* Parameter */}
                <td className="py-3.5 px-4 max-w-xs text-slate-600 leading-normal">
                  {vec.factualParameter}
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <StatusBadge
                    label={vec.evidenceStatus}
                    type={vec.statusType}
                    className="text-[10px]"
                  />
                </td>

                {/* Action */}
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <button
                    onClick={() => setSelectedVector(vec)}
                    className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  >
                    Periksa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Merkle Tree Tagging Footer */}
      <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-50 p-4 rounded-lg">
        <div>
          <span className="font-mono font-bold text-navy text-[11px] block">
            {MERKLE_TREE_NOTE.label}
          </span>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {MERKLE_TREE_NOTE.description}
          </p>
        </div>

        <button
          onClick={() => setIsTreeModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
        >
          <GitCompare className="w-3.5 h-3.5 text-sapphire" />
          <span>Lihat Skema Penandaan</span>
        </button>
      </div>

      {/* Vector Detail Modal */}
      {selectedVector && (
        <BaseModal
          isOpen={!!selectedVector}
          onClose={() => setSelectedVector(null)}
          title={`Inspeksi ${selectedVector.vectorCode}: ${selectedVector.title}`}
          subtitle={`Sumber Instansi: ${selectedVector.sourceAgency}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide mb-1">
                Parameter Faktual Skenario
              </h4>
              <p className="bg-slate-50 p-3 rounded border border-slate-200 leading-relaxed">
                {selectedVector.factualParameter}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
              <span className="font-bold text-navy text-xs uppercase block">
                Temuan & Relevansi Pembuktian:
              </span>
              <p className="text-slate-600">{selectedVector.finding}</p>
            </div>

            <div className="p-3 bg-amber-50 rounded border border-amber-200 text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Batasan Metodologi Data Ini:</span>
              </div>
              <p>{selectedVector.limitations}</p>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Merkle Tree Schema Explanation Modal */}
      <BaseModal
        isOpen={isTreeModalOpen}
        onClose={() => setIsTreeModalOpen(false)}
        title="Skema Penandaan Integritas Data (Merkle Tree Prototype)"
        subtitle="Struktur Konseptual Penandaan Integritas Alur Bukti Lokal"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Skema penandaan <code>TREE-NODE-BK9021</code> merupakan representasi visual hierarki bukti untuk memvalidasi bahwa simpul-simpul data terikat pada satu kasus studi percontohan.
          </p>

          <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2">
            <h4 className="font-bold text-navy text-xs uppercase">
              Batasan Kriptografis Protokol:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
              <li>Penandaan ini beroperasi pada tingkat visualisasi antarmuka statis di sisi klien peramban.</li>
              <li>Bukan merupakan implementasi smart contract blockchain atau sertifikat tanda tangan elektronik resmi (BSrE).</li>
              <li>Integritas hukum dokumen negara tetap tunduk pada keabsahan arsip fisik atau digital instansi penerbit.</li>
            </ul>
          </div>
        </div>
      </BaseModal>
    </section>
  );
};
