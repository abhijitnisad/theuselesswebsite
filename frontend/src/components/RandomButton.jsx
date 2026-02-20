import { useState } from 'react';
import { getRandomWebsite } from '../services/api';

const RandomButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getRandomWebsite();
      
      if (data && data.url) {
        // Redirect the user
        window.location.href = data.url;
      } else {
        throw new Error('No URL returned from server');
      }
    } catch (err) {
      console.error('Error fetching random website:', err);
      setError('Failed to find a useless website. The internet must be serious today.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="group relative px-8 py-5 font-bold text-xl rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_-15px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed overflow-hidden w-full max-w-xs"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Teleporting...
            </>
          ) : (
             'TAKE ME ANYWHERE'
          )}
        </span>
      </button>
      
      {error && (
        <p className="text-red-400 font-medium text-center px-4 py-2 bg-red-400/10 rounded-lg border border-red-400/20">
          {error}
        </p>
      )}
    </div>
  );
};

export default RandomButton;
