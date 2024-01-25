import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Technology } from './pages/Technology';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to='/technology' />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
