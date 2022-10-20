import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({productListDetail}) {

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
                {"$" + productListDetail.price}
            </Typography>
              <ItemCount stock={productListDetail.stock}/>
          </CardContent>
      </Card>
    );
}

export default ItemDetail;