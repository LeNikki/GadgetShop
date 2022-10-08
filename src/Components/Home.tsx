import React from 'react'
import main_img from './assets/mainpic.png'
export default function Home() {
  return (
    <div>
        <div className="home-cont">
            <section className="welcome">
                <h1>Get the latest gadget today!</h1>
                <p>All the gadgets you need in one stop shop!</p>
                <button>Shop Now!</button>
            </section>
            <img src={main_img} className="main_img" alt="main-img"/>
        </div>
        <div className="hot-picks-cont">
            <h3>Hot picks for 2022!</h3>
        </div>
    </div>
  )
}

