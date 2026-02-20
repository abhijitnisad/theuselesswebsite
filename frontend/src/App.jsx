import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Sparkles, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import RandomButton from './components/RandomButton';
import { addUselessWebsite } from './services/api';

function App() {
  const [newSite, setNewSite] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for dynamic background interactions
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!newSite) return;

    try {
      setIsAdding(true);
      setMessage('');
      setIsError(false);
      const res = await addUselessWebsite(newSite);
      if (res.success) {
        setIsError(false);
        setMessage('Website added successfully!');
        setNewSite('');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Failed to add website. Please try again.');
    } finally {
      setIsAdding(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  // Stagger animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Immersive Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Interactive Cursor Light */}
      <motion.div 
        animate={{ 
          x: mousePosition.x - 400, 
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
        className="absolute w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Floating Ambient Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-violet-600 rounded-full mix-blend-screen filter blur-[120px]"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[140px]"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-xl flex flex-col items-center gap-10 mt-10 mb-16"
      >
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="inline-block relative mb-4">
            <h1 className="text-7xl sm:text-8xl font-black tracking-tighter bg-gradient-to-br from-white via-indigo-100 to-indigo-400 text-transparent bg-clip-text drop-shadow-sm pb-2">
              Bored?
            </h1>
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "circOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full blur-[2px]"
            />
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1, ease: "circOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            />
          </div>
          <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-md mx-auto leading-relaxed">
            Click the button to visit a random, funny, and completely useless website.
          </p>
        </motion.div>

        {/* Main Action Component */}
        <motion.div variants={itemVariants} className="w-full flex justify-center mt-4">
          <RandomButton />
        </motion.div>

        {/* Sleek Form Section */}
        <motion.div 
          variants={itemVariants}
          className="w-full mt-10 p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
        >
          <div className="w-full bg-[#0a0a0f]/90 backdrop-blur-xl p-8 rounded-3xl h-full shadow-2xl">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-semibold tracking-wide text-white drop-shadow-sm">Add a new website</h3>
            </div>
            
            <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
              <div className="relative group">
                <input 
                  type="url" 
                  placeholder="https://example.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all text-white placeholder-slate-500 font-medium tracking-wide shadow-inner"
                  value={newSite}
                  onChange={(e) => setNewSite(e.target.value)}
                  required
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: "rgba(79, 70, 229, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isAdding}
                className="w-full relative overflow-hidden bg-white/5 text-white font-semibold py-4 px-4 rounded-2xl transition-colors border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 opacity-0 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {isAdding ? 'Adding...' : (
                    <>Add Link <ChevronRight className="w-4 h-4" /></>
                  )}
                </span>
              </motion.button>
            </form>

            {/* Animated Notification Message */}
            <div className="h-6 mt-5 overflow-hidden">
              <AnimatePresence mode="wait">
                {message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex items-center justify-center gap-2 text-sm font-semibold tracking-wide ${isError ? 'text-rose-400' : 'text-emerald-400'}`}
                  >
                    {isError ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 text-slate-600/60 text-xs z-10 font-bold tracking-[0.2em] uppercase"
      >
        Mern Stack Experiment
      </motion.footer>
    </div>
  );
}

export default App;
