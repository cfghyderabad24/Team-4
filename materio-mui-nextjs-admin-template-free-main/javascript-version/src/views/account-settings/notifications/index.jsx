'use client'
import React, { useState } from 'react';

const StudentForm = () => {
  const [step, setStep] = useState(1);

  // Step 1 Fields
  const [currentFee, setCurrentFee] = useState('');
  const [prevEduName, setPrevEduName] = useState('');
  const [prevEduYear, setPrevEduYear] = useState('');
  const [prevEduMarks, setPrevEduMarks] = useState('');
  const [prevEduPercentage, setPrevEduPercentage] = useState('');
  const [id, setId] = useState('');

  // Step 2 Fields
  const [fatherName, setFatherName] = useState('');
  const [fatherAge, setFatherAge] = useState('');
  const [fatherEduStatus, setFatherEduStatus] = useState('');
  const [fatherIncome, setFatherIncome] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [fatherEarning, setFatherEarning] = useState('');

  // Step 3 Fields
  const [essayFile, setEssayFile] = useState(null);
  const [panCardFile, setPanCardFile] = useState(null);
  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [educationalProofFile, setEducationalProofFile] = useState(null);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <h1>Student Form - Step {step}</h1>
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2>Step 1: Educational Details</h2>
          <label>
            ID:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </label>
          <label>
            Current Fee:
            <input
              type="text"
              value={currentFee}
              onChange={(e) => setCurrentFee(e.target.value)}
              required
            />
          </label>
          <label>
            Previous Education Name:
            <input
              type="text"
              value={prevEduName}
              onChange={(e) => setPrevEduName(e.target.value)}
              required
            />
          </label>
          <label>
            Previous Education Year:
            <input
              type="text"
              value={prevEduYear}
              onChange={(e) => setPrevEduYear(e.target.value)}
              required
            />
          </label>
          <label>
            Previous Education Marks:
            <input
              type="text"
              value={prevEduMarks}
              onChange={(e) => setPrevEduMarks(e.target.value)}
              required
            />
          </label>
          <label>
            Previous Education Percentage:
            <input
              type="text"
              value={prevEduPercentage}
              onChange={(e) => setPrevEduPercentage(e.target.value)}
              required
            />
          </label>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2>Step 2: Father's Details</h2>
          <label>
            Father's Name:
            <input
              type="text"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
          </label>
          <label>
            Father's Age:
            <input
              type="text"
              value={fatherAge}
              onChange={(e) => setFatherAge(e.target.value)}
              required
            />
          </label>
          <label>
            Father's Education Status:
            <input
              type="text"
              value={fatherEduStatus}
              onChange={(e) => setFatherEduStatus(e.target.value)}
              required
            />
          </label>
          <label>
            Father's Income:
            <input
              type="text"
              value={fatherIncome}
              onChange={(e) => setFatherIncome(e.target.value)}
              required
            />
          </label>
          <label>
            Father's Occupation:
            <input
              type="text"
              value={fatherOccupation}
              onChange={(e) => setFatherOccupation(e.target.value)}
              required
            />
          </label>
          <label>
            Father's Earning:
            <input
              type="text"
              value={fatherEarning}
              onChange={(e) => setFatherEarning(e.target.value)}
              required
            />
          </label>
          <div className="button-group">
            <button type="button" onClick={handleBack}>Back</button>
            <button type="submit">Next</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2>Step 3: Upload Documents</h2>
          <label>
            Essay File:
            <input
              type="file"
              onChange={(e) => setEssayFile(e.target.files[0])}
              required
            />
          </label>
          <label>
            PAN Card File:
            <input
              type="file"
              onChange={(e) => setPanCardFile(e.target.files[0])}
              required
            />
          </label>
          <label>
            Aadhar Card File:
            <input
              type="file"
              onChange={(e) => setAadharCardFile(e.target.files[0])}
              required
            />
          </label>
          <label>
            Educational Proof File:
            <input
              type="file"
              onChange={(e) => setEducationalProofFile(e.target.files[0])}
              required
            />
          </label>
          <div className="button-group">
            <button type="button" onClick={handleBack}>Back</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        form {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          color: #333;
        }
        input[type="text"],
        input[type="file"] {
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .button-group {
          display: flex;
          justify-content: space-between;
        }
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default StudentForm;