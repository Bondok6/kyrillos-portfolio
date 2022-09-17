import { Link } from 'react-router-dom';
const SuccessSubmit = () => (
  <section>
    <h1>Success!</h1>
    <p>Thank you for submitting your information.</p>
    Back to <Link to="/">Home</Link>
  </section>
);
export default SuccessSubmit;
