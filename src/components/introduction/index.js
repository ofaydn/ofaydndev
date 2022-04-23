import React from "react";
import styled from "styled-components";
import Github from "./github.png";
import Stack from "./stack.png";
import Telegram from "./telegram.png";
const Intro = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
  margin: 0 auto;
  width:100%;
  padding: 3rem 1rem;
  p{
      font-size: 2rem;
      font-weight: 100;
  }
  @media only screen and (max-width: 600px){
    padding: 0px;
    p{
      font-size: 1.6rem;
    }
  }
  `
const IntroFooter = styled.div`
  
  margin: 0 auto;
  display: flex;
  width:60%;
  @media only screen and (max-width: 600px) {
  flex-direction: column;
  .text{
    padding-left:1.5rem;
  }
}
  img:hover{
    transform: rotate(360deg);
  }
  p{
    
    font-size: 1.3rem;
    font-weight: 100;
  }
  .text{
    width: 100%;
    display: flex;
    justify-content: right;
  }
  `

const FooterLinks = styled.div`
  width: fit-content;
 display: flex;
 float: left;
 img{
    width:50px;
    height:50px;
    transition: 0.7s;
    border-radius: 50%;
    margin: rem;
  }
  a{
    text-decoration: none;
    transition: 0.3s;padding: 0 auto;
  }
  
`
const Intromain = styled.div`
margin: 0 auto;`
export default function App(props){
return(
    <Intromain>
        <Intro>
            <p>hey i'm Ömer Faruk Aydın <br/>          
    i am a student who is working to be a software developer</p>
        </Intro>
        <IntroFooter>
            <FooterLinks>
                    <a href="https://stackoverflow.com/users/14932108/ofaydn"> <img src={Stack} alt="StackOverflow"/></a>
                    <a href="https://github.com/ofaydn"> <img src={Github} alt="GitHub"/>   </a>
                    <a href="https://t.me/ofaydn"><img src={Telegram} alt="Telegram"/> </a>
            </FooterLinks>
            <div className="text">
              <p>contact[at]ofaydn[.]dev</p>
            </div>
                
            
        </IntroFooter>
    </Intromain>
    )
}