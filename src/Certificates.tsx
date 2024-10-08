import React from 'react';
import Work from './Work'; 
import './index.css'; 
import meta from './assets/meta.webp'; 
import ibmImage from './assets/ibm.avif'; 
import certificate_3 from './assets/certificate_3.webp'; 
import certificate_4 from './assets/certificate_4.webp'; 

interface WorkItem {
  link: string;
  name: string;
  image: string;
  imageStyle: string;
  alt: string;
}

const Certificates: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Meta Front-End Developer Professional",
      image: meta,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "Meta Front-End Developer Certificate"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2",
      name: "IBM Back-end JavaScript Developer Professional",
      image: ibmImage,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "IBM Back-end JavaScript Developer Certificate"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB",
      name: "Search Engine Optimization (SEO) Specializations",
      image: certificate_3,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "SEO Certificate"
    },
    {
      link: "https://example.com",
      name: "UI Fullstack With React js By -- Sudhakar Sharma Sir",
      image: certificate_4,
      imageStyle: "w-[90px] h-[60px] sm:w-[105px] sm:h-[75px]",
      alt: "Example Project Certificate"
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">
        Professional Certificates
      </h1>
      {workItems.map((item, index) => (
        <div
          className={`border-b border-black mb-0 ${index === 0 ? 'border-t' : ''}`}
          key={item.name}
        >
          <Work
            {...item}
            nameClass="font-medium text-2xl sm:text-3xl lg:text-5xl ml-2 sm:ml-4 max-sm:text-start pl-2"
            containerClass="w-full h-40 max-sm:h-32 flex items-center"
            imageClass={`ml-2 sm:ml-4 ${item.imageStyle}`}
            imageStyle={{}}
            overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          />
        </div>
      ))}
    </div>
  );
}

export default Certificates;