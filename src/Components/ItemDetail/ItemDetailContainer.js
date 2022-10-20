import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [ProductDetail, SetProductDetail] = useState()
    const { id } = useParams();

    useEffect(()=>{
        const getProduct = async ()=> {
            try{
                const res = await fetch("https://dummyjson.com/products/" + id)
                const data = await res.json();
                SetProductDetail(data)
            }catch{
                console.log("Error")
            }
        }
        getProduct()
    },[id])

    return (
        <>{ProductDetail === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemDetail productListDetail={ProductDetail} />}</>
    )
}

export default ItemDetailContainer;