import React from 'react'

function Secondpage() {
  const titleStyle = {
    padding:"10px",
    marginBottom:"30px",
    textAlign:"center",
    background:"white",
    height: "150px",
    borderRadius:"10px 10px 10px 10px",
    boxShadow: '10px 10px 10px rgba(0.5, 0.5, 0.5, 0.5)',
    overflow:"hidden"
    }
  const style = {
    padding:"20px",
    fontStyle:"Garamond",
    background:"white",
    height: "277px",
    borderRadius:"10px 10px 10px 10px",
    overflow:"hidden",
    boxShadow: '10px 10px 10px rgba(0.5, 0.5, 0.5, 0.5)',
    
  }
  const data = JSON.parse(localStorage.getItem('Content'));

  return (
    <div>
      <div style={titleStyle}>
      <h5 style={{borderBottom:"1px solid gray",padding:"5px"}}>
Title
      </h5>
      <p>
{data.title}
      </p>
      </div>
    <div style={style}>
    <h5 style={{borderBottom:"1px solid gray",textAlign:"center",padding:"10px"}}>
Description
      </h5> 
<p>
  
  {data.body}
  
</p>    


    </div>
    </div>
  )
}

export default Secondpage