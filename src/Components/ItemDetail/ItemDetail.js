import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({productListDetail}) {

    const {products} = productListDetail
    const [product] = products

    console.log(product);

    return (
        <Card className='cardCntainer'>
          <CardMedia
            className='cardImage'
            component="img"
            image={product.images[0]}
            alt={product.title}
          />
          <CardContent className='cardContentDetail'>
            <Typography className='title'>
              {product.title}
            </Typography>
            <Typography className='description'>
              {product.description}
            </Typography>
            <Typography className='price'>
                {"$" + product.price}
            </Typography>
            <ItemCount stock={12}/>
          </CardContent>
      </Card>
    );
}

export default ItemDetail;