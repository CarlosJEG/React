import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import './ItemListContainer.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'

function ItemListContainer({greeting}) {

  const [listProducts, setlistProducts] = useState()
  const { id } = useParams();

  const productCollection = collection(db, "Products");
  const categoryProduct = query(productCollection, where('category', '==', id === undefined ? "" : id));

  useEffect(()=>{

    getDocs(id ? categoryProduct : productCollection)
    .then((result) => {
      const Products = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setlistProducts(Products);
    })
    .catch((error) => {
      console.log(error);
    })

  },[[id, productCollection, categoryProduct]])

    return (
      <>
      <main className="greeting">{greeting}</main>
      {<>{listProducts === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemList listProducts={listProducts} />}</>}
      </>
    );
  }
  
export default ItemListContainer;