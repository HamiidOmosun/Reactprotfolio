import React from 'react'
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpand, setIsExpand] = useState(false);

  const toggleReadMover = () => {
    setIsExpand((prev) => !prev);
  };

  const shortText = project.description.slice(0, 80);

  return (
    <div>
      <img src={project.image} alt={project.title} />

      <h3 className='text-white font-bold my-3 md:text-2xl'>{project.title}</h3>

      <p className='text-white md:text-xl'>
        {isExpand ? project.description : `${shortText}...`}
      </p>

      <button className='text-white md:text-xl cursor-pointer' onClick={toggleReadMover}>
        {isExpand ? "Reed less" : "Read More"}
      </button>

      {/* <div className='text-white'>
        <p>technology Used:</p>
        {project.tech.map((techItem, index) => (
          <p key={index}>{techItem}</p>
        ))}
      </div> */}

      <div className='text-white flex flex-row gap-3 mt-3 md:pb-14 pb-7 md:text-xl'>
        <a href={project.liveLink} target='_blank' rel='noreferrer'>Live</a>

        <a href={project.githubLink} target='_blank' rel='noreferrer'>Github</a>
      </div>
    </div>
  )
}

export default ProjectCard