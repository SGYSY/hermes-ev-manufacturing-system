import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate
import axios from 'axios';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));



export default function SignInCard() {
  const handleStaffLogin = async () => {
    const email = document.getElementById('email').value.trim(); // 获取输入的Email作为employee_id
    const password = document.getElementById('password').value;
  
    // 构建请求体
    const requestBody = {
      employee_id: email, // 直接使用Email作为employee_id
      password: password, // 直接使用输入的密码
    };
  
    // 在发送请求之前 alert 数据内容
    alert(`Sending Staff Login Data: ${JSON.stringify(requestBody)}`);
  
    try {
      const response = await axios.post(
        'http://phphermesbackendv2-env.us-east-1.elasticbeanstalk.com/login.php/employee',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // 解析返回结果
      const responseData = response.data;
  
      // 验证成功时处理数据
      if (responseData.status === 'success') {
        const position = responseData.message.position;
  
        // 存储数据到 localStorage
        localStorage.setItem('position', position);
        localStorage.setItem('employee_id', email); // 存储Email作为employee_id
        localStorage.setItem('password', password);
        if (position==="Manager") {
          navigate('/dashboard');
        } else if (position==="Salesman") {
          navigate('/dashboard_staff');
        } else if (position==="Supplier") {
          navigate('/dashboard_supplier');
        } else {
          alert(`Retrurn message: ${JSON.stringify(response)}`);
        }
  
        alert(`Login successful! Position: ${position}`);
      } else {
        alert(`Retrurn message: ${JSON.stringify(response)}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  
  const handleCustomerLogin = async (event) => {
    event.preventDefault(); // 阻止表单默认提交行为
  
    const email = document.getElementById('email').value.trim(); // 获取输入的Email作为customer_id
    const password = document.getElementById('password').value;
  
    // 构建请求体
    const requestBody = {
       email, // 直接使用Email作为customer_id
       password, // 直接使用输入的密码
    };
  
    // 在发送请求之前 alert 数据内容
    alert(`Sending Customer Login Data: ${JSON.stringify(requestBody)}`);
  
    try {
      const response = await axios.post(
        'http://phphermesbackendv2-env.us-east-1.elasticbeanstalk.com/login.php/customer',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // 解析返回结果
      const responseData = response.data;
  
      // 验证成功时处理数据
      if (responseData.status === 'success') {
        const customerId = responseData.message;
  
        // 存储数据到 localStorage
        localStorage.setItem('customer_id', email); // 存储Email作为customer_id
        localStorage.setItem('password', password);
  
        alert(`Login successful! Customer ID: ${customerId}`);
      } else {
        alert(`Retrurn message: ${JSON.stringify(response)}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };



  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // 获取导航函数

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // const validateInputs = (event) => {
  //   const email = document.getElementById('email');
  //   const password = document.getElementById('password');

  //   let isValid = true;

  //   if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
  //     setEmailError(true);
  //     setEmailErrorMessage('Please enter a valid email address.');
  //     isValid = false;
  //   } else {
  //     setEmailError(false);
  //     setEmailErrorMessage('');
  //   }

  //   if (!password.value || password.value.length < 6) {
  //     setPasswordError(true);
  //     setPasswordErrorMessage('Password must be at least 6 characters long.');
  //     isValid = false;
  //   } else {
  //     setPasswordError(false);
  //     setPasswordErrorMessage('');
  //   }

  //   // 如果验证成功，模拟与数据库的对比，跳转到 Dashboard
  //   if (isValid) {
  //     // 模拟的用户数据
  //     const validEmail = 'user@example.com';
  //     const validPassword = 'password123';
  //     const validStaff = 'staff@example.com';
  //     const validPasswordStaff = 'password456';
  //     const validSupplier = 'supplier@example.com';
  //     const validPasswordSupplier = 'password789';

  //     // 储存用户输入的邮箱和密码
  //     // localStorage.setItem('email', email.value);
  //     // localStorage.setItem('password', password.value);

  //     // 跳转到对应页面
  //     if (email.value === validEmail && password.value === validPassword) {
  //       navigate('/dashboard');
  //     } else if (email.value === validStaff && password.value === validPasswordStaff) {
  //       navigate('/dashboard_staff');
  //     } else if (email.value === validSupplier && password.value === validPasswordSupplier) {
  //       navigate('/dashboard_supplier');
  //     } else {
  //       alert('Invalid credentials, please try again.');
  //     }
  //   }

  //   event.preventDefault(); // 阻止表单提交

  //   // return isValid;
  // };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
            </Link>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="button" fullWidth variant="contained" onClick={handleCustomerLogin}>
          Sign in customer
        </Button>
        <Button type="button" fullWidth variant="outlined" onClick={handleStaffLogin}
        >
          Sign in staff
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <Link
              to="/signup"
              component="button"
              type="button"
              onClick={() => navigate('/signup')}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign up
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button>
      </Box>
    </Card>
  );
}
