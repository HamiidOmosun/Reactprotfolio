import React from 'react'
import projectsData from '../projectsData';
import ProjectCard from './ProjectCard';

export const Portfolio = () => {
  return (
    <div className='bg-[#021526] px-5 md:px-40 '>

      <h1 className='text-white text-4xl font-bold mb-10 md:mb-20'>Passion Projects</h1>

      <div>
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </div>
  );
};

export default Portfolio;
