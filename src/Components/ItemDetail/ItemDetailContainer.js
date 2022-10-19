import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ItemDetailContainer() {

    const [ProductDetail, SetProductDetail] = useState()

    useEffect(()=>{
        const getProduct = async ()=> {
            try{
                const res = await fetch("https://dummyjson.com/products")
                const data = await res.json();
                SetProductDetail(data)
            }catch{
                console.log("Error")
            }
        }
        getProduct()
    },[])

    return (
        <>{ProductDetail === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemDetail productListDetail={ProductDetail} />}</>
    )
}

export default ItemDetailContainer;