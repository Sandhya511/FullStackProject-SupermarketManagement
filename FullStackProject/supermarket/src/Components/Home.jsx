import React, { useState } from 'react';
import { Button, AppBar,  Toolbar, Paper, Box, Grid, Drawer, Typography, } from '@mui/material';
import { Link} from 'react-router-dom';

const backgroundb='linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206))'
const drawerWidth = 170;
// const history = useHistory();
const paperStyle = {
 
  opacity: '0.85',
  width: '1450px',
  height:'300px',
  margin: '30px auto',
  borderRadius: '4px',
  padding: '20px',
  // backgroundColor: 'linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206))'
  background: 'linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168))'
};
const paperStyle1 = {
 
  opacity: '0.85',
  width: '1300px',
  height:'300px',
  margin: '30px auto',
  borderRadius: '4px',
  padding: '20px',
  // backgroundColor: 'linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206))'
  background: '#FAF0FA',
  
};

const buttonStyles = {
  backgroundColor: '#db7093',
  justifyContent: 'center',
  margin: '20px',
  padding: '20px 25px',
  fontSize: '16px',
  color: 'black',
  fontWeight: 'bold',
};

const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  margin: '50px',
  marginTop: '20px',
  marginBottom: '10px',
};
const paperStyle2={
  opacity: '0.85',
  width: '1450px',
  height:'60px',
  margin: '30px auto',
  borderRadius: '4px',
  padding: '20px',

}
const typstyle={
  fontSize:'20px'
}
const imagestyle={
  marginBottom:'5px',marginLeft:'50px',height:'200px',width: '200px',opacity:'1',borderRadius:'1%',marginTop:'15px',

}



const Home = () => {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <div>
      <Paper style={paperStyle}>
        <Grid style={gridStyle}>
          <Box style={boxStyle}>
            <Link to="/getproduct">
              <Button variant="contained" color="primary" style={buttonStyles}>
                Get Products Details
              </Button>
            </Link>
          </Box>
          <br />
          <Box style={boxStyle}>
            <Link to="/addproduct">
              <Button variant="contained" color="secondary" style={buttonStyles}>
                Save Products Details
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid style={gridStyle}>
          <Box style={boxStyle}>
            <Link to="/updateproductdetails">
              <Button variant="contained" color="primary" style={buttonStyles}>
                Update Products Details
              </Button>
            </Link>
          </Box>
          <br />
          <Box style={boxStyle}>
            <Link to="/deleteproductdetails">
              <Button variant="contained" color="secondary" style={buttonStyles}>
                Delete Products Details
              </Button>
            </Link>
          </Box>
        </Grid>
      </Paper>
    </div>
  );

  return (
    <div
      style={{
        background:'linear-gradient(to top, rgb(131, 164, 212), rgb(182, 251, 255))',
        height: '98vh',
        marginTop: '0',
        padding: '5px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9'
      }}
    >
      <AppBar position="static" style={{ backgroundColor: 'midnightblue', height: '68px' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display={'flex'} alignItems={'center'}>
          <Button  style={{ color: 'silver', fontWeight: 'bold' }}>
             GROZIT Super Market Management
          </Button>
          </Box>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Link to={'/'}>
          <Button marginTop='5px' style={{ color: 'silver', fontWeight: 'bold' }} >
            Logout
          </Button>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        style={{ width: drawerWidth, }}
        
      >
        <div style={{ width: drawerWidth, backgroundColor: backgroundb }}/>

       
      

      <Paper style={paperStyle}>
        <Grid style={gridStyle}>
          <Box style={boxStyle}>
            <Link to="/getproduct">
              <Button variant="contained" color="primary" style={buttonStyles} onClick={toggleDrawer}>
                Get Products Details
              </Button>
            </Link>
          </Box>
          <br />
          <Box style={boxStyle}>
            <Link to="/addproduct">
              <Button variant="contained" color="secondary" style={buttonStyles} onClick={toggleDrawer}>
                Save Products Details
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid style={gridStyle}>
          <Box style={boxStyle}>
            <Link to="/updateproductdetails">
              <Button variant="contained" color="primary" style={buttonStyles} onClick={toggleDrawer}>
                Update Products Details
              </Button>
            </Link>
          </Box>
          <br />
          <Box style={boxStyle}>
            <Link to="/deleteproductdetails">
              <Button variant="contained" color="secondary" style={buttonStyles} onClick={toggleDrawer}>
                Delete Products Details
              </Button>
            </Link>
          </Box>
        </Grid>
      </Paper>
      </Drawer>
      <Paper style={paperStyle2}>
            <Typography style={typstyle}>"Empowering Supermarkets with GROZIT: Efficient Management for Seamless Shopping Experience" </Typography> 
      </Paper>
      <Box display="flex" justifyContent="center" alignItems="center">
          <Button style={{ color: 'silver', fontWeight: 'bold',background:'midnightblue' }} onClick={toggleDrawer} align='center'>
            Services
          </Button>
          </Box>
          <Paper style={paperStyle1}>
          <Box 
                                    sx= {{
                                        display: 'flex',
                                        flexDirection:'row',
                                        alignItems: 'center',
                                        marginTop:'15px',
                                        marginLeft:'8px'
                                    }} >
                                <div>
                                    <Box
                                        component="img"
                                        style={imagestyle}
                                        src='https://cdn.pixabay.com/photo/2014/10/28/22/19/supermarket-507295_1280.jpg'/>
                                        <br/>
                                        
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        
                                        style={imagestyle}
                                        src="https://www.collinsdictionary.com/images/full/supermarket_406913140_1000.jpg"/>
                                        <br/>
                                        
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        
                                        style={imagestyle}
                                        src="https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437_640.jpg"/>
                                        <br/>
                                        
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        
                                        style={imagestyle}
                                        src="https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg"/>
                                        <br/>
                                        
                                </div>
                                <div>
                                    <Box
                                        component="img"
                                        
                                        style={imagestyle}
                                        src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_640.jpg"/>
                                        <br/>
                                        
                                </div>
                                
                                </Box>
      </Paper>
    </div>
  );
};

export default Home;
