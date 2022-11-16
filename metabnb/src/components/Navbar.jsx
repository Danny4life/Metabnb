import Logo from "../logo/Logo";
import Burger from "./Burger";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    padding: 15px 0;
  }

  @media only screen and (min-width: 1200px){
    border-bottom: none;
    

    a {
        background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        //text-align: center;
        align-items: center;
        display: flex;
        align-content: center;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        justify-content: center;
        
        
    }

    
}


@media only screen and (min-width: 768px){
    border-bottom: none;
    

    a {
        background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
        align-items: center;
        display: flex;
        align-content: center;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        justify-content: center;    
    }

    
}

@media (max-width: 768px) {
    a {
        display: none;
        
    }
  }
`



const Navbar = () => {

    const [openModal, setOpenModal] = useState(false);
    return ( 
        <Nav className="flex">
            <div className="flex mt-2 xl:mt-3.5 xl:ml-24">
                <Logo className="logo" />
            </div>
            <Burger />
            <Link onClick={() => setOpenModal(true)} className="xl:mt-3.5 xl:w-44 xl:h-12 xl:rounded-lg xl:relative xl:left-9 md:rounded-lg md:w-44 md:h-12 md:mt-3.5">Connect wallet</Link>
            <div className="">
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>        
        </Nav>
     );
}
 
export default Navbar;