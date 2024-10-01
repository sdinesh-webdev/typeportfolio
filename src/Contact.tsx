import React from 'react';
import Work from './Work'; // Assuming Work component is exported with its props type
import './index.css';

interface WorkItem {
  link: string;
  name: string;
  image?: string; // Add image property
  imageStyle?: string; // Add imageStyle property
  // Remove alt property
}

const Contact: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      link: "mailto:sdineshk7899@gmail.com",
      name: "Email: sdineshk7899@gmail.com",
    },
    {
      link: "https://www.linkedin.com/in/sdineshku",
      name: "LinkedIn",
    },
    {
      link: "https://github.com/sdineshku",
      name: "GitHub",
    },
    {
      link: "/path/to/resume.pdf",
      name: "Download Resume",
    },
  ];

  return (
    <section className="contact-section flex h-28  flex-col w-full">
      <h1 className="contact-heading text-start mt-24 pb-6 mb-4 text-6xl md:mt-20 md:mb-6 md:text-8xl font-medium">Contact</h1>
      {workItems.map((item, index) => (
        <div
          className={`contact-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''}`}
          key={index}
        >
          <Work
            link={item.link}
            name={item.name}
            nameClass="font-normal text-2xl"
            containerClass="w-full h-24"
            imageClass="ml-4" // Pass imageClass prop
            overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
          />
        </div>
      ))}
      <h2 className="thank-you-message py-20 text-start text-2xl">👋 Thank you.</h2>
    </section>
  );
};

export default Contact;