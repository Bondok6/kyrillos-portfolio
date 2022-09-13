import { useRef } from 'react';
import MouseHoverAnimation from '../utils/mouse-hover-animation';
import Heading from '../utils/heading';

const Home = () => {
  const headingRef = useRef(null);
  const cRef = useRef(null);

  Heading(headingRef);
  MouseHoverAnimation(cRef);

  return (
    <section className="home container">
      <h1 className="heading" ref={headingRef}></h1>
      <canvas id="c" ref={cRef}></canvas>
    </section>
  );
};

export default Home;
