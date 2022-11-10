import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'

function ItemDetailContainer() {

    const [ProductDetail, SetProductDetail] = useState()
    const { id } = useParams();

    const productCollection = collection(db, "Products");
    const refDoc = doc(productCollection, id);

    useEffect(()=>{

        getDoc(refDoc)
        .then((result) => {
            SetProductDetail({
                id: result.id,
                ...result.data()
            });
        })
        .catch((error) => {
          console.log(error);
        })
    
      },[id]);

    return (
        <>{ProductDetail === undefined ? <Box sx={{ display: 'flex', justifyContent: 'center',  marginTop: 10}}><CircularProgress /></Box> : <ItemDetail productListDetail={ProductDetail} />}</>
    )
}

export default ItemDetailContainer;