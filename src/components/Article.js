import React from "react";
 function Article (props){
  return(
    <div>
        <h3>{props.title}</h3>
        <small>{props.date}<span>{props.minutes} Minutes Read</span>
        </small>
        <p>{props.preview}</p>
    </div>
  )  
 }
 export default Article;