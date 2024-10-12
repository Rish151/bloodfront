import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        weight: '',
        bloodGroup: '',
        age: '',
        disease: '',
        country: '',
        state: '',
        city: '',
        district: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Do you want to donate blood? Fill the information.</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" placeholder='Arav Sharma' value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No:</label>
                        <input type="text" id="mobile" name="mobile" placeholder='+91 924532677' value={formData.mobile} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="arav21@gmail.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight:</label>
                        <input type="text" id="weight" name="weight" placeholder='50kg' value={formData.weight} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" name="age" placeholder='30 years' value={formData.age} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                            <option value="">Select Country</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <select id="state" name="state" value={formData.state} onChange={handleChange} required>
                            <option value="">Select State</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="district">District:</label>
                        <select id="district" name="district" value={formData.district} onChange={handleChange} required>
                            <option value="">Select District</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <select id="city" name="city" value={formData.city} onChange={handleChange} required>
                            <option value="">Select City</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="disease">Do you have any disease?</label>
                        <textarea id="disease" name="disease" placeholder='I have Hypertension' value={formData.disease} onChange={handleChange} rows="3" />
                    </div>
                </div>
                <div className="submit-button-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
