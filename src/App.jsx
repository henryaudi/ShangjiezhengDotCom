import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import SpinnerFull from './components/SpinnerFull';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFull />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Test

export default App;
