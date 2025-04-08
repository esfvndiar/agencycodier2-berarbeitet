import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight, Shield, Sparkles, Clock } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const text = "Building Digital Excellence";
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
        "bg-gradient-to-b from-zinc-50 via-white to-zinc-50"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container px-4 mx-auto relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {displayedText}
            <span className="animate-blink text-primary">|</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We create beautiful and functional digital experiences that help businesses thrive in the modern world.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-zinc-800 rounded-full hover:bg-zinc-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Company Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-zinc-100">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-sm text-zinc-600 text-center">Full refund guarantee if you're not completely satisfied</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-zinc-100">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm text-zinc-600 text-center">Tailored digital solutions designed for your unique needs</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-zinc-100">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-sm text-zinc-600 text-center">On-time delivery with precise attention to detail</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
