import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Loader2 } from 'lucide-react';
import { getRandomWebsite } from '../services/api';

const RandomButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Artificial delay just so the user can enjoy the sweet interaction animation briefly
      await new Promise(resolve => setTimeout(resolve, 600)); 
      
      const data = await getRandomWebsite();
      
      if (data && data.url) {
        // Smoothly fade out the page before redirecting
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = data.url;
        }, 500);
      } else {
        throw new Error('No URL returned from server');
      }
    } catch (err) {
      console.error('Error fetching random website:', err);
      setError('Connection severed. Try again.');
      setIsLoading(false);
      document.body.style.opacity = '1';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center gap-6 w-full"
    >
      <div className="relative group w-full max-w-xs cursor-pointer">
        {/* Dynamic Glow Behind Button */}
        <motion.div 
          animate={{ 
            boxShadow: isLoading 
              ? '0 0 80px -10px rgba(99, 102, 241, 0.8)' 
              : '0 0 40px -10px rgba(99, 102, 241, 0.4)' 
          }}
          className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"
        ></motion.div>
        
        {/* Main interactive button */}
        <motion.button
          onClick={handleClick}
          disabled={isLoading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full px-8 py-5 font-bold text-xl rounded-full bg-slate-950 text-white overflow-hidden flex items-center justify-center gap-3 border border-indigo-500/30 disabled:opacity-90 disabled:cursor-not-allowed z-10"
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
          
          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex items-center gap-3"
            >
              <Loader2 className="w-6 h-6 animate-spin text-fuchsia-400" />
              <span className="tracking-wide bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-transparent bg-clip-text">Teleporting...</span>
            </motion.div>
          ) : (
             <>
               <Compass className="w-6 h-6 text-indigo-400 group-hover:rotate-45 transition-transform duration-500" />
               <span className="tracking-widest">BE AMAZED</span>
             </>
          )}
        </motion.button>
      </div>
      
      {/* Error state */}
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-rose-400 font-medium text-sm tracking-wide px-5 py-2.5 bg-rose-500/10 rounded-full border border-rose-500/20 shadow-lg"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default RandomButton;
