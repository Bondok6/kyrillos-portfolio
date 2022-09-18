import { Link } from 'react-router-dom';

const Button = ({ text, link, state, cn }) => {
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
  } else if (link === 'submit') {
    return (
      <button
        className="btn btn--submit"
        type="submit"
        disabled={state.submitting}
      >
        <div>
          <span className="bg"></span>
          <span className="base"></span>
          <span className="text">{text}</span>
        </div>
      </button>
    );
  } else {
    return (
      <a className={`btn ${cn}`} href={link} target="_blank" rel="noreferrer">
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
