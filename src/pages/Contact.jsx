import { useEffect, useState } from 'react';
import Button from './../components/UI/Button';
import { useForm, ValidationError } from '@formspree/react';
import SuccessSubmit from './SuccessSubmit';

const Contact = () => {
  useEffect(() => {
    // Leaflet -> third-party library to display map
    // const coords = [31.2508271, 32.3189202];
    // const map = L.map('map').setView(coords, 13);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);
    // L.marker(coords).addTo(map).bindPopup('Hi, I am here 👋').openPopup();
  }, []);

  const [state, handleSubmit] = useForm('xnqlzkod');
  if (state.succeeded) {
    return <SuccessSubmit />;
  }
  return (
    <section className="contact container">
      <div className="contact__info">
        <h2>Contact Me</h2>
        <div className="form-container">
          <form id="my-form" autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <label></label>
            <input type="email" name="email" placeholder="Email" required />
            <label></label>
            <input type="text" name="subject" placeholder="Subject" required />
            <label></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <label></label>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <Button text="Send Message" link="submit" state={state} />
          </form>
        </div>
      </div>
      {/* <div id="map"></div> */}
    </section>
  );
};

export default Contact;
