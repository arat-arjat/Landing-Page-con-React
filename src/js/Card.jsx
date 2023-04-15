import React from "react";

 export const Card = (props) => {
  //console.log(props)

    return (
<div className="card" style={{width:"300px" }} >
  <img className="card-img-top" src={props.img} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title" >{props.title}</h4>
    <p className="card-text">{props.descripcion}</p>
  </div>
</div>
    );
};

//export default Card; 