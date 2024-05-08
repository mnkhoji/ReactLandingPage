import React from "react";
const Card1 = (props) => {

console.log(props)

    return (
       
     <div className="card" >
  <img src={props.data.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">{props.data.content}</p>
    <a href="#" className="btn btn-primary">{props.data.foot}</a>
  </div>
</div>

   )
}
export default Card1;