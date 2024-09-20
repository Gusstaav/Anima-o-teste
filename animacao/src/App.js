import logo from './logo.svg';
import {useState} from "react";

import './App.css';

function App() {
 
  return (
   <div id="container">
      <button id="butao"onClick={function(){
      document.getElementById('surpresa').style.display='none'

        
        
      }} ><p>Não clique aqui</p></button>
      <div id="surpresa">kkkk</div>
   </div>
  );
}



export default App;
