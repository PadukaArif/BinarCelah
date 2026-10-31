import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

function RootView() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center max-w-md">
        <ShieldCheck className="w-10 h-10 text-slate-700 mx-auto mb-3" />
        <h1 className="text-xl font-semibold text-slate-900">BinarCelah</h1>
        <p className="text-sm text-slate-600 mt-2">
          Frontend foundation initialized.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootView />} />
      </Routes>
    </BrowserRouter>
  )
}

