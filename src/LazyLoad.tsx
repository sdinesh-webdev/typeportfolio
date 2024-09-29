import React, { useState, useEffect, useRef } from 'react';

const LazyLoad = (Component: React.FC<any>) => {
  return (props: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div ref={ref}>
        {isVisible ? <Component {...props} /> : <div>Loading...</div>}
      </div>
    );
  };
};

export default LazyLoad;
