import { useContext, useState } from 'react'
import { Context } from '../CartContext/CartContext'
import './Form.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from "../../Firebase/Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Form = () => {

    const { cart, total, clear} = useContext(Context)

    const [Name, setName] = useState("")
    const [LastName, setLastName] = useState("")
    const [DNI, setDNI] = useState(0)
    const [Email, setEmail] = useState("")
    const [Adress, setAdress] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
      };
    
    const handleLastName = (event) => {
        setLastName(event.target.value)
    };

    const handleDNI = (event) => {
        setDNI(event.target.value)
    };

    const handleEmail = (event) => {
        setEmail(event.target.value)
    };

    const handleAdress = (event) => {
        setAdress(event.target.value)
    };

    const finishBuy = ()=> {
        const buyerColletion = collection(db,"Buyer");
        addDoc(buyerColletion,{
            buyer:{
                Name: Name,
                LastName: LastName,
                DNI: DNI,
                Email: Email,
                Adress: Adress
            },
            cart,
            total,
            date:serverTimestamp()
        })
        .then(result=>{
            console.log(result.id);
          })
        .catch(e => {
          console.log(e);
        });
        clear();
      }

    return (
        <>
        <h2 className='form__title'>before continue we need some information about you according for finishing the Purchase...</h2>
        <Box className='form__container'
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '38ch' },}}
            >
            <TextField
            id="outlined-name"
            label="Name"
            onBlur={handleName}
            />
            <TextField
            id="outlined-name"
            label="Last Name"
            onBlur={handleLastName}
            />
            <TextField
            id="outlined-name"
            label="DNI"
            onBlur={handleDNI}
            />
            <TextField
            id="outlined-name"
            label="Email"
            onBlur={handleEmail}
            />
            <TextField
            id="outlined-name"
            label="Adress"
            onBlur={handleAdress}
            />
            <Button className='btnForm' variant="contained" color="error">Cancel</Button>
            <Button className='btnForm' variant="contained" color="success" onClick={finishBuy}>finish</Button>
        </Box>
      </>
    )
}

export default Form;