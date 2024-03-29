import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Technology from 'pages/Technology';
import NotFound from 'pages/NotFound';
import { ScrollToTop } from 'utils/ScrollToTop';
import theme from 'styles/theme';
import 'locales/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navigate replace to='/technology' />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
