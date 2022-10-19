import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Item.css'

function Item ({product}) {

    return(
        <Card className='card'>
            <CardMedia 
            className='image'
            component="img"
            image={product.images[0]}
            alt={product.title}
            />
            <CardContent className='cardContent'>
            <Typography className='title'>
                {product.title}
            </Typography>
            <Typography className='description'>
                {product.description}
            </Typography>
            <Typography className='price'>
                {"$" + product.price}
            </Typography>
            <Button className='btn' variant="contained">Add To Cart</Button>
            </CardContent>
        </Card>
    );
}

export default Item;