import Logo from "../logo/Logo";
import Burger from "./Burger";
import styled from 'styled-components';


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


@media (max-width: 768px) {
    a {
        display: none;
    }
  }
`



const Navbar = () => {
    return ( 
        <Nav className="flex">
            <div className="flex mt-2 xl:mt-3.5 xl:ml-12">
                <Logo className="logo" />
            </div>
            <Burger />
            <a href="/" className="xl:mt-3.5 xl:w-44 xl:h-12 xl:rounded-lg xl:mr-12">Connect wallet</a>
                
        </Nav>
     );
}
 
export default Navbar;