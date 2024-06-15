import React, { useState } from 'react';
import '../../src/CallbackForm.css';

const CallbackForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    qualification: '',
    state: '',
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', form);
  };

  return (
    <>
    <div className='enroll-con'>
    <div className="signup-container">
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Talk to Our Career Expert By Enrolling</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Highest Qualification</label>
          <select
            id="qualification"
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            required
          >
            <option value="">---Select---</option>
            <option value="Graduation (Completed)">Graduation (Completed)</option>
            <option value="Graduation (Ongoing)">Graduation (Ongoing)</option>
            <option value="Post Graduation (Completed)">Post Graduation (Completed)</option>
            <option value="Post Graduation (Ongoing)">Post Graduation (Ongoing)</option>
            <option value="12th / Intermediate">12th / Intermediate</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">Native State</label>
          <select
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          >
            <option value="">---Select---</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            {/* Add all other states */}
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={form.receiveUpdates}
              onChange={handleChange}
            />
            I want to receive updates directly on WhatsApp
          </label>
        </div>
        <p>By proceeding further, I agree to the Terms & Conditions and Privacy Policy of EduSchool</p>
        <button type="submit" className='btn-form'>Submit</button>
      </form>
    </div>
    <div className="form-image-container">
    <img src="https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336688.jpg?size=626&ext=jpg&ga=GA1.1.330285296.1713266839&semt=sph"alt="Career Expert" className="form-image" />
  </div>
  </div>
  </>
  );
};

export default CallbackForm;
