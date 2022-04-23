import React, {useState} from 'react';
import styled from "styled-components";

const MainSkills = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
width: 60%;
margin: 0 auto;
padding:1rem;
  justify-content: space-evenly;
  button{
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0 auto;
    height: 2rem;
    border: 2px solid #e5e6e5;
  }
  button:hover{
    border-bottom: 2px solid #42c1ba;
  }
  button:nth-child(2):hover{
    border-bottom: 2px solid #355b6d;
  }
  button:nth-child(3):hover{
    border-bottom: 2px solid #ADA96E;
  }
  button:nth-child(4):hover{
    border-bottom: 2px solid yellow;
  }
  .buttonDiv{
    width:100%;
  }
  .contentDiv{
    position:grid;
    top:2rem;
    display: flex;
    justify-content:center ;
  }
  .contentDiv div{
    width:max-content;
    padding:1rem;
  }
  .contentDiv div ul{
    list-style-type: none;
    text-align: center;
    padding: 0;
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
           
        <div className='contentDiv'>
          {click === 1 ? <div style={{border: "2px solid #42c1ba"}}>
              <h1>front-end</h1>
              <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
              </ul>
            </div> : null}
          {click === 2 ? <div style={{border: "2px solid #355b6d"}}>
              <h1>back-end</h1>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
          </div> : null}
          {click === 3 ? <div style={{border: "2px solid #ADA96E"}}>
              <h1>oop</h1>
                <ul>              
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                </ul>
          </div> : null}
          {click === 4 ? <div style={{border: "2px solid yellow"}}>
              <h1>database</h1>
                <ul>
                    <li>MySQL</li>
                    <li>SQL</li>
                </ul>
          </div> : null}
        </div>
    </MainSkills>
  )
}
