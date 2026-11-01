export type StatusType = 
  | 'verified' 
  | 'official' 
  | 'gap' 
  | 'neutral' 
  | 'case_param' 
  | 'repo_unavailable';

export interface EvidenceChainNode {
  id: string;
  stepNumber: string;
  category: string;
  statusLabel: string;
  statusType: StatusType;
  title: string;
  description: string;
  referenceCode: string;
}

export interface LedgerRecord {
  code: string;
  agency: string;
  subject: string;
  forensicStatus: string;
  statusType: StatusType;
  hash: string;
  actionType: 'inspect' | 'request_kip';
  detailNote?: string;
  publishDate?: string;
}

export interface MethodologyStep {
  stepNumber: string;
  category: string;
  title: string;
  description: string;
  standard: string;
}

export interface PlatformMetric {
  id: string;
  label: string;
  type: 'capability' | 'target' | 'methodology' | 'neutral';
  note?: string;
}

/* --- Case Workspace Specific Types --- */

export interface TimestampNode {
  id: string;
  time: string;
  date: string;
  title: string;
  sensorOrSource: string;
  description: string;
  statusLabel: string;
  statusType: StatusType;
}

export interface EvidenceDocumentCard {
  id: string;
  code: string;
  title: string;
  classification: string;
  statusType: StatusType;
  instrument: string;
  bandsOrFormat: string;
  resolution: string;
  coordinatesNote: string;
  checksumStatus: string;
  summary: string;
}

export interface TriangulationVector {
  id: string;
  vectorCode: string;
  title: string;
  sourceAgency: string;
  factualParameter: string;
  evidenceStatus: string;
  statusType: StatusType;
  finding: string;
  limitations: string;
}

export interface AccountabilityGap {
  id: string;
  code: string;
  title: string;
  gapType: string;
  statusType: StatusType;
  description: string;
  legalBasis: string;
  actionLabel: string;
  actionType: 'kip_request' | 'submit_evidence' | 'dispute_info';
}

export interface CaseCustodyItem {
  id: string;
  stageNumber: string;
  title: string;
  statusText: string;
  statusType: StatusType;
  isComplete: boolean;
}

/* --- Chronology & Evidence Traceability Types (BC-05.3) --- */

export interface ChronologyDateProtocol {
  key: string;
  label: string;
  description: string;
}

export interface ChronologyNodeItem {
  id: string;
  simpulNumber: string;
  simpulBadge: string;
  statusLabel: string;
  statusType: StatusType;
  date: string;
  time: string;
  eventDate: string;
  docDate: string;
  pubDate: string;
  auditDate: string;
  category: string;
  eventType: string;
  title: string;
  description: string;
  fileName: string;
  fileMeta: string;
  hashSnippet: string;
  action1: { label: string; actionKey: string };
  action2: { label: string; actionKey: string };
  interstitialNote?: string;
  disparityHours?: string;
}

export interface PumpComparisonColumn {
  id: string;
  columnNumber: string;
  title: string;
  body: string;
  statusLabel: string;
  statusType: StatusType;
}

export interface PpidMonitoringState {
  ticketNumber: string;
  statusText: string;
  startDate: string;
  currentDay: number;
  totalDays: number;
  remainingDays: number;
  deadlineDate: string;
}

/* --- Accountability Gaps & Advocacy Types (BC-05.4) --- */

export interface GapRelatedDoc {
  code: string;
  title: string;
  source: string;
  statusLabel: string;
  statusType: StatusType;
}

export interface GapDetailedItem {
  id: string;
  code: string;
  significance: 'TINGGI' | 'SEDANG' | 'RENDAH';
  sector: string;
  category: 'realisasi' | 'anggaran' | 'ekologis';
  verifiedAt: string;
  researchQuestion: string;
  knownFacts: {
    header: string;
    statusLabel: string;
    statusType: StatusType;
    points: string[];
    reference: string;
  };
  unknownFacts: {
    header: string;
    statusLabel: string;
    statusType: StatusType;
    points: string[];
    gapIndication: string;
  };
  relatedEvidenceDocs: GapRelatedDoc[];
  kipQuestionDraft: string;
  factualQuotation: string;
}

export interface AdvocacyStepAction {
  label: string;
  actionKey: string;
  type: 'modal' | 'download_txt' | 'external_link';
  href?: string;
  filename?: string;
}

export interface AdvocacyStepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  actions: AdvocacyStepAction[];
}
