import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CalculatorPage } from './pages/CalculatorPage';
import { HistoryPage } from './pages/HistoryPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/qa-training/" replace />} />
          <Route path="/qa-training/" element={<CalculatorPage />} />
          <Route path="/qa-training/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
