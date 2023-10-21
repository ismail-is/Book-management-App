import React,{useEffect,useId,useState} from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import{Button} from '@mui/material';
import{Link,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Update() {
  const params = useParams()
  let nav=useNavigate();
  console.log(params.id,'params')
 const[update,setUpdate]=useState()
 const [single,setSingle]=useState()
 const [index,setIndex]=useState()

  let userId = params.id;

  useEffect(()=>{

    const newOne=JSON.parse(localStorage.getItem("book"))
    setUpdate(newOne);
    // const Onevalue=newOne.filter((i)=>i.id==userId)
    let select=newOne.find((obj)=>obj.id==userId)
    console.log(select,'select')
    setSingle(select);
    // console.log(Onevalue,"single")
   const  userIndex =newOne.findIndex((e)=>e.id ==useId)
   setIndex(userIndex)
  },[])
  console.log(single)

  console.log(update,"update")
  function change(e){
setSingle({...single,[e.target.name]:e.target.value});
}
const updated=async()=>{
  const updatedValue=[...update];
  updatedValue.splice(index,1,single);
  localStorage.setItem("book",JSON.stringify(updatedValue));
  await nav('/Insert');



}


    return (
      <div className="  bg-[#E8DAEF] pt-0.5 pb-3 al" >
   
   
    
      <h1 className="mt-10  text-center ">Book Update Page</h1>
        {/* <form>
        <h1 className="mt-36  text-center">Updated Page</h1>
        <input placeholder="URL" type="url"  value={single?.Url} name="Url" className=" mx-60" onChange={(e)=>change(e)}/>
        <input placeholder="Book-Name" type="text"  value={single?.BookName} name="BookName" className=" mx-60   mt-7" onChange={(e)=>change(e)}/>
        <input placeholder="Autho-Namer" type="text"  value={single?.AuthorName} name="AuthorName" className=" mx-60  mt-7" onChange={(e)=>change(e)}/>
        <input placeholder="realised-Date" type="date"  value={single?.Date} name="Date" className=" mx-60 mt-7" onChange={(e)=>change(e)}/>
        <input placeholder="Language" type="text"  value={single?.Lan} name="Lan" className=" mx-60 mt-7" onChange={(e)=>change(e)}/>
       <Link to="/View"><button onClick={updated} className="mt-9 mx-60">Update</button></Link> 
      </form> 
      
      
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
      
      <link href='https://fonts.googleapis.com/css?family=Roboto:400' rel='stylesheet' type='text/css'/> */}


      <div class="grid gap-6 mb-6 md:grid-cols-2 m-2  bg-[#E8DAEF]">
        <div className=' bg-[#E8DAEF]'>
            <label for="Url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</label>
            <input type="text" value={single?.Url} onChange={(e)=>change(e)} name="Url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Book Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
            <input type="text" value={single?.BookName}  onChange={(e)=>change(e)} name="BookName"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Author Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
            <input type="text" value={single?.AuthorName} onChange={(e)=>change(e)} name="AuthorName"    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Discription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
            <input type="text" value={single?.Discription} onChange={(e)=>change(e)} name="Discription"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" value={single?.Date}  onChange={(e)=>change(e)} name="Date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="LAnguage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
            <input type="text" value={single?.Lan}  onChange={(e)=>change(e)} name="Lan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        
        {/* <Link to="/View"><button onClick={updated} className="mt-9 mx-60 p-1 bg-[#8E44AD] rounded-full  text-white  content-center  mb-6  ">Update</button></Link> */}
        <div className="flex justify-end mb-2  bg-[#E8DAEF]">
        <Link to="/View"> <button type="button"  onClick={updated} class="rounded-md bg-[#D2B4DE] text-black pl-10 pr-10  -mx-6">Update</button></Link>
        </div>
       
       
      </div>
      </div>
    )
  }