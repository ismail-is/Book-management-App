import React ,{useState,useEffect}from 'react'
import StarRating from './Rating';
import Button from 'react-bootstrap/Button';
import Remove from './Remove';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import SingleView from './SingleView'
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

export default function Fav() {
    const[getLocal,setGetLocal]=useState([]);

    useEffect(()=>{
      const getValue=JSON.parse(localStorage.getItem('Fav'));
      setGetLocal(getValue);
     
      console.log(getValue,"getValue");
    },[])
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
    // const Btn=()=>{
    //   localStorage.removeItem("Fav")
    // }
    
  return (
     < div className='grid grid-cols-3 gap-4  bg-[#E8DAEF] '>
        {getLocal.map((item)=>{
            return(
              <div className='mt-6 ml-7 mb-5'>

              <div className='mt-6 ml-7 mb-5' >
                <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top"  style={{ height: '15rem' }} src={item.Url} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text" className='font-semibold'> BookName :- {item.BookName}</p>
                  <p class="card-text" className='font-semibold'> AuthorName :- {item.AuthorName}</p>
                  <p class="card-text" className='font-semibold'> Date :- {item.Date}</p>
                </div>
                
                  <div className='flex justify-center mb-2'>
                  {/* <Button  variant="danger" onClick={Btn}>Delete</Button> */}
                  <Button  variant="danger" onClick={()=>handledelete(item)} >Remove </Button>

                  </div>
              </div>
              </div>
              <Modal
  open={close}
  onClose={handleClose1}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Remove getLocal={getLocal}  setGetLocal={setGetLocal} data={selectedUser} del={handledelete} cl={handleClose1}/>

  </Box>
</Modal>
              </div>
            )
        })}
      
       
    </div>
  )
}
