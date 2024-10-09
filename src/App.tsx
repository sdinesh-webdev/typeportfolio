import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './Layout';
import { Loading } from './Loading';
import Popup from './Popup'; // Import the Popup component
import './App.css';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true); // Show popup after loading
    }, 1000); // Adjust the timeout as needed

    inject(); // Inject Vercel Analytics

    return () => {
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
      {showPopup && <Popup onClose={() => setShowPopup(false)} />} {/* Render popup if showPopup is true */}
    </div>
  );
}

export default App;