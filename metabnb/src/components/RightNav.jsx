import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
    padding: 14px 10px;
    cursor: pointer;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }


  @media only screen and (min-width: 1200px){
    li {
        font-size: 20px;
        font-weight: 400;
        color: #434343;
        line-height: 25px;
        margin: 1rem;
        margin-top: 0.5rem;
        

    }
}

`


const RightNav = ({ open }) => {

  const navigate = useNavigate();




    return ( 
        <Ul open={open}>
            <li onClick={() => navigate("/Metabnb")}>Home</li>
            <li onClick={() => navigate("/PlaceToStay")}>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
            <li className="xl:hidden lg:hidden md:hidden w-44 ml-2 h-12 rounded-lg" style={{background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"}}>Connect wallet</li>
        </Ul>
     );
}
 
export default RightNav;