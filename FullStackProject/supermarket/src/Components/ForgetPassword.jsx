
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Typography, Paper, AppBar, Toolbar, Box, Button, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function ForgetPassword() {
//   const [username, setUsername] = useState('');
//   const [password, setNewPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleForgetPassword = async () => {
//     try {
//       const response = await axios.put('http://localhost:8080/user/forgetpassword', {
//         username,
//         password,
//       });

//       if (!response.status === 200) {
//         throw new Error('Failed to send reset password request');
//       }
//       alert(response.data);

//       // setSuccessMessage('Reset password successful!');
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('An error occurred while resetting the password');
//     }
//   };

//   const typstyle = {
//     fontSize: '23px',
//     color: 'dark blue',
//     margin: '20px',
//   };

//   const labelstyle = {
//     fontSize: '20px',
//     color: 'black',
//     marginLeft:'42px'
//     // margin: '20px',
//   };
//   // const labelstyle1 = {
//   //   fontSize: '20px',
//   //   color: 'black',
//   //   // margin: '20px',
//   //   marginLeft:'32px',
//   // };

//   const appbarstyle = {
//     color: 'white',
//     backgroundColor: '#0E096E',
//     width: '100%',
//     height: '64px',
//   };

//   const appbutton = {
//     color: 'silver', // Change to silver color
//     fontWeight: 'bold',
//     padding: '10px',
//     align: 'center',
//     '&:hover': {
//       backgroundColor: '#8c8e94',
//     },
//     margin: '20px',
//     width: '150px',
//   };

//   const appbarbox = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//   };

//   const supermarketText = {
//     marginRight: '20px',
//   };

//   const handleLoginClick = () => {
//     navigate('/');
//   };

//   // const inputStyle1={
//   //   width: '50%',
//   //   height: '40px',
//   //   fontSize: '18px',
//   //   marginBottom: '10px',
//   //   padding: '5px',
//   //   marginLeft:'87px'
//   // }
//   const fontstyle={
//     marginLeft:'77px',
//     // Textalign:'left',
//     fontWeight:'bold',
//     fontFamily:"arial"
//   }
//   const inputStyle={
//     width: '50%',
//     height: '40px',
//     fontSize: '18px',
//     marginBottom: '10px',
//     padding: '5px',
//     marginLeft:'20px'
//   }
//   const textFieldStyles = {
//     width: '300px', // Adjust the width as needed
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'black', // Change the outline color to black
//       },
//     },
//   };

//   const buttonstyles ={
//     color:'black',fontWeight:'bold',backgroundColor: '#F8E1F7',borderColor:'linear-gradient(to right, rgb(255, 252, 0), rgb(255, 255, 255))',padding:'5px',align:'center','&:hover': {
//       backgroundColor: '#F5DB3A '}
//     }
//   return (
//     <div
//       style={{
//         textAlign: 'center', // Align the content to center
//         background:
//           'linear-gradient(to top, rgb(100, 43, 115), rgb(198, 66, 110))',
//         height: '99vh',
//         marginTop: '0px',
//         padding: '5px',
//         fontSize: '50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         opacity: '0.9',
//       }}
//     >
//       <div>
//         <AppBar position="static" sx={appbarstyle}>
//           <Toolbar>
//             <Box style={appbarbox}>
//               <Box style={supermarketText}>
//                 <Typography variant="h6" component="div">
//                   GROZIT SUPERMARKET MANAGEMENT
//                 </Typography>
//               </Box>
//               <Button onClick={handleLoginClick} variant="text" style={appbutton}>
//                 LOGIN
//               </Button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <br />
//         <Paper
//           variant="outlined"
//           style={{
//             width: '500px',
//             borderRadius: '10px',
//             opacity: '0.92',
//             marginLeft: 'auto',
//             marginRight: 'auto', // Center align the paper
//             height: '350px',
//             borderColor: '#560496',
//             background: 'linear-gradient(to bottom, rgb(245, 243, 225), rgb(238, 242, 243))',
//           }}
//         >
//           <Box background="pink">
//             <Typography style={typstyle}>FORGOT PASSWORD? RESET IT NOW!</Typography>
//           </Box>
//           <div>
//             <Typography style={fontstyle}>Username:</Typography>
//             <TextField 
//             sx={textFieldStyles} 
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <Typography style={fontstyle}>New Password:</Typography>
//             <TextField
//             sx={textFieldStyles} 
//               type="password"
//               id="newPassword"
//               value={password}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//           </div>
//           {errorMessage && <p>{errorMessage}</p>}
//           <button   sx={buttonstyles} onClick={handleForgetPassword}>Reset Password</button>
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export default ForgetPassword;
import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Paper, AppBar, Toolbar, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const [username, setUsername] = useState('');
  const [password, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleForgetPassword = async () => {
    try {
      const response = await axios.put('http://localhost:8080/user/forgetpassword', {
        username,
        password,
      });

      if (!response.status === 200) {
        throw new Error('Failed to send reset password request');
      }
      alert(response.data);

      // setSuccessMessage('Reset password successful!');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while resetting the password');
    }
  };

  const typstyle = {
    fontSize: '23px',
    color: 'dark blue',
    margin: '20px',
  };

  const appbarstyle = {
    color: 'white',
    backgroundColor: '#0E096E',
    width: '100%',
    height: '64px',
  };

  const appbutton = {
    color: 'silver', // Change to silver color
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#8c8e94',
    },
    margin: '20px',
    width: '150px',
  };

  const appbarbox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  const supermarketText = {
    marginRight: '20px',
  };

  const handleLoginClick = () => {
    navigate('/');
  };
  const fontstyle = {
    marginLeft: '30px',
    // Textalign:'left',
    fontWeight: 'bold',
    fontFamily: 'arial',
  };

  const textFieldStyles = {
    width: '300px', // Adjust the width as needed
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black', // Change the outline color to black
      },
    },
  };

  const buttonstyles = {
    color: 'black',
    fontWeight: 'bold',
    background: ' #ECFCEC  ',
    border: '1px solid linear-gradient(to right, rgb(255, 252, 0), rgb(255, 255, 255))',
    padding: '25px',
    textAlign: 'center',
    fontSize:'18',
    '&:hover': {
      background: '#F5DB3A ',
    },
  };

  return (
    <div
      style={{
        textAlign: 'center', // Align the content to center
        background: 'linear-gradient(to top, rgb(100, 43, 115), rgb(198, 66, 110))',
        height: '99vh',
        marginTop: '0px',
        padding: '5px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9',
      }}
    >
      <div>
        <AppBar position="static" sx={appbarstyle}>
          <Toolbar>
            <Box style={appbarbox}>
              <Box style={supermarketText}>
                <Typography variant="h6" component="div">
                  GROZIT SUPERMARKET MANAGEMENT
                </Typography>
              </Box>
              <Button onClick={handleLoginClick} variant="text" style={appbutton}>
                LOGIN
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <br />
        <Paper
          variant="outlined"
          style={{
            width: '500px',
            borderRadius: '10px',
            opacity: '0.92',
            marginLeft: 'auto',
            marginRight: 'auto', // Center align the paper
            height: '350px',
            borderColor: '#560496',
            background: 'linear-gradient(to bottom, rgb(245, 243, 225), rgb(238, 242, 243))',
          }}
        >
          <Box background="pink">
            <Typography style={typstyle}>FORGOT PASSWORD? RESET IT NOW!</Typography>
          </Box>
          <div>
            <Typography style={fontstyle}>USERNAME:</Typography>
            <TextField
              sx={textFieldStyles}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Typography style={fontstyle}>NEW PASSWORD:</Typography>
            <TextField
              sx={textFieldStyles}
              type="password"
              id="newPassword"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button style={buttonstyles} onClick={handleForgetPassword}>
            Reset Password
          </button>
        </Paper>
      </div>
    </div>
  );
}

export default ForgetPassword;
