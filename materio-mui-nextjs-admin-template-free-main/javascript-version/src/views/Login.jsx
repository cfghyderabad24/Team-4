// 
'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Logo from '@components/layout/shared/Logo';
import themeConfig from '@configs/themeConfig';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    try {
      const response = await fetch(
        'https://3wh3v3jh-8000.inc1.devtunnels.ms/auth/login/',
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
      const token = data.token; // Adjust based on actual response structure
  
      // Store token in localStorage
      localStorage.setItem('token', token);
  
      // Redirect to dashboard or homepage
      router.push('/');
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative p-6">
      <Card className="flex flex-col sm:w-96">
        <CardContent className="p-6 sm:p-12">
          <div className="flex justify-center items-center mb-6">
            <Logo />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4">{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
              <Typography className="mb-1">
                Please sign-in to your account and start the adventure
              </Typography>
            </div>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <TextField
                autoFocus
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                type={isPasswordShown ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <i
                          className={
                            isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {error && <Typography color="error">{error}</Typography>}
              <div className="flex justify-between items-center gap-x-3 gap-y-1 flex-wrap">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me"
                />
                <Link href="/forgot-password" passHref>
                  <Typography color="primary">Forgot password?</Typography>
                </Link>
              </div>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
              <div className="flex justify-center items-center flex-wrap gap-2">
                <Typography>New on our platform?</Typography>
                <Link href="/register" passHref>
                  <Typography color="primary">Create an account</Typography>
                </Link>
              </div>
              <Divider className="my-3">or</Divider>
              <div className="flex justify-center items-center gap-2">
                <IconButton size="small" className="text-facebook">
                  <i className="ri-facebook-fill" />
                </IconButton>
                <IconButton size="small" className="text-twitter">
                  <i className="ri-twitter-fill" />
                </IconButton>
                <IconButton size="small" className="text-github">
                  <i className="ri-github-fill" />
                </IconButton>
                <IconButton size="small" className="text-googlePlus">
                  <i className="ri-google-fill" />
                </IconButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;