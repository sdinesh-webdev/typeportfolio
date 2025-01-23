import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './Layout';
import { Loading } from './Loading';
import Popup from './Popup';
import './App.css';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered');
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      console.log('Loading complete');
      setIsLoading(false);
      setShowPopup(true);
    }, 1000);

    inject();

    return () => {
      console.log('Cleaning up');
      lenis.destroy();
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-sm:h-[2700px]">
      <Layout />
      <SpeedInsights />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;