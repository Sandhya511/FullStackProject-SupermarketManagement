import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table,TableRow,Paper,TableHead,TableCell, TableBody, Typography,  Box,TablePagination ,Button,AppBar,Toolbar} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';

export default function FetchAllProducts() {
    const [productData,setProductData] = useState([])
    const navigate = useNavigate();
    const[page,setPage] = useState(0) ;
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(()=>{

        loadProducts();
    },[]);

    const loadProducts= async()=>{
        const result=await axios.get("http://localhost:8080/smdata") ;
        setProductData(result.data) ;
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    const tableData = productData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const paperStyle={
        opacity:'0.85',
        margin: '20px',
    }
   
    const titlestyle={
        color:'dark blue',
        fontSize: '40px',
        fontFamily:'aria',
        fontWeight: 'bold',
        fontAlign:'center',
        justifyContent:"center",
        marginLeft:"80px"
    }
    const boxstyle={
        backgroundColor: 'beige',
        // padding: '10px',
        align:'center',
        padding: '10px',
        margin: '0 auto',
        justifyContent:"center",
        width: '30%', 
        border: '1px solid',
        borderColor:'black',
        marginTop:'20px',
        marginBottom:'20px'
    }
    const tableCellHeadStyle = {
        border: '1px solid black',
        textAlign: 'center',
        fontFamily: "Bebas_Neue variant0",
        fontStyle: 'normal',
        fontWeight:'bold',
        fontSize:'22px'
      };
    const tableCellStyle = {
        border: '1px solid black',
        textAlign: 'center',
        // fontFamily:'Barlow_Condensed variant0',
        fontWeight:'lighter',
        fontSize:'18px'
      };
      const appbarstyle={
        color: "white",
       backgroundColor: "#0E096E ",
       width:'100%' ,
       height: '64px',
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
      const appbarbox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        
      };
      const supermarketText = {
        marginRight: '20px',
      };
      const handleHomeClick = () => {
        navigate('/home');
      };

      const buttonStyles={
        backgroundColor:'rgb(191, 233, 255)',
        '&:hover': {
            backgroundColor: 'rgb(255, 110, 127)'},
            fontWeight:'bold',
            color:'#0E096E'
      }
  return (
    <div className='container' style={{background:'linear-gradient(to Top, rgb(185, 147, 214), rgb(140, 166, 219))',height:'99vh',
    marginTop:'0px',
    padding:'5px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity:'0.9'}}>
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
        <div container justifyContent="center" alignItems="center">
            <Box style={boxstyle}>
            <Typography style={titlestyle}>Product Details</Typography>
            </Box>
        </div>
        {/* <br/> */}
        <Paper style={paperStyle}>
         {/* <TableContainer component={Paper}>  */}
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                {/* <TableCell align="justify">S.No</TableCell> */}
                <TableCell align="justify" style={tableCellHeadStyle}>Product ID</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Category ID</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Name</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Brand</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Category</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Consumer</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Discount</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>MRP</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Price</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Quantity</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Date</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Shop Id</TableCell>
                <TableCell align="justify" style={tableCellHeadStyle}>Update</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((ProductDetails,index)=>(
                        <TableRow>
                            <TableCell style={tableCellStyle} >{ProductDetails.pId}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.cId}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.name}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.brand}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.category}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.consumer}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.discount}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.mrp}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.price}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.quantity}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.date}</TableCell>
                            <TableCell style={tableCellStyle}>{ProductDetails.shopId}</TableCell>
                            <TableCell style={tableCellStyle}>
                                 <Link to={`/updateproduct/${ProductDetails.pId}`}>
                                     <Button style={buttonStyles}>Update</Button>
                                 </Link>
                             </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
            </Table>
        {/* </TableContainer> */}
        <TablePagination
          rowsPerPageOptions={[1,2,3,4,5,7,8,9]}
          component="div"
          count={productData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>

    </div>
  )
}
