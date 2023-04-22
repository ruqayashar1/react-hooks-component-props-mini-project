import React from "react";
 function About(props){
    console.log (props);
    return(
        <aside>
            <img src={props.data.image} 
            alt ="blog logo"
            width ="215"
            height ="215"
            />
            <p>{props.data.about}</p>
        </aside>
    )
 }
 export default About;