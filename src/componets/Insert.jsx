
import { useState } from "react";
import { Input } from "@material-tailwind/react";
// import './Input.css' 
import { useNavigate } from "react-router-dom";
export default function Insert() {

    let declarID;
    let Nav=useNavigate();

   if(localStorage.getItem("book")===null){
    declarID=[];
   }else{
    declarID=JSON.parse(localStorage.getItem("book"))
   }

   const [storeData,setStoreData]=useState(declarID);



    const [data,setData]=useState();
  const[local,setLocal]=useState([]);
const Values=(e)=>{
   setData({...data,[e.target.name]:e.target.value});
   console.log(data);
}

const Insert=()=>{
    let newID=storeData.length=== 0 ? 1 : storeData[storeData.length-1].id +1 ;

    
let user={
    id:newID,
    ...data
}
const newValues=([...storeData,user]);
setLocal(newValues);
console.log(local ,"locoalla");
localStorage.setItem("book",JSON.stringify(newValues));
Nav('/View')
}

  return (
  <div className="  bg-[#E8DAEF] pt-0.5" >
   
   
    
  <h1 className="mt-10  text-center ">Book Insert Page</h1>
  {/* <input placeholder="URL" type="url"  onChange={(e)=>Values(e)} name="Url" className=" mx-60 items-center"/>
  <input placeholder="Book-Name" type="text"  onChange={(e)=>Values(e)} name="BookName" className=" mx-60   mt-7"/>
  <input placeholder="Autho-Namer" type="text"  onChange={(e)=>Values(e)} name="AuthorName" className=" mx-60  mt-7"/>
  <input placeholder="Discription" type="text"  onChange={(e)=>Values(e)} name="Discription" className=" mx-60  mt-7"/>
  <input placeholder="realised-Date" type="date"  onChange={(e)=>Values(e)} name="Date" className=" mx-60 mt-7"/>
  <input placeholder="Language" type="text"  onChange={(e)=>Values(e)} name="Lan" className=" mx-60 mt-7"/>
  <button onClick={Insert} className="mt-9 mx-60 bg-black text-white">Submit</button> */}
{/* </form>  */}

<form > 
    <div class="grid gap-6 mb-6 md:grid-cols-2 m-2 ">
        <div>
            <label for="Url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</label>
            <input type="text"  onChange={(e)=>Values(e)} name="Url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Book Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
            <input type="text"  onChange={(e)=>Values(e)} name="BookName"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Author Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
            <input type="text" onChange={(e)=>Values(e)} name="AuthorName"    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Discription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
            <input type="text"onChange={(e)=>Values(e)} name="Discription"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="Date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date"  onChange={(e)=>Values(e)} name="Date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
            <label for="LAnguage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
            <input type="text"  onChange={(e)=>Values(e)} name="Lan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      <div className="flex justify-end  mb-3">
        <button type="button"  onClick={Insert} class="rounded-md bg-[#D2B4DE] text-black pl-1 pr-10  -mx-24 ">Submit</button>
        </div>
       
    {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
    </div>
    
</form>

{/* 
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>

<link href='https://fonts.googleapis.com/css?family=Roboto:400' rel='stylesheet' type='text/css'/> */}

{/* <div > 
    <ul className="-mt-56 text-center justify-cente">
  <li className=" bg-text-[#18aa8d]">
    <a href="#">
      <i class=" " className="text-lg"  >Back</i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class=" " className="text-sm">View</i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class=" " className="text-sm">Next</i>
    </a>
  </li>
  </ul>
    </div> */}
   </div>
    
  );
}