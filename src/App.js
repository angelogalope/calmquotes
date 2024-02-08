import './App.css';

function App() {
  return (
    <div className="App flex flex-col items-center gap-32 p-10 w-full h-screen bg-gradient-to-tr from-primColor to-secColor">
      <div className="flex flex-col items-center">
        <h1 className='satisfy-regular text-white text-5xl'>
          calmquotes"
        </h1>
        <p className='text-white text-sm'>
          -Find Peace in every Phrase-
        </p>
      </div>
      <div className='courgette-regular text-white flex flex-col items-center text-center w-auto px-10'>
        <h1 className='text-6xl'>"</h1>
        <p className='text-4xl'>
          There is nothing on this earth more to be prized than true friendship.
        </p>
        <p className='text-2xl'>-Thomas Aquinas-</p>
      </div>
      <div className='fixed bottom-6'>
        <h1>Made with ❤️ by Angelo Galope</h1>
      </div>
    </div>
  );
}

export default App;
