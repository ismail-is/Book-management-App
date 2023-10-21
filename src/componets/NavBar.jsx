import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState ,useEffect} from 'react';

function NavBar() {
  // const[getLocal,setGetLocal]=useState([]);

  // useEffect(()=>{
  //   const getValue=JSON.parse(localStorage.getItem('book'));
  //   setGetLocal(getValue);
  //   console.log(getValue,"getValue");
  // },[])
  // const [searchTerm, setSearchTerm] = useState('');

  

        // const filteredContacts = getLocal.filter((item) => {
        //   return item.BookName && item.AuthorName.toLowerCase().includes(searchTerm.toLowerCase());
        // });
  return (
    <div className='bg-[#D2B4DE]'>
      
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-black'>Book Manage App</Navbar.Brand>
          <Nav className="me-auto   mx-96 gap-14 " >
            <Nav.Link href="/" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Home</Nav.Link>
            <Nav.Link href="/Insert" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Insert</Nav.Link>
            <Nav.Link href="/View" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>View</Nav.Link>
            <Nav.Link href="/Fav" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Favority</Nav.Link>
          </Nav>
       

      
         
        </Container>
      </Navbar>
      </div>
  );
}

export default NavBar;