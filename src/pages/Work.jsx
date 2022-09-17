import projects from '../utils/projects';
import Card from './../components/Work/Card';

const Work = () => {
  return (
    <section id="home-magicwall" className="fake-magicwall">
      <ul>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Work;
