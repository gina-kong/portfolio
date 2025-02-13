import './App.css'
import Dock from './features/dock/Dock'
import Notepad from './features/notepad/Notepad'
import Explorer from './features/explorer/Explorer'
import { useEffect, useState } from 'react';
import Loader from './features/Loader';
import { VisibilityProvider } from './context/VisibilityContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // setTimeout(() => {
      setIsLoading(false);
    // }, 3000);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
        <VisibilityProvider>
          <Notepad />
          <Dock />
          <Explorer />
        </VisibilityProvider>
      )}
    </>
  )
}

export default App
