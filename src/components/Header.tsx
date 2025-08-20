import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WealthLabLogo } from './WealthLabLogo';
import { useState } from 'react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Header({ mobileMenuOpen, toggleMenu }: HeaderProps) {
  const [bannerVisible, setBannerVisible] = useState(true);

  const closeBanner = () => {
    setBannerVisible(false);
  };

  return (
    <>
      <header className="fixed w-full bg-primary-dark/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                  <WealthLabLogo />
                </div>
                <span className="text-xl font-bold text-white">Wealth Lab</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <nav className="flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-gradient-mid transition-colors">Home</Link>
                <div className="relative group">
                  <button className="text-white hover:text-gradient-mid transition-colors flex items-center">
                    Courses
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-primary-light border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                      <Link to="/courses/futures-trading" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Futures Trading Masterclass
                      </Link>
                      <Link to="/courses/technical-analysis" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Technical Analysis 101
                      </Link>
                      <Link to="/courses/options-trading-masterclass" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Options Trading Masterclass
                      </Link>
                      <Link to="/courses/options-trading-basics" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Options Trading 101
                      </Link>
                      {/* <Link to="/courses/bitcoin-crypto" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Bitcoin & Crypto 101
                      </Link>
                      <Link to="/courses/wallets-exchanges" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-primary">
                        Wallets & Exchanges 101
                      </Link> */}
                    </div>
                  </div>
                </div>
                <Link to="/about" className="text-white hover:text-gradient-mid transition-colors">About</Link>
              </nav>
            </div>
            
            <div className="hidden md:block">
              <a 
                href="https://whop.com/futures-trading-wl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Get Started
              </a>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-dark">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Home</Link>
            <Link to="/futures-trading" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Futures Trading Masterclass</Link>
            <Link to="/technical-analysis" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Technical Analysis 101</Link>
            <Link to="/options-trading-masterclass" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Options Trading Masterclass</Link>
            <Link to="/options-trading-basics" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Options Trading 101</Link>
            <Link to="/bitcoin-crypto" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Bitcoin & Crypto 101</Link>
            <Link to="/wallets-exchanges" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Wallets & Exchanges 101</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">About</Link>
            <div className="pt-4">
              <a 
                href="https://whop.com/futures-trading-wl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full btn btn-primary text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      {/* {bannerVisible && (
        <div className="fixed w-full top-16 bg-gradient-to-r from-blue-500 to-green-400 z-40 py-3">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <p className="text-white font-semibold text-sm md:text-base">
                  🎉 Get 85% off on our courses! 
                  <span className="ml-2 text-white/90">Offer valid till 6th August</span>
                </p>
              </div>
              <button
                onClick={closeBanner}
                className="text-white hover:text-white/70 p-1 ml-4 flex-shrink-0"
                aria-label="Close banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}