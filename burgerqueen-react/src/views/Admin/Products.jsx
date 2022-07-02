import './Products.css';
import React, {useEffect, useState} from 'react';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';

const url='http://localhost:8080/products';

const Products = () => {

    const token = localStorage.getItem('accessToken');
    const [ data, setData ]= useState([]);

//FETCH obtención de datos
    const peticionGet = () => fetch(url,{
        method: "GET",
        headers:{
            'Content-type': 'application/json',
            'authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(json => console.log(setData(json)))
    .catch(err => console.log(err));

    console.log(data);
    console.log(data.map(d => d.name));

// muestra los datos obtenidos
    useEffect(()=>{
        peticionGet();
        console.log(data);
        console.log(data.id);
    },[])


    return(
        <div className='Table'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>DateEntry</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Tools</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(product => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.type}</TableCell>
                                <TableCell>{product.dateEntry}</TableCell>
                                <TableCell>{product.Image}</TableCell>
                                <TableCell>
                                    <Edit />
                                    &nbsp;&nbsp;&nbsp;
                                    <Delete />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Products;