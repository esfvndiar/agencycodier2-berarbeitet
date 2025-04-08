import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const TYPING_VARIATIONS = [
  'Digital Excellence',
  'Creative Innovation',
  'Brand Transformation',
  'Web Development',
  'UI/UX Design'
];

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const text = TYPING_VARIATIONS[0];
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <motion.section
      id="hero"
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden",
        "bg-gradient-to-b from-zinc-50 to-white"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We Create
            <span className="block text-primary relative">
              {displayedText}
              <span className="inline-block w-0.5 h-8 bg-primary animate-pulse ml-1" aria-hidden="true" />
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-zinc-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transforming ideas into exceptional digital experiences through innovative design and cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 overflow-hidden"
              role="button"
              aria-label="Get Started"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowRight className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#services"
              className="group px-8 py-4 text-zinc-900 hover:text-primary transition-colors duration-300 flex items-center gap-2"
              role="button"
              aria-label="Explore Our Services"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
