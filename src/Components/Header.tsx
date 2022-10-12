import React from "react";
import n_logo from "./assets/n-logo.png";
import search_icon from "./assets/search-icon.png"
import cart_icon from "./assets/cart-icon.png"

export default function Header (){
    return(
        <div className="header">

                <img src={n_logo} className="n-logo" alt="n-logo"/>
           
                <nav className="nav-bar">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                    </ul>
                </nav>
                <section className="search">
                    <input className="search-in"/>
                    <img src={search_icon} className="search_icon" alt="search_icon"/>
                    <img src={cart_icon} className="cart_icon" alt="cart_icon"/>
                </section>
        </div>
    )
}