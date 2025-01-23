import React from 'react';
import Work from './Work';
import proj_1 from './assets/proj_1.webp';
import proj_2 from './assets/proj_2.webp';
import proj_3 from './assets/proj_3.webp';
import proj_4 from './assets/proj_4.webp';
import proj_5 from './assets/proj_5.webp';
import Proj1 from './Projects/Proj1';
import Proj2 from './Projects/Proj2';
import Proj3 from './Projects/Proj3';
import Proj4 from './Projects/Proj4';
import Proj5 from './Projects/Proj5';
import './index.css';
import useGsapReveal from './useGsapReveal';

interface WorkItem {
  id: string;
  link: string;
  name: string;
  image: string;
  imageStyle: string;
  alt: string;
  component: React.FC;
}

const Projects: React.FC = () => {
  const projectsRef = useGsapReveal(3.0); // Delay after Certificates

  const workItems: WorkItem[] = [
    {
      id: 'proj1',
      link: "/Projects/Proj1",
      name: "Coming soon . . .",
      image: proj_1,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Project 1",
      component: Proj1
    },
    {
      id: 'proj2',
      link: "/Projects/Proj2",
      name: "Coming soon . . .",
      image: proj_2,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Project 2",
      component: Proj2
    },
    {
      id: 'proj3',
      link: "/Projects/Proj3",
      name: "Coming soon . . .",
      image: proj_3,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Project 3",
      component: Proj3
    },
    {
      id: 'proj4',
      link: "/Projects/Proj4",
      name: "Coming soon . . .",
      image: proj_4,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Project 4",
      component: Proj4
    },   
    {
      id: 'proj5',
      link: "/Projects/Proj5",
      name: "Coming soon . . .",
      image: proj_5,
      imageStyle: "w-32 h-24", // Changed to Tailwind classes
      alt: "Project 5",
      component: Proj5
    },
  ];

  return (
    <section className="projects-section flex flex-col w-full opacity-0" ref={projectsRef}>
      <h1 className="projects-heading text-start text-6xl mb-4 mt-24 md:mt-20 md:mb-6  md:text-8xl font-medium">Projects</h1>
      <p className='projects-description text-start font-light pb-14 pt-2'>Projects are in development. Their listing will be available soon.</p>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {workItems.map((item, index) => (
          <div
            className={`project-item border-b border-black mb-0 ${index === 0 ? 'border-t' : ''} ${index === 1 ? 'md:border-t' : ''}`}
            key={item.name}
          >
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
            <Work
              {...item}
              nameClass="font-medium text-2xl md:text-4xl ml-4"
              containerClass="w-full h-32 flex items-center" // Added flex and items-center
              imageClass={`ml-4 ${item.imageStyle}`} // Use the imageStyle from workItems
              imageStyle={{}} // Remove inline style
              overlayClass="absolute top-0 left-0 w-full h-full bg-black -z-10 transform scale-y-0 origin-top"
            />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;