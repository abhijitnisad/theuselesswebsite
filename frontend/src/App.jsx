import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, CheckCircle, XCircle } from 'lucide-react';
import RandomButton from './components/RandomButton';
import { addUselessWebsite } from './services/api';

function App() {
  const [newSite, setNewSite] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

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
        setMessage('Website added to the void!');
        setNewSite('');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Failed to add. The internet rejects it.');
    } finally {
      setIsAdding(false);
      setTimeout(() => setMessage(''), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-white z-0 pointer-events-none"></div>

      {/* Glowing Ambient Lights - using framer motion to slowly breathe */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[150px]"
      />

      <div className="z-10 w-full max-w-xl flex flex-col items-center gap-14 mt-10 mb-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <div className="inline-block relative">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-500 text-transparent bg-clip-text drop-shadow-sm">
              Lost?
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 origin-left rounded-full"
            />
          </div>
          <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-md mx-auto leading-relaxed">
            Escape the algorithm. Teleport to a completely useless corner of the internet.
          </p>
        </motion.div>

        {/* Main Action Component */}
        <RandomButton />

        {/* Subtle Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full mt-8 p-8 rounded-3xl glass-effect"
        >
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Plus className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-semibold tracking-wide text-slate-200">Contribute to the void</h3>
          </div>
          
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input 
                type="url" 
                placeholder="https://your-useless-discovery.com"
                className="w-full pl-5 pr-4 py-4 bg-black/40 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-white placeholder-slate-500 font-medium"
                value={newSite}
                onChange={(e) => setNewSite(e.target.value)}
                required
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isAdding}
              className="w-full relative overflow-hidden group bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors border border-slate-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="relative z-10">{isAdding ? 'Transmitting...' : 'Add Link'}</span>
              {!isAdding && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              )}
            </motion.button>
          </form>

          {/* Animated Notification Message */}
          <div className="h-8 mt-4">
            <AnimatePresence>
              {message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`flex items-center justify-center gap-2 text-sm font-semibold ${isError ? 'text-rose-400' : 'text-emerald-400'}`}
                >
                  {isError ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 text-slate-600 text-sm z-10 font-medium tracking-wider"
      >
        MERN STACK EXPERIMENT
      </motion.footer>
    </div>
  );
}

export default App;
