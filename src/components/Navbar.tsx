
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Acasă', path: '/' },
    { name: 'Soluții', path: '/solutii' },
    { name: 'Despre', path: '/despre' },
    { name: 'Planuri', path: '/planuri' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <OptimizedImage 
              src="/gabio-uploads/6e0b0371-1768-486a-b523-9672b0996fd8.png" 
              alt="Refluxe"
              className="h-8 w-auto"
              width={120}
              height={32}
              priority={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${
                  isActive(item.path)
                    ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/demonstratie">
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Demonstrație
              </Button>
            </Link>
            <Button 
              className="bg-gradient-refluxe hover:opacity-90 text-white"
              onClick={() => window.open('https://app.refluxe.io/', '_blank')}
            >
              Intră <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'text-brand-purple bg-purple-50'
                      : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 space-y-2">
                <Link to="/demonstratie" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                  >
                    Demonstrație
                  </Button>
                </Link>
                <Button 
                  className="w-full bg-gradient-refluxe hover:opacity-90 text-white"
                  onClick={() => window.open('#', '_blank')}
                >
                  Intră <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
