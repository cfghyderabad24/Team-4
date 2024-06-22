'use client'
// React Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'; // Import router to handle redirects

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

const AccountSettings = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('account')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in cookies
  const token = localStorage.getItem('token');
   token ? `Token ${token}` : '';
    if (token) {
      setIsLoggedIn(true);
    } else {
      console.log(token);
      // Redirect to login page if not logged in
      router.push('/login');
    }
  }, []);

  const handleChange = (event, value) => {
    setActiveTab(value)
  }


  if (!isLoggedIn) {
    return null; // Render nothing if not logged in and not redirected
  }

  return (
    <TabContext value={activeTab}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TabList onChange={handleChange} variant='scrollable'>
            <Tab label='New Student' icon={<i className='ri-user-3-line'/>} iconPosition='start' value='account' />
            <Tab
              label='Renewal'
              icon={<i className='ri-user-3-line'/>}
              iconPosition='start'
              value='notifications'
            />
            <Tab label='View Students' icon={<i className='ri-link' />} iconPosition='start' value='connections' />
          </TabList>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={activeTab} className='p-0'>
            {tabContentList[activeTab]}
          </TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default AccountSettings