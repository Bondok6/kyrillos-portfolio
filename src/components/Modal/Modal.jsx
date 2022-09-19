import Button from './../UI/Button';

const Modal = ({ project, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <img src={project.img[0]} alt="project-img" />
        <button type="button" className="modal__exit" onClick={closeModal}>
          &times;
        </button>
      </div>
      <div className="modal__middle">
        <h2 className="modal__middle-title">{project.title}</h2>
        <div className="modal__middle-links">
          <Button text="visit site" link={project.live} cn="btn--small" />
          <Button text="view code" link={project.github} cn="btn--small" />
        </div>
      </div>
      <div className="modal__tech">
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="modal__footer">
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;
