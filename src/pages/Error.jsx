import notFoundImg from '../assets/images/not-found.svg';

const Error = () => (
  <section className="error-page">
    <img src={notFoundImg} alt="" />
    <h2>Page Not Found</h2>
  </section>
);

export default Error;
