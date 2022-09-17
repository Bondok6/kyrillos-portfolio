import { Link } from 'react-router-dom';
import successImg from '../assets/images/success.svg';

const SuccessSubmit = () => (
  <section className="success-page">
    <img src={successImg} alt="success-img" />
    <h1>Your message has been sent successfully.</h1>
    <p>Thank you for submitting your information.</p>
    <div>
      Back to <Link to="/">Home</Link>
    </div>
  </section>
);
export default SuccessSubmit;
