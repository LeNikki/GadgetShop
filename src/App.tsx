import React from 'react';
import './App.css';
import './Components/style/home.css';
import './Components/style/node.css';
import './Components/style/footer.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Node from "./Components/Node"
import Footer from "./Components/Footer"
import { products } from './Components/Products';


function App() {

  const node = products.map((i)=>{
    return <Node key={i.id} {...i}/>
  })

  return (
    <div className="App">
      <div className="App">
      <Header/>
      <div className='container'>
      <Home/>
        <div className='node-container'>
          {node}
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
