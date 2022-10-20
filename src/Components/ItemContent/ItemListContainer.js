import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import './ItemListContainer.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {

  const [listProducts, setlistProducts] = useState()
  const { id } = useParams();

  const URL_Base = 'https://dummyjson.com/products'
  const URL_Category = `${URL_Base}/category/${id}`

  useEffect(()=>{
    const getProducts = async ()=> {
      try{
        const res = await fetch(id ? URL_Category : URL_Base)
        const data = await res.json();
        setlistProducts(data)
      } catch {
        console.log("Error")
      }
    }
    getProducts()
  },[id, URL_Base, URL_Category])

    return (
      <>
      <main className="greeting">{greeting}</main>
      {<>{listProducts === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemList listProducts={listProducts} />}</>}
      </>
    );
  }
  
export default ItemListContainer;