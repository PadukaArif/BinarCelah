import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CaseOverviewPage } from './pages/CaseOverviewPage';
import { CaseChronologyPage } from './pages/CaseChronologyPage';
import { CaseGapsPage } from './pages/CaseGapsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Screen 1: Home / Issue Discovery */}
        <Route path="/" element={<HomePage />} />

        {/* Screen 2: Case Workspace — Overview & Triangulation (BC-05.2) */}
        <Route path="/kasus/:caseId/ringkasan" element={<CaseOverviewPage />} />

        {/* Screen 3: Case Workspace — Chronology & Traceability (BC-05.3) */}
        <Route path="/kasus/:caseId/kronologi" element={<CaseChronologyPage />} />

        {/* Screen 4: Case Workspace — Accountability Gaps & Advocacy (BC-05.4) */}
        <Route path="/kasus/:caseId/celah" element={<CaseGapsPage />} />

        {/* Direct case ID access redirects to Overview */}
        <Route path="/kasus/:caseId" element={<Navigate to="ringkasan" replace />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
