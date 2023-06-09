import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, TableContainer,TableRow,Paper,TableHead,TableCell, TableBody } from '@mui/material';
// import ProductDetails from './ProductDetails';
import { useParams,useNavigate } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

export default function DeleteProduct() {
    const [productData,setProductData] = useState([])
    // const{pId} = useParams()
    const navigate = useNavigate();
    const { pId } = useParams();

    useEffect(()=>{
        
        loadProducts();
    },[]);
    
    const loadProducts= async(pId)=>{
        const result=await axios.get("http://localhost:8080/smdata") ;
        setProductData(result.data) ;
    }
    const handleClick = () => {
        axios.delete(`http://localhost:8080/deletedata/${pId}`, productData)
      .then(() => {
        console.log('Deleted successfully');
        navigate('/getproduct');
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
      };

  

    
  return (
    <div className='container'>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <TableCell align="justify">S.No</TableCell>
                <TableCell align="justify">Product ID</TableCell>
                <TableCell align="justify">Category ID</TableCell>
                <TableCell align="justify">Name</TableCell>
                <TableCell align="justify">Brand</TableCell>
                <TableCell align="justify">Category</TableCell>
                <TableCell align="justify">Consumer</TableCell>
                <TableCell align="justify">Discount</TableCell>
                <TableCell align="justify">MRP</TableCell>
                <TableCell align="justify">Price</TableCell>
                <TableCell align="justify">Quantity</TableCell>
                <TableCell align="justify">Date</TableCell>
                <TableCell align="justify">Shop Id</TableCell>
                <TableCell align="justify">Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    productData.map((ProductDetails,index)=>(
                        <TableRow>
                            <TableHead key={index}>{index+1}</TableHead>
                            <TableCell>{ProductDetails.pId}</TableCell>
                            <TableCell>{ProductDetails.cId}</TableCell>
                            <TableCell>{ProductDetails.name}</TableCell>
                            <TableCell>{ProductDetails.brand}</TableCell>
                            <TableCell>{ProductDetails.category}</TableCell>
                            <TableCell>{ProductDetails.consumer}</TableCell>
                            <TableCell>{ProductDetails.discount}</TableCell>
                            <TableCell>{ProductDetails.mrp}</TableCell>
                            <TableCell>{ProductDetails.price}</TableCell>
                            <TableCell>{ProductDetails.quantity}</TableCell>
                            <TableCell>{ProductDetails.date}</TableCell>
                            <TableCell>{ProductDetails.shopId}</TableCell>
                            
                            <TableCell>
                                <button  onClick={handleClick}>Delete</button>
                            </TableCell>

                        </TableRow>
                    ))
                }

            </TableBody>
                

            </Table>
        </TableContainer>

    </div>
  )
}
