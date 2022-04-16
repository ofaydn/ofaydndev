import React from "react";
import styled from "styled-components";
const Nav = styled.div`
margin: 0 auto;
width: 80%;
padding-top: 3rem;
  font-size:20px;
  display: flex;
  justify-content: space-evenly;
  a{
    text-decoration: none;
    color: #355b6d;
    transition: 0.3s;
  }
  a:hover{
      color:#42c1ba;
      transform: scale(1.4);
  }
`
export default function App(props){
    const {title,link,title2,link2,title3,link3} = props;
    return(
        <Nav>
            <a href={link}>{title}</a>
            <a href={link2}>{title2}</a>  
            <a href={link3}>{title3}</a>              
        </Nav>

    );
}