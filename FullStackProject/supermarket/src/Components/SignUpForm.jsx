import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Paper,Button, Typography, Box} from '@mui/material'
import { useNavigate} from 'react-router-dom';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleMobileChange = event => {
    setMobile(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      mobile: mobile
    };

    axios.post('http://localhost:8080/user/rpost', data)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  const paperStyle={
    width:'450px',
    borderRadius:'20px' ,
    opacity:'0.95',
    // background: 'linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200))'
    background: 'linear-gradient(to right, rgb(211, 204, 227), rgb(233, 228, 240))',
    height:'450px',
    
  }
  const inputStyle1 = {
    width: '50%',
    height: '40px',
    fontSize: '18px',
    marginBottom: '10px',
    padding: '5px',
    marginLeft:'20px'
    
  };
  const inputStyle2 = {
    width: '50%',
    height: '40px',
    fontSize: '18px',
    marginBottom: '10px',
    padding: '5px',
    marginLeft:'60px'
    
  };
  const inputStyle3 = {
    width: '50%',
    height: '40px',
    fontSize: '18px',
    marginBottom: '10px',
    padding: '5px',
    marginLeft:'45px'
    
  };
  const inputStyle4 = {
    width: '50%',
    height: '40px',
    fontSize: '18px',
    marginBottom: '10px',
    padding: '5px',
    marginLeft:'25px'
    
  };
  const buttonstyles ={
    color:'black',
    fontWeight:'bold',
    backgroundColor: '#a9abb1',
    borderColor:'#0480AB',
    padding:'10px',
    align:'center','&:hover': {
      backgroundColor: '#8c8e94',
      },
      margin:'20px',
      width:'200px'
    }
    const type={
      fontSize:'bold',
      fontFamily: "Playfair variant0",
      marginTop:'15px',
      color:'#030e43',
      // borderBottom: '1px solid #000'
    }
    const boxstyle={
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    //   display: 'flex',
    // alignItems: 'center'
    justifyContent: 'center'
    }
    const labelstyle={
      fontFamily:'Noto_Serif variant0',
      fontWeight:'normal',
      fontSize:'25px',
      padding:'20px'
    }

  return (
    <div style={{background: 'linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))',height:'99vh',
    marginTop:'0px',
    padding:'5px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity:'0.9'}}>
    <Grid align="center" padding={"100px"}>
       <Paper variant='outlined' style={paperStyle}>
       <Typography variant="h4"  align="center" gutterBottom  style={type}>
            Supermarket SignUp
            <br/>
      </Typography>
      {/* </Paper>
       <Paper> */}
          <form onSubmit={handleSubmit}>
            {/* <input type="id" name="id" placeholder="ID" value={formData.id} onChange={handleChange} /> */}
            <Box style={boxstyle}>
            <label style={labelstyle}>Username:</label>
            <input type="text" name="username" placeholder="Name" value={username} style={inputStyle1} onChange={handleUsernameChange} required />
            </Box>
            {/* <br/> */}
            <Box style={boxstyle}>
            <label style={labelstyle} marginLeft='10px'>Email:</label>
            <input type="text" name="email" placeholder="Email" value={email}style={inputStyle2}  onChange={handleEmailChange}  required/>
            </Box>
            {/* <br/> */}
            <Box style={boxstyle}>
            <label style={labelstyle}>Mobile:</label>
            <input type="text" name="mobile" placeholder="Mobile" value={mobile} style={inputStyle3}   onChange={handleMobileChange}  required/>
            </Box>
            {/* <br/> */}
            <Box style={boxstyle}>
            <label style={labelstyle}>Password:</label>
            <input type="pwd" name="pwd" placeholder="Password" value={password} style={inputStyle4} onChange={handlePasswordChange}  required/>
            </Box>
            {/* <button type="submit">Sign Up</button> */}
            {/* <Link to={"/"}> */}
            <Button type="submit" variant="contained" style={buttonstyles} fullWidth>
            SignUp
          </Button>
          {/* </Link> */}
          </form>
      
           </Paper>
        </Grid>
        
     
    </div>
  );
}

export default SignUpForm;
