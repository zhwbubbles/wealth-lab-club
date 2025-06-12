import  { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import FuturesTrading from './pages/FuturesTrading';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import BitcoinCrypto from './pages/BitcoinCrypto';
import WalletsExchanges from './pages/WalletsExchanges';
import OptionsTradingMasterclass from './pages/OptionsTradingMasterclass';
import OptionsTradingBasics from './pages/OptionsTradingBasics';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />}>
          <Route index element={<Home />} />
          <Route path="/courses/futures-trading" element={<FuturesTrading />} />
          <Route path="/courses/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="/courses/bitcoin-crypto" element={<BitcoinCrypto />} />
          <Route path="/courses/wallets-exchanges" element={<WalletsExchanges />} />
          <Route path="/courses/options-trading-masterclass" element={<OptionsTradingMasterclass />} />
          <Route path="/courses/options-trading-basics" element={<OptionsTradingBasics />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  