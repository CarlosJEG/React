import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import './ItemCount.css'

function ItemCount(prop) {

    const {stock} = prop;

    const [Count, setCount] = useState(1)

    const add = () =>{
        if (Count < stock) {
            setCount(Count + 1)
        }
    }

    const subtract = () =>{
        if (Count > 1) {
            setCount(Count - 1)
        }
    }

    const reset = () =>{
        setCount(1)
    }

    return (
        <div className='ItemCount'>
          <TextField label="STOCK" type="number" value={Count} InputLabelProps={{shrink: true,}}/>
          <ButtonGroup variant="contained">
            <Button className='btn subtract' onClick={subtract}>-</Button>
            <Button className='AddToCart btn' onClick={reset}>Add To Cart</Button>
            <Button className='btn add' onClick={add}>+</Button>
          </ButtonGroup>
        </div>
    );
}

export default ItemCount;