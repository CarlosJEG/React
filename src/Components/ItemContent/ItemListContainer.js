import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import './ItemListContainer.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ItemListContainer({greeting}) {

  const [listProducts, setlistProducts] = useState()

  useEffect(()=>{
    const getProducts = async ()=> {
      try{
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json();
        setlistProducts(data)
      } catch {
        console.log("Error")
      }
    }
    getProducts()
  },[])

    return (
      <>
      <main className="greeting">{greeting}</main>
      {<>{listProducts === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemList listProducts={listProducts} />}</>}
      </>
    );
  }
  
export default ItemListContainer;