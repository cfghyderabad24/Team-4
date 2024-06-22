import React from 'react';
import mockData from './mockData';
import './css/ViewStudent.css';

const ViewStudents = () => {
  const students = Object.values(mockData);

  return (
    <center>
    <div className="view-students-container">
      <h2>View Students</h2>

      <table className="students-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Status of 12th Class</th>
            <th>% in 12th Class</th>
            <th>Stream of Education</th>
            <th>Reason for Scholarship</th>
            <th>Application Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>{student.gender}</td>
              <td>{student.dob}</td>
              <td>{student.statusOf12th}</td>
              <td>{student.percentageIn12th}</td>
              <td>{student.streamOfEducation}</td>
              <td>{student.reasonForScholarship}</td>
              <td className={student.applicationStatus === 'Accepted' ? 'accepted' : 'rejected'}>
                {student.applicationStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default ViewStudents;
