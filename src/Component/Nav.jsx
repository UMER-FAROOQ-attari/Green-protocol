import '../App.css'
import { useState } from 'react'
export default function ButtonAppBar() {
  return (<>
  <nav>
    <div className="logo">
        <h1><a href="#">GREEN PROTOCOL</a></h1>
    </div>
    <div className="list-nave">
    <div className="list-nav"><a href="#Second">Problem</a></div>
    <div className="list-nav"><a href="#Solution">Solution</a></div>
    <div className="list-nav"><a href="#Business">Busniess Model</a></div>
    <div className="list-nav"><a href="Example">Profit Distribution</a></div>
 </div>
  </nav>


  
  </>
  );
}
