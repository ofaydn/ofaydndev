import React, { useState, useEffect } from 'react'
import './App.css';
//import Logo from "./components/logo/index.js"
import Navbar from "./components/navbar/index.js"
function App() {
  const [count, setCount] = useState(0);

  // componentdidMount ve componentDidUpdate'e benzer bir şekilde:
  useEffect(() => {
    // Browser API kullanılarak document title güncellenir
    document.title = `You clicked ${count} times`;
    document.addEventListener("click", () => {
      setCount(count + 1);
    } );
  });
///*<Logo/>*/
  return (
    <div className='mainclass'>
      <Navbar title="homepage" link="/homepage" 
      title2="blog" link2="/blog"
      title3="arsal" link3="/arsal" />
      
    </div>
  );
}

export default App;
