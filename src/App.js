import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
//import Redux from "./components/redux/redux"


import {useState } from "react"

function App() {
  
  return (
    <div className="header">
      <Header />
      <Footer />
    
    
    </div>
  );
}
export default App;
