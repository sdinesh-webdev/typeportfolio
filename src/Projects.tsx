import React from 'react';
import Work from './Work';
import proj_1 from './assets/proj_1.webp';
import proj_2 from './assets/proj_2.webp';
import proj_3 from './assets/proj_3.webp';
import proj_4 from './assets/proj_4.webp';
import proj_5 from './assets/proj_5.webp';
import './index.css';

interface WorkItem {
  link: string;
  name: string;
  image: string;
  imageStyle: string;
  alt: string;
}

const Projects: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Coming soon . . .",
      image: proj_1,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Meta Project"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/YAPAFNUL4QA2",
      name: "Coming soon . . .",
      image: proj_2,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "IBM Project"
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/ZPTNMXAC7FQB",
      name: "Coming soon . . .",
      image: proj_3,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "SEO Project"
    },
    {
      link: "https://example.com",
      name: "Coming soon . . .",
      image: proj_4,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Example Project"
    },   
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/HLJUAPS49XLG",
      name: "Coming soon . . .",
      image: proj_5,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Meta Project"
    },
  ];

  return (
    <section className="projects-section flex flex-col  w-full">
      <h1 className="projects-heading text-start text-6xl mb-4 mt-24 md:mt-20 md:mb-6  md:text-8xl font-medium">Projects</h1>
      <p className='projects-description text-start font-light pb-14 pt-2'>Projects are in development. Their listing will be available soon.</p>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {workItems.map((item, index) => (
          <div
            className={`project-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''} ${index === 1 ? 'md:border-t' : ''}`}
            key={item.name}
          >
            <Work
              {...item}
              nameClass="font-medium text-2xl md:text-4xl ml-4"
              containerClass="w-full h-32 flex items-center" // Added flex and items-center
              imageClass={`ml-4 ${item.imageStyle}`} // Use the imageStyle from workItems
              imageStyle={{}} // Remove inline style
              overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;