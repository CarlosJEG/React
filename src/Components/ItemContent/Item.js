import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Item.css'

function Item ({products}) {

    return(
        <Card className='card'>
            <CardMedia 
            className='image'
            component="img"
            image={products.thumbnail}
            alt={products.title}
            />
            <CardContent className='cardContent'>
            <Typography className='title'>
                {products.title}
            </Typography>
            <Typography className='description'>
                {products.description}
            </Typography>
            <Typography className='price'>
                {"$" + products.price}
            </Typography>
                <Link to={"/product/" + products.id}>
                    <Button className='btn' variant="contained">More Details</Button>
                </Link>
            </CardContent>
        </Card>
    );
}

export default Item;