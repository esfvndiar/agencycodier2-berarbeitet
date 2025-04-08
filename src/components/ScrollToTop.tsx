import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={cn(
        'fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg',
        'hover:bg-primary/90 transition-all duration-300',
        'hover:shadow-xl hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'z-50 transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
