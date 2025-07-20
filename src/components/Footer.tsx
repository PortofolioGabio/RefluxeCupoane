
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/gabio-uploads/logof.png"
                alt="Refluxe logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Platforma modernă de cupoane digitale de fidelitate pentru afaceri și consumatori.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigare</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Acasă</Link></li>
              <li><Link to="/solutii" className="text-gray-400 hover:text-white transition-colors">Soluții</Link></li>
              <li><Link to="/despre" className="text-gray-400 hover:text-white transition-colors">Despre</Link></li>
              <li><Link to="/planuri" className="text-gray-400 hover:text-white transition-colors">Planuri</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400 text-sm">contact@refluxe.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400 text-sm">+40 758 878 364</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-400 text-sm">Iași, România</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Refluxe. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
