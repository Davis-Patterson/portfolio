import React, { useState } from 'react';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';
import linkedinLogo from '/src/assets/footer/linkedin-logo.svg';
import githubLogo from '/src/assets/footer/github-logo.svg';
import linkedinLogoWhite from '/src/assets/nav/linkedin-logo.svg';
import githubLogoWhite from '/src/assets/nav/github-logo.svg';

const Contact = ({ activeSection, darkMode }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const blueStyle = {
    width: activeSection === 'contact' ? '50px' : '200px',
    opacity: activeSection === 'contact' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={geometricTexture}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='title-name'>Contact Me</h1>
        <hr className='contact-page-break' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='skills-title'>My Socials:</p>
          <div className='contact-socials'>
            <a
              href='https://www.linkedin.com/in/davispatterson/'
              className='about-link'
            >
              <img
                src={darkMode ? linkedinLogoWhite : linkedinLogo}
                alt='linkedin logo'
                className='about-link-logo'
              />
            </a>
            <a href='https://github.com/Davis-Patterson' className='about-link'>
              <img
                src={darkMode ? githubLogoWhite : githubLogo}
                alt='github logo'
                className='about-link-logo'
              />
            </a>
          </div>
        </div>
        <div className='contact-content'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <p className='email-form-title'>Send me an email:</p>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={form.name}
              onChange={handleChange}
              required
              className='name-input'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={form.email}
              onChange={handleChange}
              required
              className='email-input'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={form.message}
              onChange={handleChange}
              required
              className='message-input'
            ></textarea>
            <button type='submit' className='submit-button'>
              Send Email
            </button>
          </form>
        </div>
        {/* <div className='gap' /> */}
      </div>
    </>
  );
};

export default Contact;
