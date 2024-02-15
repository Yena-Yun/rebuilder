import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Technology } from './pages/Technology';
import { ScrollToTop } from './components/helpers/ScrollToTop/ScrollToTop';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

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
