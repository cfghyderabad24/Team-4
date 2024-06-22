import React, { useState } from 'react';
import mockData from './mockData';
import './css/FormB.css';

const FormB = () => {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleFetchData = () => {
    if (mockData[studentId]) {
      setStudentData(mockData[studentId]);
    } else {
      alert('Student not found');
      setStudentData(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send updated data to the server
    console.log(studentData);
  };

  return (
    <div className="form-container">
      <h2>Student Update - Form B</h2>
      <div className="fetch-container">
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      {studentData && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentData.studentId}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={studentData.studentName}
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
                  checked={studentData.gender === 'male'}
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
                  checked={studentData.gender === 'female'}
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
                  checked={studentData.gender === 'other'}
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
              value={studentData.dob}
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
              value={studentData.motherName}
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
              value={studentData.fatherName}
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
              value={studentData.statusOf12th}
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
              value={studentData.percentageIn12th}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="streamOfEducation">Stream of Education:</label>
            <select
              id="streamOfEducation"
              name="streamOfEducation"
              value={studentData.streamOfEducation}
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
              value={studentData.reasonForScholarship}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default FormB;
