import { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null)
  const categories = [
    "age", "alone", "anger", "attitude", "beauty", "courage", 
    "friendship", "education", "failure", "family", "fear",
    "forgiveness", "future", "happiness", "jealousy", "morning", "success"
];

const randomIndex = Math.floor(Math.random() * categories.length);
const randomCategory = categories[randomIndex];

  const getQuote = async () => {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + randomCategory, {
            headers: {
                'X-Api-Key': 'wvuJDEi3dEI1saJgCzMcjQ==zswnxcksGTi7ELsN'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setQuote(result[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error fetching data");
    }
  };

  return (
    <div className="App flex flex-col items-center gap-24 p-10 w-full h-screen bg-gradient-to-tr from-primColor to-secColor">
      <div className="flex flex-col items-center">
        <h1 className='satisfy-regular text-white text-5xl'>
          calmquotes"
        </h1>
        <p className='text-white text-sm'>
          -Find Peace in every Phrase-
        </p>
      </div>
      <div className='text-white flex flex-col items-center text-center w-auto px-10'>
        <h1 className='courgette-regular text-6xl'>"</h1>
        {quote && (
          <div>
            <p className='courgette-regular text-4xl'>
              {quote.quote}
            </p>
            <p className='courgette-regular text-2xl'>-{quote.author}-</p>
          </div>
        )}
        <button type='submit' onClick={getQuote} className='flex items-center justify-center mt-10 px-4 py-1 rounded-lg bg-white text-secColor font-semibold hover:bg-gray-200 duration-500'>
          Show a quote
        </button>
      </div>
      <div className='fixed bottom-6'>
        <h1 className='text-gray-200'>Made with ❤️ by Angelo Galope</h1>
      </div>
    </div>
  );
}

export default App;
