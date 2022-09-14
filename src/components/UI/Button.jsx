const Button = ({ text, link }) => {
  return (
    <a className="btn" href={link}>
      <div>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">{text}</span>
      </div>
    </a>
  );
};

export default Button;
