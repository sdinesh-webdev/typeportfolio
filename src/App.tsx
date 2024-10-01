import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './Layout';
import { Loading } from './Loading'; 
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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
    }, 1000); // Adjust the timeout as needed

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
    </div>
  );
}

export default App;