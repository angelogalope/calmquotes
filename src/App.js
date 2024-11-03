import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';
import 'animate.css';
import './App.css';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const getQuote = async () => {
    try {
      setQuote(null);
      setButtonClicked(true);
  
      const response = await fetch('https://api.quotable.io/random');
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const result = await response.json();
      setQuote(result);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("Error fetching data");
    }
  };
  

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="quote-container flex flex-col items-center justify-between p-10 w-full h-screen bg-gradient-to-tr from-primColor to-secColor">
          <div className="flex flex-col items-center">
            <h1 className='satisfy-regular text-white text-2xl md:text-5xl'>
              calmquotes"
            </h1>
            <p className='text-white text-[8px] md:text-sm'>
              -Find <span className='font-bold text-white'>Peace</span> in every <span className='font-bold text-white'>Phrase</span>-
            </p>
          </div>
          <div className='text-white flex flex-col items-center text-center w-auto px-10'>
            {quote ? (
              <div className='quote-container animate__animated animate__fadeIn'>
                {/* <h1 className='courgette-regular text-3xl md:text-6xl'>"</h1> */}
                <p className='courgette-regular text-xl md:text-4xl'>
                  "{quote.content}"
                </p>
                <p className='courgette-regular text-md md:text-2xl'>-{quote.author}-</p>
              </div>
            ) : (
              <div className='' style={{ visibility: buttonClicked ? "hidden" : "visible" }}>
                <p className='courgette-regular text-xl md:text-4xl'>
                  -Click the button for a quote-
                </p>
              </div>
            )}
            <button type='submit' onClick={getQuote} className='flex items-center justify-center mt-10 px-4 py-1 rounded-md md:rounded-lg bg-white text-secColor font-semibold hover:bg-gray-200 duration-500'>
              Show a quote
            </button>
          </div>
          <div className=''>
            <h1 className='text-gray-200 text-[8px] md:text-sm'>Made with ❤️ by Angelo Galope</h1>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App;
