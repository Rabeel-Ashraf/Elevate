import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load Spline with better error handling
const SplineComponent = React.lazy(async () => {
  try {
    const module = await import('@splinetool/react-spline');
    return module;
  } catch (error) {
    console.warn('Spline failed to load:', error);
    // Return a fallback component if Spline fails to load
    return {
      default: () => (
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-10">EXZ</div>
        </div>
      )
    };
  }
});

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const handleSplineError = () => {
    setSplineError(true);
    console.warn('Spline scene failed to load');
  };

  const FallbackBackground = () => (
    <div className="absolute inset-0 w-full h-full">
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-6xl md:text-8xl font-bold opacity-10">EXZ</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" id="hero">
      {/* 3D Background for Desktop */}
      {!isMobile && !splineError ? (
        <Suspense fallback={<FallbackBackground />}>
          <div className="absolute inset-0 w-full h-full">
            <SplineComponent
              scene="https://prod.spline.design/dREATcCnKXSz1NiM/scene.splinecode"
              onLoad={handleSplineLoad}
              onError={handleSplineError}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Suspense>
      ) : (
        <FallbackBackground />
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 text-white px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ElevateX By Zaid (ExZ)
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Learn. Grow. Elevate. – Paid & Free Courses for Everyone
          </motion.p>
          
          <motion.p 
            className="text-md md:text-lg mb-10 text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Master Shopify, Amazon Dropshipping, Cybersecurity, and Business Growth with expert guidance
          </motion.p>
          
          <motion.button
            onClick={scrollToCourses}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
