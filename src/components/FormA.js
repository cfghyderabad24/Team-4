import React, { useState } from 'react';
import './css/FormA.css';

const FormA = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    gender: '',
    dob: '',
    PhoneNo: '',
    motherName: '',
    fatherName: '',
    statusOf12th: '',
    percentageIn12th: '',
    streamOfEducation: '',
    reasonForScholarship: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Student Registration - Form A</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Phone No:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother's Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="statusOf12th">Status of 12th Class:</label>
          <input
            type="text"
            id="statusOf12th"
            name="statusOf12th"
            value={formData.statusOf12th}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="percentageIn12th">% in 12th Class:</label>
          <input
            type="number"
            id="percentageIn12th"
            name="percentageIn12th"
            value={formData.percentageIn12th}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="streamOfEducation">Stream of Education:</label>
          <select
            id="streamOfEducation"
            name="streamOfEducation"
            value={formData.streamOfEducation}
            onChange={handleChange}
            required
          >
            <option value="">Select Stream</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reasonForScholarship">Reason for Scholarship:</label>
          <textarea
            id="reasonForScholarship"
            name="reasonForScholarship"
            value={formData.reasonForScholarship}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormA;
