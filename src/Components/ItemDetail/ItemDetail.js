import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';


function ItemDetail({productListDetail}) {

  const [changeBtn, setChangeBtn] = useState(true)

  const change = ()=> {
    setChangeBtn(false)
  }

    return (
        <Card className='cardCntainer'>
          <CardMedia
            className='cardImage'
            component="img"
            image={productListDetail.images[0]}
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
            {changeBtn ? <ItemCount change={change} stock={productListDetail.stock}/> : <Link to={"/cart"}><Button className='btn' variant="contained">Go to Cart</Button></Link>}
          </CardContent>
      </Card>
    );
}

export default ItemDetail;