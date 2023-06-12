import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Firstpage() {
  const navigate= useNavigate();
  
  const [arr,setArray] = useState([]);
  useEffect(() => {
    async function getdata() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');

        const Content = await data.json();
        setArray(Content);
      } catch (error) {
        console.log(error);
      }
    }

    getdata();
  }, []);

  const sortdesc=()=>{
    const sorted = [...arr].sort((a, b) => b.id - a.id);
  
    setArray(sorted);
  }
  const sortasc=()=>{
    const sorted = [...arr].sort((a, b) => a.id - b.id);
  
    setArray(sorted);
  }
  const style = {
    padding:"0px",
    background:"white",
    height: "397px",
    overflowY:"scroll",
    borderRadius:"0px 0px 0px 10px",
    boxShadow: '10px 10px 10px rgba(0.5, 0.5, 0.5, 0.5)',
    
  }
  const tableDivStyle = {

    paddingLeft:"60px",
  }
  const tableStyle={
    
    width: "95%",

  }
  const heading = {
    position:"sticky",
    top:"0px",
    background:"white",
    padding:"10px",
  }
  const nav=
    {
      display:"flex",
      justifyContent:"space-evenly",
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      height:"60px",
      background:"white",
      padding:"10px"
    }
  
  const tdStyle={
    cursor:"pointer",
    textAlign:"center",
    height:"10px",
    width:"340px",
    maxWidth:"180px",
    padding:"40px",
    paddingBottom:"10px",

    paddingTop:"15px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }
  const thStyle={
    textAlign:"center",

    height:"30px",
    width:"250px",
    padding:"10px",
    borderBottom:"3px solid gray"

  }
  
  const Content=(e)=>{
    localStorage.setItem('Content', JSON.stringify(e));
    navigate('/second');
  }

const [text,setValue] = useState('');


const changeText=(e)=>{
  let name = e.target.value;
  setValue(name);
}


  const filterData = () => {
    console.log(text);
  const filteredArray = arr.filter(obj => obj.title.includes(text));
  setArray(filteredArray);
};

  return (
    <div>
      <div style={nav}>

      <div>


<div className="d-flex" style={{height: "45px"}}>
  <input onChange={changeText} value={text} className="form-control me-1" type="search" placeholder="Search by title" aria-label="Search"/>
  <button onClick={filterData} className="btn btn-outline-success" >Search</button>
</div>



</div>



<div>
<div className="dropdown">
  <button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort Data
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <Link onClick={sortasc} to="#" className="dropdown-item">Ascending</Link>
    <Link onClick={sortdesc} to="#" className="dropdown-item"> Descending</Link>
    
  </ul>
</div>
</div>











</div>
    <div style={style}>
      
      <div style={tableDivStyle}>
  <table style={tableStyle}>
  <thead style={heading}>
  <tr>
    <th style={thStyle}>userID</th>
    <th style={thStyle}>ID</th>
    <th style={thStyle}>TITLE</th>
    <th style={thStyle}>BODY</th>
  </tr>
</thead>

      <tbody>
      

{
  arr.map((e)=>{
   return <tr onClick={() => Content(e)} key={e.id} style={{borderBottom:"1px solid gray"}}> 



<td style={tdStyle}>{e.userId}</td>
<td style={tdStyle}>{e.id}</td>
<td style={tdStyle}>{e.title}</td>
<td style={tdStyle}>{e.body}</td>


   
   
   </tr>
  })
}
</tbody>
</table>

</div>
    </div>
    </div>
  )
}

export default Firstpage