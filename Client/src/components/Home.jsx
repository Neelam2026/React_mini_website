import { useEffect, useState } from "react";

import "../Styles/Home.css"
export const Home=()=>{
const [originaldata,setorgData]=useState([])
const [data,setData]=useState([])
const [page,setPage]=useState(1)
const [pagesize,setpagesize]=useState(12)
//let url = `http://localhost:8080/`;
let url=""
useEffect(()=>{
 const FetchData=async()=>{
  const data=await fetch(`https://reactpractice12345.herokuapp.com/?page=${page}&pagesize=${pagesize}`)
  const d= await data.json()
  setData(d.home)
  setorgData([...d.home])
  console.log("d",d.home)
}
 FetchData()
},[page])
console.log(originaldata)
const next=()=>{
   
    setPage(page+1)
    if(page+1==3)
    setPage(page)
   
}
const prev=()=>{
    if(page-1===0)
    setPage(page)
   
    else
    setPage(page-1)
}

const sortByPrice=(e)=>{
if(e.target.value==="low"){
 let d1= data.sort((a,b)=>+a.price-(+b.price) ) 
 setData([...data,d1])
}

else if(e.target.value==="high"){
 let d2= data.sort((a,b)=>+b.price-(+a.price) ) 
setData([...data,d2])
       
       
}
else{
    setData([...originaldata])  
}

}

    return (
        <div>
        <div className="pricesort">
            <select onChange={sortByPrice}>
                <option value="">sort by price</option>
                <option value="high">High to low</option>
                <option value="low">Low to high</option>
            </select>
        </div>
        <div className="container">
         { data.map((e,i)=>{
             return(
                  <div key={i} className="box">
                   <div><img src={e.img_url}></img></div>
                   <div>{e.title}</div>
                   <div>price: ₹ {e.price}</div>
                 </div>
             )
         })}
         </div>
       <div style={{}}>
          
           <button onClick={prev}>Prev</button>
           <button onClick={next}>Next</button>
       </div>
        </div>
    )
}