import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Compass, Loader2 } from 'lucide-react';
import { getRandomWebsite } from '../services/api';

const RandomButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const controls = useAnimation();

  const handleClick = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Dramatic pulse animation on the button glow 
      controls.start({
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
        transition: { duration: 0.6, repeat: Infinity }
      });
      
      await new Promise(resolve => setTimeout(resolve, 800)); 
      
      const data = await getRandomWebsite();
      
      if (data && data.url) {
        document.body.style.transition = 'all 0.6s cubic-bezier(0.87, 0, 0.13, 1)';
        document.body.style.filter = 'blur(10px) brightness(0)';
        document.body.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
          window.location.href = data.url;
        }, 500);
      } else {
        throw new Error('No URL returned from server');
      }
    } catch (err) {
      console.error('Error fetching random website:', err);
      setError('Connection failed. Please try again.');
      setIsLoading(false);
      controls.stop();
      controls.set({ scale: 1, opacity: 0.8 });
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full relative z-20">
      <div className="relative group w-full max-w-sm cursor-pointer mx-auto">
        
        {/* Core Glowing Orb Behind Button */}
        <motion.div 
          animate={controls}
          initial={{ opacity: 0.8, scale: 1 }}
          className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 group-hover:duration-200 transition duration-1000"
        ></motion.div>
        
        {/* Main interactive button */}
        <motion.button
          onClick={handleClick}
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full px-8 py-6 font-bold text-xl rounded-[2rem] bg-[#08080c] text-white overflow-hidden flex items-center justify-center gap-4 border border-white/10 disabled:opacity-90 disabled:cursor-not-allowed shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          {/* Subtle moving shimmer inside the button */}
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
          
          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex items-center gap-3"
            >
              <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
              <span className="tracking-widest uppercase font-black bg-gradient-to-r from-indigo-200 to-white text-transparent bg-clip-text">Loading</span>
            </motion.div>
          ) : (
             <motion.div className="flex items-center gap-3">
               <Compass className="w-6 h-6 text-indigo-400 group-hover:rotate-90 group-hover:text-fuchsia-400 transition-all duration-700 ease-out" />
               <span className="tracking-widest uppercase font-black text-white/90 group-hover:text-white transition-colors drop-shadow-sm">SHOW ME A WEBSITE</span>
             </motion.div>
          )}
        </motion.button>
      </div>
      
      {/* Error state */}
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-rose-400 font-medium text-sm tracking-wide px-5 py-2.5 bg-rose-500/10 rounded-full border border-rose-500/20 shadow-lg"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RandomButton;
