import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p>
            Folosim cookie-uri pentru a îmbunătăți experiența ta pe site și pentru a analiza traficul. 
            Continuând să navighezi, accepți utilizarea cookie-urilor conform{' '}
            <a href="/termeni-utilizare" className="text-blue-600 hover:text-blue-800 underline">
              Termenilor de Utilizare
            </a>.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="text-gray-600 border-gray-300 hover:bg-gray-50"
          >
            Refuz
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Accept
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReject}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;