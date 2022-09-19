import SkillsAnimation from './../utils/skills-animation';

const About = () => {
  SkillsAnimation();

  return (
    <section className="about">
      <div className="about__info">
        <h2>My, Myself & I</h2>
        <p>
          I'm Front-end Developer on a mission to work as a full-stack developer
          in a big company one day. Passionate about web development and I love
          to learn new things. <br /> Pair-programming and remote work
          aficionado. Fluent in multiple programming languages, frameworks and
          technologies. when I’m not nerding out coding, you can find me
          watching movies or playing chess
        </p>
      </div>
      <div className="about__skills">
        <div id="tag"></div>
      </div>
    </section>
  );
};

export default About;
