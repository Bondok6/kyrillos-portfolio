import Backdrop from './Backdrop';
import projects from '../../utils/projects';
import Button from './../UI/Button';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__header">
        <img src={projects[1].img} alt="project-img" />
        <button type="button" className="modal__exit">
          &times;
        </button>
      </div>
      <div className="modal__middle">
        <h2 className="modal__middle-title">{projects[1].title}</h2>
        <div className="modal__middle-links">
          <Button text="visit site" link={projects[1].live} cn="btn--small" />
          <Button text="view code" link={projects[1].github} cn="btn--small" />
        </div>
      </div>
      <div className="modal__tech">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="modal__footer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptatibus architecto quidem et inventore quas minima sint in
          mollitia dolor!
        </p>
      </div>
    </div>
  );
};

export default Modal;
