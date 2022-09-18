import ReactDOM from 'react-dom';
import Backdrop from '../Modal/Backdrop';
import Modal from '../Modal/Modal';

const ProjectPopup = ({ project, closeModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <Modal project={project} closeModal={closeModal} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ProjectPopup;
