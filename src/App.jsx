import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import SpinnerFull from './components/ui/SpinnerFull';
import theme from './theme/theme';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFull />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
