// React Imports
'use client';
import React, { useState, useEffect } from 'react';

// MUI Imports
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar';

// Styles Imports
import tableStyles from '@core/styles/table.module.css';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://3wh3v3jh-8000.inc1.devtunnels.ms/auth/student/list/', {
          
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 33bbad2ce17e1cabb1eaf0b39c2fc3ebf4ef6bcb', // Replace '123456' with your actual token
          },
          
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result); // Set fetched data to state
        console.log(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Year</th>
              <th>Institute</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Education Financer</th>
              <th>Income Proof</th>
              <th>Government Scheme</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <CustomAvatar src={row.photograph} size={34} />
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.first_name} {row.middle_name || ''} {row.last_name}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.email || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.course_name || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.current_year || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.institute_name || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.fathers_name || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.mothers_name || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.address || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.number || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.education_financer_name || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.income_proof || 'N/A'}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.govt_Scheme_name || 'N/A'}</Typography>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={
                      row.status === 'pending'
                        ? 'warning'
                        : row.status === 'inactive'
                        ? 'secondary'
                        : 'success'
                    }
                    label={row.status || 'N/A'}
                    size='small'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
