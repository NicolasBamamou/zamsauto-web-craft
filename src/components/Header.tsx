import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Rendez-vous', href: '/booking' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border)/0.4)] bg-[hsl(var(--background)/0.65)] backdrop-blur-md supports-[backdrop-filter]:bg-[hsl(var(--background)/0.55)] shadow-[0_4px_12px_-2px_hsl(var(--background)_/_0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-xl">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-poppins font-bold text-foreground">ZAMSA</span>
              <p className="text-xs text-muted-foreground">Zaly Multi-Services Auto</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary after:w-full'
                    : 'text-[hsl(var(--text-secondary))] hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="btn-nav-cta">
              <Link to="/booking">Prendre RDV</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--border)/0.4)] animate-fade-in-up bg-[hsl(var(--background)/0.9)] backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-[hsl(var(--text-secondary))] hover:text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="btn-nav-cta w-fit">
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  Prendre RDV
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;