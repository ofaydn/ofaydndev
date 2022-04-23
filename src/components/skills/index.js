import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const MainSkills = styled.div`
width: 60%;
margin: 0 auto;
padding:1rem;
  display: flex;
  justify-content: space-evenly;
  button{
    margin: 0.2rem auto;
    border: 0;
  }
  button:active{
    border-bottom: 2px solid #42c1ba;
  }
  `;
export default function Index() {
    const [click, setClick] = useState(0);
    const menu = (a)=>{
        setClick(a);
        console.log(click);
        
    }
  
  return (
    <MainSkills>
        <button onClick={()=>{menu(1)}}>front-end</button>
        <button onClick={()=>{menu(2)}}>back-end</button>
        <button onClick={()=>{menu(3)}}>oop</button>
        <button onClick={()=>{menu(4)}}>database</button>
        <div>
        {click === 1 ? <div>front-end</div> : null}
        {click === 2 ? <div>back-end</div> : null}
        {click === 3 ? <div>oop</div> : null}
        {click === 4 ? <div>database</div> : null}
        </div>
    </MainSkills>
  )
}
