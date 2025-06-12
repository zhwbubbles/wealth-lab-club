import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import App from './App.tsx';
import Layout from './layouts/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import FuturesTrading from './pages/FuturesTrading.tsx';
import TechnicalAnalysis from './pages/TechnicalAnalysis.tsx';
import OptionsTradingMasterclass from './pages/OptionsTradingMasterclass.tsx';
import OptionsTradingBasics from './pages/OptionsTradingBasics.tsx';
import BitcoinCrypto from './pages/BitcoinCrypto.tsx';
import WalletsExchanges from './pages/WalletsExchanges.tsx';
import NotFound from './pages/NotFound.tsx';
import './index.css';

function AppWithRoutes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/courses/futures-trading" element={<FuturesTrading />} />
          <Route path="/courses/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="/courses/options-trading-masterclass" element={<OptionsTradingMasterclass />} />
          <Route path="/courses/options-trading-basics" element={<OptionsTradingBasics />} />
          <Route path="bitcoin-crypto" element={<BitcoinCrypto />} />
          <Route path="wallets-exchanges" element={<WalletsExchanges />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <AppWithRoutes />
  </StrictMode>
);
 