import React from 'react';


const Material = (props) => {
 console.log(props.data)
 const { author,urlToImage ,publishedAt,description} = props.data;
 return (
  <div>
   <h1 className="text-primary">Details................</h1>
   <hr/>
   <div>
    <img  style={{width:'400px',height:'200px'}}   src={urlToImage} alt="" />
   </div>
   <h2>Author:{author}</h2>
   <p>Publish Date:{publishedAt}</p>
   <p>{description}</p>
   


  </div>
 );
};

export default Material;