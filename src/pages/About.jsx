import SkillsAnimation from './../utils/skills-animation';

const About = () => {
  SkillsAnimation();

  return (
    <section className="about">
      <div className="about__info">
        <h2>My, Myself & I</h2>
        <p>
          I'm a Frontend Developer at Helpjuice and an open-source enthusiast
          with a love for clean code and accessible design. <br />
          Pair-programming and remote work aficionado. Fluent in multiple
          languages, frameworks, and technologies, and capable of ramping up
          quickly and efficiently. When I’m not nerding out coding, you can
          find me watching movies or playing chess
        </p>
      </div>
      <div className="about__skills">
        <div id="tag"></div>
      </div>
    </section>
  );
};

export default About;
