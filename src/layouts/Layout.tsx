import   { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
    

interface LayoutProps {
  mobileMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Layout({ mobileMenuOpen, toggleMenu }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
  