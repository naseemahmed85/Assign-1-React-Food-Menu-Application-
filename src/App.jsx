import { useState } from 'react'  
import './App.css'
import HeadingComponent from './Components/HeadingComponents';
import FoodList from './Components/FoodList';
import Footer from './Components/Footer';

function App() {



  return (
    <div>
      <HeadingComponent />
      <FoodList />
      <Footer />  
    </div>
  )
}

export default App




