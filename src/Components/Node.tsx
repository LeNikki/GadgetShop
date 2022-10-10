import React from "react"
import{ Products }from "./Products"
export default function Node (props:Products){
   
    return (
        <div className="hotPicks-item">
            <img src= {props.img} alt="prod-img" className="prod-img"/>
            <section className="hotPicks-info">
                <h2 className="prod-name">{props.name}</h2>
                <p className="rating"><i className="fa-solid fa-heart"></i> {props.rating}</p>
                <p className="price">{props.price}</p>
                <button className="add-to-cart"> Add to cart </button>
            </section>
         </div>
    )
}