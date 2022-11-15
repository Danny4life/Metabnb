import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyleBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative; 
    top: 16px;
    right: 20px;
    z-index: 20;
    display: none;
    
    @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? "#ccc" : "#333"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        margin-left: 5rem;

        &:nth-child(1) {
            transform: ${({ open}) => open ? "rotate(45deg)" : "rotate(0)"};
        }
       
        &:nth-child(2) {
            transform: ${({ open}) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open}) => open ? 0 : 1};

        }

        &:nth-child(3) {
            transform: ${({ open}) => open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }

    @media only screen and (min-width: 1200px){
    display: none;
}
`

const Burger = () => {

   const [open, setOpen] =  useState(false);
   

  
    return ( 
        <>
            <StyleBurger open={open} onClick={() => setOpen(!open)}> 
                <div />
                <div />
                <div />
            </StyleBurger>
            <RightNav open={open} />
        </>
        
     );
}
 
export default Burger;