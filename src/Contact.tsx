import React, { CSSProperties } from 'react';
import Work from './Work'; // Assuming Work component is exported with its props type
import './index.css';
import useGsapReveal from './useGsapReveal';
import arrow from '../Public/arrow.svg';

interface WorkItem {
  link: string;
  name: string;
  image: string; // Change this to be required
  imageStyle?: CSSProperties;
  alt: string; // Make alt required as well
}

const Contact: React.FC = () => {
  const contactRef = useGsapReveal(3.3); // Delay after Projects

  const workItems: WorkItem[] = [
    {
      link: "mailto:sdineshk7899@gmail.com",
      name: "Email: sdineshk7899@gmail.com",
      alt: "Email",
      image: "", // Add an empty string or a default image URL
    },
    {
      link: "https://www.linkedin.com/in/sdineshku",
      name: "LinkedIn",
      alt: "LinkedIn Profile",
      image: "", // Add an empty string or a default image URL
    },
    {
      link: "https://github.com/sdineshku",
      name: "GitHub",
      alt: "GitHub Profile",
      image: "", // Add an empty string or a default image URL
    },
    {
      link: "/path/to/resume.pdf",
      name: "Download Resume",
      alt: "Resume",
      image: "", // Add an empty string or a default image URL
    },
  ];

  return (
    <section className="contact-section flex h-28 flex-col w-full opacity-0" ref={contactRef}>
      <h1 className="contact-heading text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">Contact</h1>
      {workItems.map((item, index) => (
        <div
          className={`contact-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''} relative`}
          key={index}
        >
          <Work
            {...item}
            nameClass="font-normal text-2xl"
            containerClass="w-full h-24"
            imageClass="ml-4"
            overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          />
          <img 
            src={arrow} 
            alt="arrow" 
            className="absolute right-4 top-1/2 mr-6 w-10 h-10 font-bold arrow-icon"
          />
        </div>
      ))}
      <h2 className="thank-you-message py-20 text-start text-3xl ">👋 Thank you.</h2>
    </section>
  );
};

export default Contact;