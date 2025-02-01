import React, { useState } from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import img1 from './Assert/volunteer-1326758-1080x675.png';
import img2 from './Assert/400dpiLogo.png';
import FosterKitten from './pages/FosterKitten'; 
import SaveTheWorld from './pages/SaveTheWorld';

function App() {
  const [events] = useState([
    { id: 1, title: 'Foster for Kitten or Cat', date: '12-02-2025' },
    { id: 2, title: 'Save the World', date: '22-04-2025' },
  ]);


  return (
     <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="home">
          <p>
            <img src={img2} alt="" />
            SHARE-CARE
          </p>
        </div>
        <div className="left-header">
          <div className="contact-info">
            <button>Contact Us</button>
          </div>
          <div className="login">
            <button>Login</button>
          </div>
          <div className="signin">
            <button>Sign Up</button>
          </div>
          <div className="donation-bar">
            <button>Donate Now!</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Pictures Section (Top Middle) */}
        <div className="image-gallery">
          <img src={img1} alt="" />
        </div>

        {/* Events Section */}
        <section className="events">
          <h2>Upcoming Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Routes>
        <Route path="/event/1" element={<FosterKitten />} />
        <Route path="/event/2" element={<SaveTheWorld />} />
      </Routes>
     </div>
  );
}

export default App;
