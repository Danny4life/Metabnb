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
}
`



const Navbar = () => {
    return ( 
        <Nav className="">
            <div className="flex mt-2">
                <Logo className="logo" />
            </div>
            <Burger />
                
        </Nav>
     );
}
 
export default Navbar;