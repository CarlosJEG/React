import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react';
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Context } from "../CartContext/CartContext"

function ItemDetail({productListDetail}) {

  const [showItemCount, setShowItemCount] = useState(true);
  const {addItem} = useContext(Context);

  const onAdd = (count)=> {
    addItem(productListDetail, count)
    setShowItemCount(false);
  }

    return (
        <Card className='cardCntainer'>
          <CardMedia
            className='cardImage'
            component="img"
            image={productListDetail.thumbnail}
            alt={productListDetail.title}
          />
          <CardContent className='cardContentDetail'>
            <Typography className='title'>
              {productListDetail.title}
            </Typography>
            <Typography className='description'>
              {productListDetail.description}
            </Typography>
            <Typography className='price'>
                {"Price: $" + productListDetail.price}
            </Typography>
            <Typography className='price'>
                {"Stock: " + productListDetail.stock}
            </Typography>
            {showItemCount ? <ItemCount onAdd={onAdd} stock={productListDetail.stock}/> : <Link to={"/cart"}><Button className='btn' variant="contained">Go to Cart</Button></Link>}
          </CardContent>
      </Card>
    );
}

export default ItemDetail;