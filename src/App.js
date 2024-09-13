// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Sanskrit Tuitions</h1>
        <p>Master Sanskrit with flexible, personalized, and engaging online classes!</p>
      </header>

      <section className="class-availability">
        <h2>Class Options</h2>
        <ul>
          <li>Individual and Combined Classes Available</li>
          <li>Flexible Timings</li>
          <li>Mediums: Malayalam, Tamil, English, Telugu, Hindi, Sanskrit</li>
          <li>Syllabus: State, CBSE, and others</li>
        </ul>
      </section>

      <section className="class-structure">
        <h2>Class Structure</h2>
        <p>10 classes per month, approximately 1 hour each.</p>
        <p>Extra classes available on demand.</p>
      </section>

      <section className="fee-structure">
        <h2>Fee Structure</h2>
        <div className="fee-cards">
          <div className="fee-card individual">
            <h3>Individual Classes</h3>
            <p>₹350 per hour</p>
            <p className="offer">
  Offer: <span className="strikethrough">₹3500</span> ₹3000/month 
  <span className="offer-note"> (for one-time payment)</span>
</p>
          </div>
          <div className="fee-card batch-three">
            <h3>Batch of 3 Students</h3>
            <p>₹250 per hour</p>
            <p className="offer">
              Offer: <span className="strikethrough">₹2500</span> ₹2300/month
              <span className="offer-note"> (for one-time payment)</span>

            </p>
          </div>
          <div className="fee-card batch-eight">
            <h3>Batch of 8 Students</h3>
            <p>₹190 per hour</p>
            <p className="offer">
              Offer: <span className="strikethrough">₹1900</span> ₹1700/month
              <span className="offer-note"> (for one-time payment)</span>

            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h4>Contact Us</h4>
        <div className="social-icons"> 
          <a href="https://wa.me/919442533967" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565807485427&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/learn_sanskrit_tuitions?igsh=MTl4eXFwdmh4cnA3dw==" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          {/* <a href="tel:+918921451177">call</a> */}
         </div>
        <p>  call: +919442533967</p>
      </footer>
    </div>
  );
}

export default App;
