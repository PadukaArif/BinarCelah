import React from 'react';
import type { StatusType } from '../../types/case';

interface StatusBadgeProps {
  label: string;
  type?: StatusType;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ label, type = 'neutral', className = '' }) => {
  const getStyles = (t: StatusType) => {
    switch (t) {
      case 'verified':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'official':
      case 'case_param':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'gap':
      case 'repo_unavailable':
        return 'bg-red-50 text-red-800 border-red-300';
      case 'neutral':
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase rounded-xs border ${getStyles(
        type
      )} ${className}`}
    >
      {label}
    </span>
  );
};

