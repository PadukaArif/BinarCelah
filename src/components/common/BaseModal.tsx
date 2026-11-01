import React, { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showIntegrityBadge?: boolean;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  showIntegrityBadge = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg border border-slate-300 shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mandatory Evidence Integrity Header */}
        {showIntegrityBadge && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-amber-900 text-xs font-mono font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>STUDI KASUS DEMONSTRATIF — PARAMETER BELUM TERVERIFIKASI PRIMER</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-navy leading-snug">{title}</h3>
            {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-200/60 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto text-sm text-slate-700 space-y-4">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-navy text-white rounded hover:bg-sapphire transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

