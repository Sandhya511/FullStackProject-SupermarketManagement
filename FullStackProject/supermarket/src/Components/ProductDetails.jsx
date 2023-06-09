import React from 'react'
import { Table,TableContainer,TableHead,TableCell,TableRow, Paper} from '@mui/material'
export default function ProductDetails() {
  return (
    <div>AddProduct
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>pId</TableCell>
            <TableCell align="right">cId</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Consumer</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Discount</TableCell>
            <TableCell align="right">MRP</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">ShopId</TableCell>

          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    </div>
   
  )
}
