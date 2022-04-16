import React from "react";
import styled from "styled-components";
const Intro = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
  margin: 0 auto;
  width:100%;
  padding: 3rem 1rem;
  p{
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
  }
  `
export default function App(props){
return(
    <Intro>
        <p>hey i'm Ömer Faruk Aydın <br/>          
i am a student who is working to be a software developer</p>
    </Intro>
    )
}