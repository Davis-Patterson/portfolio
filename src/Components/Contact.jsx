import React, { useState } from 'react';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';
import linkedinLogo from '/src/assets/footer/linkedin-logo.svg';
import githubLogo from '/src/assets/footer/github-logo.svg';
import linkedinLogoWhite from '/src/assets/nav/linkedin-logo.svg';
import githubLogoWhite from '/src/assets/nav/github-logo.svg';
import emailjs from 'emailjs-com';

const Contact = ({ activeSection, darkMode }) => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    setSending(true);
    emailjs
      .sendForm(
        'service_cbk0eww',
        'template_cz31eqp',
        e.target,
        'yBjEhIJRk4yxfyCnY'
      )
      .then(
        (result) => {
          setSending(false);
          setSuccess(true);
          console.log('Email successfully sent!', result.text);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          setForm({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          setSending(false);
          setError(true);
          console.log('Failed to send email:', error.text);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
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
        <h1 className='title-name' id='contact-title'>
          Contact Me
        </h1>
        <hr className='contact-page-break' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='skills-title' id='skills-title'>
            My Socials:
          </p>
          <div className='contact-socials'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/davispatterson/'
              className='about-link'
            >
              <img
                src={darkMode ? linkedinLogoWhite : linkedinLogo}
                alt='linkedin logo'
                className='about-link-logo'
                id='contact-linkedin'
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Davis-Patterson'
              className='about-link'
            >
              <img
                src={darkMode ? githubLogoWhite : githubLogo}
                alt='github logo'
                className='about-link-logo'
                id='contact-github'
              />
            </a>
          </div>
        </div>
        <div className='contact-content' id='contact-content'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <p className='email-form-title'>Send me an email:</p>
            <input
              type='text'
              name='user_name'
              placeholder='Your Name'
              value={form.user_name}
              onChange={handleChange}
              required
              className='name-input'
            />
            <input
              type='email'
              name='user_email'
              placeholder='Your Email'
              value={form.user_email}
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
            {sending && <p className='sending'>Sending your email</p>}
            {/* {error && (
              <p className='error'>There was an error sending your email</p>
              )}
              {success && (
                <p className='success'>Your Email was successfully sent!</p>
              )} */}
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
