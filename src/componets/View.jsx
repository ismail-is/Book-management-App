import  React from 'react';

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import SingleView from './SingleView'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

   
  export default  function View() {
    const [data,setData]=useState([]);
  const[getLocal,setGetLocal]=useState([]);

  useEffect(()=>{
    const getValue=JSON.parse(localStorage.getItem('book'));
    setGetLocal(getValue);
    console.log(getValue,"getValue");
  },[data])
  const [open, setOpen] = React.useState(false);
  const[selectedUser,setSelectedUser]=useState('')

const handleOpen = (item) =>{

setOpen(true);
// console.log(item)
setSelectedUser(item)

console.log(selectedUser)
}



const handleClose = () => setOpen(false);

const [close, setClose] = useState(false);

const handledelete = (item) =>{
 setClose(true);
 setSelectedUser(item)
}
const handleClose1 = () => setClose(false);
// const [searchTerm, setSearchTerm] = useState('');

  

        // const filteredContacts = getLocal.filter((item) => {
        //   return item.BookName && item.AuthorName.toLowerCase().includes(searchTerm.toLowerCase());
        // });
    return (
      <div className=' bg-[#E8DAEF] '>
       
    
        <div className='grid grid-cols-3 gap-3 pt-5 ml-10 pb-3'>

       {getLocal.map((item)=>{
        
        return(
          <div>
         <Card style={{width: '18rem' }}>
      <Card.Img variant="top" src={item.Url} style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title>{item.BookName}</Card.Title>
        <Card.Text>
         {item.AuthorName}
        </Card.Text>
        
        <div className='flex gap-6'>
        <Link to={`/Update/${item.id}`} ><Button variant="primary" >Update</Button></Link>
        <Button onClick={()=>handledelete(item)} variant="danger">Delete</Button>
        </div>
       
       
      </Card.Body>
    </Card>
      </div>
        )
       })}
        <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box >
          <SingleView  send={selectedUser} close={handleClose}/>
        </Box>
      </Modal>
    </div>
    </div>
  
   
<Modal
  open={close}
  onClose={handleClose1}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Delete getLocal={getLocal}  setGetLocal={setGetLocal} data={selectedUser} del={handledelete} cl={handleClose1}/>

  </Box>
</Modal>
      
      </div>
    );
  }
 