import { useRef } from 'react';
import MouseHoverAnimation from '../utils/mouse-hover-animation';
import Heading from '../utils/heading';
import Button from '../components/UI/Button';

const Home = () => {
  const headingRef = useRef(null);
  const cRef = useRef(null);

  Heading(headingRef);
  MouseHoverAnimation(cRef);

  return (
    <section className="home">
      <h1 className="heading" ref={headingRef}></h1>

      <div className="buttons">
        <Button text="contact me" link="/conatct" />
        <Button
          text="my resume"
          link="https://drive.google.com/file/d/1CjFWnndQNLTENMb_R2X8rPSFWgVxre2p/view"
        />
      </div>

      <canvas id="c" ref={cRef}></canvas>
    </section>
  );
};

export default Home;
