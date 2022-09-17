const Card = ({ project }) => {
  return (
    <li>
      <div className="magic-wall_item lazyload">
        <img src={project.img} alt="project-img" />
        <div className="hover-conteent"></div>
        <a
          href={project.live}
          className="colorbox"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </li>
  );
};

export default Card;
