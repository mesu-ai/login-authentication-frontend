import React,{useState} from 'react';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';


const LoginPage = () => {
  const [loginData,setLoginData]=useState({});

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



      const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);



    }

    const submitHandler=(e)=>{
        console.log(loginData);
       

        e.preventDefault();

    }

      

      
    return (
        
      
        <Box sx={{bgcolor:'wheat',p:{md:10,xs:2}}}>
          <Typography variant="h3" gutterBottom component="div">
            Login
          </Typography>


          <Box component='form'
          onSubmit={submitHandler}
          sx={{
          display:'flex',flexDirection:'column',mt:10,alignItems:'center',
          '& .MuiTextField-root': { m: 1, width:{xs:'30ch',sm:'50ch'},'& .MuiOutlinedInput-root':{
          borderRadius:'15px',
          backgroundColor:'white',

          }},
          }}
          noValidate
          autoComplete="off">

            <TextField
            id="loginId"
            // label="Email"
            type='email'
            placeholder='abc@example.com'
            onBlur={handleOnBlur}
            name='email'
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
            <AccountCircleIcon />
            </InputAdornment>
            ),
            }}
            //variant="standard"
            />

            <TextField
            id="passwordId"
            // label="Password"
            placeholder='••••••••'

            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handleOnBlur}
            name='password'
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
            <LockIcon />
            </InputAdornment>
            ),
            endAdornment: (
            <InputAdornment position="end">
            <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
            ),
            }}
            //variant="standard"
            /> 

          <Button  type="submit" sx={{backgroundColor:'info.main',mt:3,fontWeight:'bold',px:4}} variant="contained">Login</Button>

          </Box>

        </Box>
    );
};

export default LoginPage;