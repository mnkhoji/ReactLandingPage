import React from "react";
import Card1 from "./card.jsx";


const CardHolder1 = () => {

    const dataSet = [
        {
          title: "someTitle",
          content: "someContent",
          foot: "someFooter",
          img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: "someTitle",
            content: "someContent",
            foot: "someFooter",
            img:"https://images.unsplash.com/photo-1558929996-da64ba858215?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8fDA%3D"
          },
          {
            title: "someTitle",
            content: "someContent",
            foot: "someFooter",
            img:"https://images.unsplash.com/photo-1477973770766-6228305816df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D"
          },
          {
            title: "someTitle",
            content: "someContent",
            foot: "someFooter",
            img:"https://images.unsplash.com/photo-1444212477490-ca407925329e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3N8ZW58MHx8MHx8fDA%3D"
          }
    ]

    return (
       <div className="d-flex">
{
    dataSet.map((el,i) => <Card1 key={i} data = {el} />)
}

    
</div>
   )
}
export default CardHolder1;