import { useState } from 'react';
import ProjectPopup from './ProjectPopup';

const ProjectCard = ({ project }) => {
  const [showPopup, setShowPopup] = useState(false);

  const closeModal = () => {
    setShowPopup(false);
  };

  return (
    <li>
      <div className="magic-wall_item lazyload">
        <img src={project.img} alt="project-img" />
        <div className="hover-conteent"></div>
        <a
          href="#"
          className="colorbox"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(true);
          }}
        ></a>
      </div>
      {showPopup && <ProjectPopup project={project} closeModal={closeModal} />}
    </li>
  );
};

export default ProjectCard;
