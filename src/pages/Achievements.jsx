import achievements from '../utils/achievements';

const Achievements = () => (
  <section className="achievements">
    <h2>Achievements</h2>

    <ul className="achievements__list">
      {achievements.map((achievement) => (
        <li className="achievements__card" key={achievement.title}>
          <div className="achievements__card-img">
            <img src={achievement.img} alt={achievement.title} />
          </div>
          <div className="achievements__card-body">
            <span className="achievements__card-date">{achievement.date}</span>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;
