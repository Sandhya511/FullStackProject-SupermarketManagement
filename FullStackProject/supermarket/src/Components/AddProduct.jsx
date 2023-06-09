import React, { useState } from 'react'
import { Grid, Paper,Button, Typography,Box,AppBar,Toolbar} from '@mui/material'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

export default function AddProduct() {
  let navigate = useNavigate();
    const [productData, setProductData] = useState({
        
        pId: '',
        cId:'',
        name: '',
        brand: '',
        category: '',
        consumer: '',
        discount: '',
        mrp: '',
        price: '',
        quantity: '',
        date: '',
        shopId: '',
  
      });
      // const {pId,cId,name,brand,category,consumer,discount,mrp,price,quantity,date,shopId} = productData ;
      const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value }) ;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post("http://localhost:8080/savedata",productData);
        navigate("/getproduct") ;
      };

      const appbarstyle={
        color: "white",
       backgroundColor: "#0E096E ",
       height: "64px", 
      }

      const paperStyle={
        width:'400px', 
        borderRadius:'25px' ,
        opacity:'0.89',
        padding:'10px',
        marginTop:'20px',
        marginBottom:'20px',
        borderColor:'Midnight Blue'

      }
      const buttonstyles ={
        color:'black',
        fontWeight:'bold',
        backgroundColor: '#a9abb1',
        borderColor:'#0480AB',
        padding:'10px',
        align:'center','&:hover': {
          backgroundColor: '#8c8e94'},
          margin:'20px',
          width:'200px'
        }

        const appbutton={
          color: 'silver', // Change to silver color
          fontWeight: 'bold',
          // backgroundColor: '#a9abb1',
          // borderColor: '#0480AB',
          padding: '10px',
          align: 'center',
          '&:hover': {
            backgroundColor: '#8c8e94',
          },
          margin: '20px',
          width: '150px', 
        }

      const paperStyle1={
        width:'950px', 
        borderRadius:'20px' ,
        opacity:'0.89',
        padding:'40px'

      }
      const labelstyle={
        marginLeft:'20px',
        fontFamily:'Barlow_Condensed variant0',
        fontSize: '18px',
        color:'midnight blue',
        fontWeight:'bold'
      }

      const boxstyle={
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
      //   display: 'flex',
      // alignItems: 'center'
      // justifyContent: 'center',
      padding:'5px'
      }
    
      const inputStyle1={
        width: '40%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'30px'
      }
      const inputStyle2={
        width: '41%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'25px'
      }
      const inputStyle3={
        width: '35%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'52px'
      }
      const inputStyle4={
        width: '36%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'54px'
      }
      const inputStyle5={
        width: '45%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'28px'
      }
      const inputStyle6={
        width: '43%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'25px'
      }
      const inputStyle={
        width: '42%',
        height: '40px',
        fontSize: '18px',
        marginBottom: '10px',
        padding: '5px',
        marginLeft:'25px'
      }
      const supermarketText = {
        marginRight: '20px',
      };
      const handleHomeClick = () => {
        navigate('/home');
      };
      const appbarbox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      };

  return (
    <div style={{background:'linear-gradient(to bottom, rgb(218, 226, 248), rgb(214, 164, 164))',height:'99vh',
    marginTop:'0px',
    padding:'5px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity:'0.9'}}>
        <div>
            <Grid align="center" >
            <AppBar position="static" sx={appbarstyle}>
            <Toolbar>
              <Box style={appbarbox}>
                <Box style={supermarketText}>
                  <Typography variant="h6" component="div">
                    SuperMarket
                  </Typography>
                </Box>
                <Button onClick={handleHomeClick} variant="text" style={appbutton} >
                  HOME
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
            <Paper variant='outlined' style={paperStyle}>
            <Typography variant="h4" color={'black'} align="center" gutterBottom fontFamily= "Fira_Sans variant0" fontWeight={'bold'} >
                    Add New Products
            </Typography>
            </Paper>
            
            <Paper variant='outlined' style={paperStyle1} >
            <form onSubmit={handleSubmit}>
                {/* <input type="id" name="id" placeholder="ID" value={formData.id} onChange={handleChange} /> */}
                <Box style={boxstyle}>
                  <Typography style={labelstyle}>Product ID:</Typography>
                  <input type="number" name="pId" placeholder="pId" style={inputStyle1} value={productData.pId} onChange={handleChange} />
                  <Typography style={labelstyle}>Category ID:</Typography>
                  <input type="number" name="cId" placeholder="cId" style={inputStyle2} value={productData.cId} onChange={handleChange} />
                </Box>
                <Box style={boxstyle}>
                  <Typography style={labelstyle}>Name:</Typography>
                  <input type="text" name="name" placeholder="name" style={inputStyle3} value={productData.name} onChange={handleChange} />
                  <Typography style={labelstyle}>Brand:</Typography>
                  <input type="text" name="brand" placeholder="brand"  style={inputStyle4}value={productData.brand} onChange={handleChange} />
                </Box>
                <Box style={boxstyle}>
                  <Typography style={labelstyle} >Category:</Typography>
                  <input type="text" name="category" placeholder="category" style={inputStyle5} value={productData.category} onChange={handleChange} />
                  <Typography style={labelstyle}>Consumer:</Typography>
                  <input type="text" name="consumer" placeholder="consumer" style={inputStyle6} value={productData.consumer} onChange={handleChange} />

                </Box>
                <Box style={boxstyle}>
                  <Typography style={labelstyle}>Discount:</Typography>
                  <input type="text" name="discount" placeholder="discount" style={inputStyle} value={productData.discount} onChange={handleChange} />
                
                  <Typography style={labelstyle}>MRP:</Typography>
                  <input type="number" name="mrp" placeholder="mrp"style={inputStyle} value={productData.mrp} onChange={handleChange} />
                
                  <Typography style={labelstyle}>Price:</Typography>
                  <input type="number" name="price" placeholder="price" style={inputStyle} value={productData.price} onChange={handleChange} />
                </Box>
                <Box style={boxstyle}>
                  <Typography style={labelstyle}>Quantity:</Typography>
                  <input type="number" name="quantity" placeholder="quantity" style={inputStyle} value={productData.quantity} onChange={handleChange} />
                
                  <Typography style={labelstyle}>Date:</Typography>
                  <input type="text" name="date" placeholder="date" style={inputStyle} value={productData.date} onChange={handleChange} />
                
                  <Typography style={labelstyle}>Shop ID:</Typography>
                  <input type="number" name="shopId" placeholder="shopId"style={inputStyle} value={productData.shopId} onChange={handleChange} /> 
                </Box>
                
                <Button type="submit" style={buttonstyles}>Add Products</Button>
                {/* <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Product
                 </Button> */}
            </form>
            {/* <Link to={'/home'}>
              <button>
                Back to Home
              </button>
            </Link> */}
            </Paper>
            {/* </Paper> */}
            </Grid>
        </div>

    </div>
  )
}
