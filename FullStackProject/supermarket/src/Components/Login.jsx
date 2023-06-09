import React ,{ useState } from 'react'
import { Grid, Paper,Button, Typography, TextField,Box} from '@mui/material'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom';

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = event => {
    navigate('/signup');
    
  
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8080/user/logging', {username, password})
      .then(response => {
        // handle success
        if(response.data==="Login Successful"){
          alert(response.data);
          sessionStorage.setItem("username", username);
          localStorage.setItem("username", username);
          navigate('/home');
        }else if(response.data==="Login Failed"){
          alert(response.data);
        }
        else{
        alert(response.data);
        

      }
    })
    .catch(error => {
      // handle error
      console.error(error);
    });
};



  const textFieldStyles = {
    width: '300px', // Adjust the width as needed
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Change the outline color to black
      },
    },
  };

  const buttonstyles ={
    color:'black',fontWeight:'bold',backgroundColor: '#F8E1F7',borderColor:'linear-gradient(to right, rgb(255, 252, 0), rgb(255, 255, 255))',padding:'5px',align:'center','&:hover': {
      backgroundColor: '#FAF3A3 '}

  }
  const fontstyle={
    marginLeft:'77px',
    // Textalign:'left',
    fontWeight:'bold',
    fontFamily:"arial"
  }
  const imagestyle={
    marginBottom:'5px',marginLeft:'50px',height:'200px',width: '200px',opacity:'1',borderRadius:'1%',marginTop:'15px',
  
  }
  return (
    <div style={{background: 'linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))',height:'99vh',
      marginTop:'0px',
      padding:'5px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'0.9'}}>
      <div>
          <Grid align="center" padding={"50px"} marginTop={'20px'}>
            <Paper variant='outlined' style={{width:'450px', borderRadius:'10px' ,align:'right',opacity:'0.92',marginLeft:'60px',borderColor:'#560496',background:'linear-gradient(to bottom, rgb(245, 243, 225) , rgb(238, 242, 243))' }}>
            <Typography variant="h4" color={'black'} align="center" gutterBottom  marginTop={'5px'}style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '24px' }}>
              <br/>
                  SUPERMARKET LOGIN
                <br/>
            </Typography>
            <Grid >
              <br/>
              <Typography style={fontstyle} align='left'>Enter your Username:</Typography>
              <TextField label='Username'  type="text" name="username" placeholder="Name" padding='1px'sx={textFieldStyles}  value={username} onChange={handleUsernameChange} required />
              <br/>
              <Typography style={fontstyle} align='left'>Enter your Password:</Typography>
              <TextField label='Password'  type="password" name="password" placeholder="Password" padding='1px' sx={textFieldStyles} value={password} onChange={handlePasswordChange} required/>
              
              <br/>
                <Button type="submit" variant="contained"   sx={buttonstyles} onClick={handleSubmit} >
                Login
              </Button>
              {/* </Link> */}
              <br/>
              
              <Typography padding={'10px'}>
                {/* <Link to={"/signup"}> */}
                <Button type="submit" variant="contained" sx={buttonstyles} onClick={handleLoginSubmit}>
                Don't Have An Account? SignUp
              </Button>
              {/* </Link> */}
              <br/>
              <br/>
                <Link to={"/forgotpassword"}>
                <Button type="submit" variant="contained" sx={buttonstyles}>
                Reset Password
              </Button>
              </Link>
              <br/>
              </Typography>
            </Grid>
            </Paper>
            
        
          </Grid>
      </div>
    </div>
  )
}



