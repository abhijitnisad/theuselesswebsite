import { useState } from 'react';
import RandomButton from './components/RandomButton';
import { addUselessWebsite } from './services/api';

function App() {
  const [newSite, setNewSite] = useState('');
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!newSite) return;

    try {
      setIsAdding(true);
      setMessage('');
      const res = await addUselessWebsite(newSite);
      if (res.success) {
        setMessage('Website added successfully!');
        setNewSite('');
      }
    } catch (error) {
      setMessage('Failed to add website. Please try again.');
    } finally {
      setIsAdding(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="z-10 w-full max-w-lg flex flex-col items-center gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Bored?
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium">
            Let us take you to a random useless corner of the internet.
          </p>
        </div>

        <RandomButton />

        {/* Bonus: Add a website form */}
        <div className="w-full mt-10 p-6 rounded-2xl glass-effect border border-slate-700/50 shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-center text-slate-200">Know a useless website?</h3>
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-3">
            <input 
              type="url" 
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-slate-400"
              value={newSite}
              onChange={(e) => setNewSite(e.target.value)}
              required
            />
            <button 
              type="submit" 
              disabled={isAdding}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg transition-colors border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAdding ? 'Adding...' : 'Add to Database'}
            </button>
          </form>
          {message && (
            <p className={`mt-3 text-center text-sm font-medium ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
      
      <footer className="absolute bottom-6 text-slate-500 text-sm z-10 font-medium">
        Made with ❤️ using the MERN Stack
      </footer>
    </div>
  );
}

export default App;
