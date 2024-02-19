import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Technology } from './pages/Technology';
import { ScrollToTop } from './components/helpers/ScrollToTop';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './locales/i18n';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to='/technology' />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
