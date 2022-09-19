import projects from '../utils/projects';
import ProjectCard from '../components/Work/ProjectCard';

const Work = () => (
  <section id="home-magicwall" className="fake-magicwall">
    <ul>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </ul>
  </section>
);

export default Work;
