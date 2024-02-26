import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Technology from 'pages/Technology';
import { ScrollToTop } from 'hooks/ScrollToTop';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import theme from 'styles/theme';
import 'locales/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Navigate replace to='/technology' />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
