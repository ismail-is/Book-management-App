
import React ,{ useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SingleView from './SingleView'
import Form from 'react-bootstrap/Form';
import StarRating from './Rating';

function Cards() {
  const handleOpen = (item) =>{

    setOpen(true);
    // console.log(item)
    setSelectedUser(item)
  
    console.log(selectedUser)
  }
  
  const [open, setOpen] = React.useState(false);
    const[selectedUser,setSelectedUser]=useState('')
    
    const handleClose = () => setOpen(false);
  
    const [close, setClose] = useState(false);
  
  const[getLocal,setGetLocal]=useState([]);

  useEffect(()=>{
    const getValue=JSON.parse(localStorage.getItem('book'));
    setGetLocal(getValue);
   
    console.log(getValue,"getValue");
  },[])
  // new local store
  const [data,setData]=useState([]);
  const Fav=()=>{
    setData(localStorage.setItem("Fav",JSON.stringify(getLocal)))
  console.log(data,"setData");

  }
  const [searchTerm, setSearchTerm] = useState('');

  

        const filteredContacts = getLocal.filter((item) => {
          return item.BookName && item.BookName.toLowerCase().includes(searchTerm.toLowerCase());
        });
  return (
    <div  >
    <div className=' bg-[#E8DAEF] flex  justify-center  ' >

<Form className=" w-96  mx-96  mt-6">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)} 
            />
             </Form>
             </div >
    <div className='grid grid-cols-3 gap-4  bg-[#E8DAEF] '>

   {filteredContacts.map((item)=>{
    return(
   
        <div className='mt-6 ml-7 mb-5' >
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '15rem' }} src={item.Url} />
      <Card.Body>
        <Card.Title>{item.BookName}</Card.Title>
        <Card.Text>
        {item.AutorName}
        </Card.Text>
        <div className='flex gap-6'>
        <div >
        <Button variant="primary" onClick={()=>handleOpen(item)}> View</Button>
        </div>
        <div >
   <Button variant="primary" onClick={Fav} >Fav</Button>
        </div>
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
    </div>
    
   
  );
}

export default Cards;