'use client'
import React, { useState } from 'react';

// Next Imports
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// MUI Imports (assuming these are your Material-UI imports)
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Component Imports
import Logo from '@components/layout/shared/Logo';
// import Illustrations from '@components/Illustrations'; // Assuming this component is for background illustration

// Config Imports
import themeConfig from '@configs/themeConfig';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formStep, setFormStep] = useState(1); // State to manage form steps
  const [formData, setFormData] = useState({
    first_name: null,
    middle_name:null,
    last_name:null,
    photograph: null,
    course_name:null,
    course_duration:null,
    current_year:null,
    institute_name:null,
    fathers_name:null,
    mothers_name:null,
    address:null,
    number:null,
    email:null,
    education_financer_name:null,
    income_proof: null,
    govt_scheme_name:null,
    current_fee: null,
    father_income: null,
    pan_card_file: null,
    aadhar_card_file: null,
    essay: false,
    pan_card_student: false,
    aadhar_card_student: false,
  });

  const router = useRouter(); // Ensure useRouter is used correctly

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === 'essay' || name === 'pan_card_student' || name === 'aadhar_card_student') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'https://example.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      const { Token, Status } = data;

      // Set cookie with token and status
      document.cookie = `token=${Token}; path=/`;
      document.cookie = `status=${Status}; path=/`;

      // Redirect to the next form step
      setFormStep(2); // Directly move to the next step
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  
  const handleNext = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };
 
  const handleNGO=async(e)=>{
    setFormStep((prevStep) => prevStep + 1);
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'https://3wh3v3jh-8000.inc1.devtunnels.ms/auth/student/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Token 33bbad2ce17e1cabb1eaf0b39c2fc3ebf4ef6bcb',
          },
          body: JSON.stringify(formData),
        }
      );
      tempid=response.id-1;
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Handle successful submission
      console.log('Form data submitted successfully:', formData);
      // Optionally, you can redirect or perform other actions after successful submission

    } catch (error) {
      setError('Failed to submit form data');
    } finally {
      setLoading(false);
    }


  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'https://3wh3v3jh-8000.inc1.devtunnels.ms/auth/student/?id=tempid',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Token 33bbad2ce17e1cabb1eaf0b39c2fc3ebf4ef6bcb',
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Handle successful submission
      console.log('Form data submitted successfully:', formData);
      tempid=response.id;
      // Optionally, you can redirect or perform other actions after successful submission

    } catch (error) {
      setError('Failed to submit form data');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative p-6">
      <Card className="flex flex-col w-full sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5">
        <CardContent className="p-6 sm:p-12">
          <Link href="/" passHref>
            <div className="flex justify-center items-center mb-6">
              <Logo />
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4">
                {`Welcome to ${themeConfig.templateName}!`}
              </Typography>
              <Typography className="mb-1">
                Please sign-in to your account 
              </Typography>
            </div>

            {formStep === 1 && (
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* S.T. BHATEVARA FOUNDATION FORM */}
                <Typography
                  variant="h5"
                  textAlign="center"
                  mb={3}
                >
                  S.T. BHATEVARA FOUNDATION
                </Typography>
                <TextField
                  label="Form No."
                  name="form_no"
                  value={formData.form_no}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                {/* Personal Information */}
                <TextField
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Middle Name"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                {/* File upload for photograph */}
                <InputLabel htmlFor="photograph">Photograph</InputLabel>
                <Input
                  accept="image/*"
                  id="photograph"
                  type="file"
                  name="photograph"
                  onChange={handleChange}
                  className="mb-3"
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleNext}
                  className="mb-3"
                >
                  Next
                </Button>
              </form>
            )}

            {formStep === 2 && (
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5"
              >
                {/* Course Information */}
                <Typography
                  variant="h5"
                  textAlign="center"
                  mb={3}
                >
                  Course Information
                </Typography>
                <TextField
                  label="Course Name"
                  name="course_name"
                  value={formData.course_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Course Duration"
                  name="course_duration"
                  value={formData.course_duration}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Current Year"
                  name="current_year"
                  value={formData.current_year}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Institute Name"
                  name="institute_name"
                  value={formData.institute_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleNext}
                  className="mb-3"
                >
                  Next
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleBack}
                  className="mb-3"
                >
                  Back
                </Button>
              </form>
            )}

            {formStep === 3 && (
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5"
              >
                {/* Additional Information */}
                <Typography
                  variant="h5"
                  textAlign="center"
                  mb={3}
                >
                  Additional Information
                </Typography>
                <TextField
                  label="Father's Name"
                  name="fathers_name"
                  value={formData.fathers_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Mother's Name"
                  name="mothers_name"
                  value={formData.mothers_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Education Financer's Name"
                  name="education_financer_name"
                  value={formData.education_financer_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <InputLabel htmlFor="income_proof">Income Proof File</InputLabel>
                <Input
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  id="income_proof"
                  type="file"
                  name="income_proof"
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Government Scheme Name"
                  name="govt_scheme_name"
                  value={formData.govt_scheme_name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleNGO}
                  className="mb-3"
                >
                  Next
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleBack}
                  className="mb-3"
                >
                  Back
                </Button>
              </form>
            )}

            {formStep === 4 && (
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5"
              >
                {/* NGO SECTION FORM */}
                <Typography
                  variant="h5"
                  textAlign="center"
                  mb={3}
                >
                  NGO SECTION
                </Typography>
                {/* Checkboxes */}
                <FormControlLabel
                  control={<Checkbox name="essay" onChange={handleChange} />}
                  label="Essay - Handwritten by student (on goals of life)"
                />
                <FormControlLabel
                  control={<Checkbox name="pan_card_student" onChange={handleChange} />}
                  label="PAN Card - Student"
                />
                <FormControlLabel
                  control={<Checkbox name="aadhar_card_student" onChange={handleChange} />}
                  label="Aadhar Card - Student"
                />
                {/* Additional fields */}
                <TextField
                  label="Current Fee"
                  name="current_fee"
                  value={formData.current_fee}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <TextField
                  label="Father's Income"
                  name="father_income"
                  value={formData.father_income}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  className="mb-3"
                />
                <InputLabel htmlFor="pan_card_file">PAN Card File</InputLabel>
                <Input
                  accept=".pdf,.jpg,.jpeg,.png"
                  id="pan_card_file"
                  type="file"
                  name="pan_card_file"
                  onChange={handleChange}
                  className="mb-3"
                />
                <InputLabel htmlFor="aadhar_card_file">Aadhar Card File</InputLabel>
                <Input
                  accept=".pdf,.jpg,.jpeg,.png"
                  id="aadhar_card_file"
                  type="file"
                  name="aadhar_card_file"
                  onChange={handleChange}
                  className="mb-3"
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  className="mb-3"
                >
                  Submit
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleBack}
                  className="mb-3"
                >
                  Back
                </Button>
              </form>
            )}
          </div>
        </CardContent>
      </Card>
      {/* Assuming Illustrations component uses authBackground */}
      {/* <Illustrations maskImg={{ src: authBackground }} /> */}
    </div>
  );
};

export default Login;
