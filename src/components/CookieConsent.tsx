import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 text-xs text-gray-600">
          <p>
            Folosim cookie-uri pentru experiență optimă.{' '}
            <Link to="/termeni-utilizare" className="text-blue-600 hover:text-blue-800 underline">
              Detalii aici
            </Link>.
          </p>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReject}
          className="p-1 text-gray-400 hover:text-gray-600 h-auto min-w-0"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="flex items-center gap-2 mt-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleReject}
          className="text-xs px-3 py-1 h-7 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          Refuz
        </Button>
        <Button
          size="sm"
          onClick={handleAccept}
          className="text-xs px-3 py-1 h-7 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;