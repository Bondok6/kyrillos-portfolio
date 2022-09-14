import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  if (link === '/conatct') {
    return (
      <Link to="/contact" className="btn">
        <div>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">{text}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        <div>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">{text}</span>
        </div>
      </a>
    );
  }
};

export default Button;
