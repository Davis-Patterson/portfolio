import React, { useState } from 'react';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';

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
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-content'>
          <form onSubmit={handleSubmit} className='contact-form'>
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
