import axios from "axios"
import { useState,useEffect } from "react"
import "../index.css"
import {FcSearch} from "react-icons/fc" 
import {ImBooks} from "react-icons/im"
import { Link } from "react-router-dom"

function Actioncategory(){
const [mycategory,setMycategory] = useState('Action')
const [booksdata,setBooksdata] = useState([])
const  [searchedbook,setSearchedbook] = useState([])
const  [inputbookname,setInputbookname]= useState('')

useEffect(()=>{
    async function fetchBooksoncat(){
        try {
        const response = await axios.get('http://localhost:5000/get/oncategory',{
            params:{Category:mycategory}
        })
        if(response.data.message==='All books in the db'){
        setBooksdata(response.data.data)
        }
        else{
        setBooksdata(null)
        }
           
        } catch (error) {
         console.log({error})   
        }
        
        }
  fetchBooksoncat()
},[])






//Searchbook
async function searchBookontitle(){
    try {
    const response  = await axios.get('http://localhost:5000/get/basedontitle',{
    params:{
        bookTitle:inputbookname
    }
    })
    if(response.data.message==='book found'){
    setSearchedbook(response.data.data)
    }
    else{
        setSearchedbook('No Books Found based on your search')
    }
       
    } catch (error) {
      console.log({error})  
    }
    
    }











return(
<div className="nav">
<div className="pj">
<i><ImBooks/></i>
<div className="title">
<strong style={{fontFamily:"'Unica One', sans-serif"}}>PJ BOOK STORE</strong>
</div>


</div>





<div className="intro">
<p>Welcome and thankyou for visitng us.For any query Call us on 0759857032 or Email jamesmukumu03@gmail.com</p>
</div>
<div className="fantasy"><strong>ACTION BOOKS</strong></div>

<div className="searchcont">
  
<input type="text" placeholder="Search Over 1 Million Books" onChange={(e)=>setInputbookname(e.target.value)}/>
 <i><FcSearch onClick={searchBookontitle}/> </i>  
</div>

<div className="categories">
    <div className="categories-title"><strong>Other Categories</strong></div>
     <ul>
     <li><Link to='/religion-books'>Religion</Link></li>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/fantasy-books'>Fantasy</Link></li>
      <li><Link to='/chemistry-books'>Chemistry</Link></li>
     
     </ul>

   </div>






<div>
    {searchedbook.map((item)=>(
     <div className="bookscompo">
         <div className="books">
    <img src={item.bookImage} alt="" />
    <p>Book Title:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookTitle}</span></p>
    <p>Book Price:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookPrice}</span></p>
    <p>Book Category:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.Category}</span></p>
    <p>Book size:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookSize}</span></p>
    <a href={item.bookContent} target="blank">Download Book</a>
    </div>
     </div>
    ))}
</div>
 













<div>
    {booksdata.map((item)=>(
     <div className="bookscompo">
         <div className="books">
    <img src={item.bookImage} alt="" />
    <p>Book Title:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookTitle}</span></p>
    <p>Book Price:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookPrice}</span></p>
    <p>Book Category:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.Category}</span></p>
    <p>Book size:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookSize}</span></p>
    <a href={item.bookContent} target="blank">Download Book</a>
    </div>
     </div>
    ))}
</div>










</div>


)

}

export default Actioncategory