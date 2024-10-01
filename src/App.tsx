import { useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './Layout';
import './App.css';

function App() {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full max-sm:h-[2400px]" >
   
      <Layout />
    </div>
  );
}

export default App;