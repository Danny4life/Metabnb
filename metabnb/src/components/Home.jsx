import Navbar from "./Navbar";
import styled from "styled-components";
import img1 from "../images/imgone.jpg";
import img2 from "../images/imgtwo.jpg";
import img3 from "../images/imgthree.jpg";
import img4 from "../images/imgfour.jpg";


const Section = styled.section`

    * {
        font-family: 'Red Rose';
        font-style: normal;
        box-sizing: border-box;
        background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
    }
    span {
        color: #A13479;

    }

    input {
        background: rgba(247, 247, 247, 0.1);
        border: 1px solid #A3A3A3;
        border-radius: 8px 0px 0px 8px;
 
    }


    button {
        background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
        border-radius: 0px 8px 8px 0px;
        font-size: 16px;
        
        
    }


    @media only screen and (min-width: 1200px){
        
        /* .container {
            position: relative;
            left: 20px;
           
        } */
}

@media (max-width: 768px) {
    br {
        display: none;
    }

    

    input::placeholder {
        color: #B8B8B8;
        font-size: 12px;
        
    }

    

  }


`

const Home = () => {
    return ( 
        <>
           <nav>
                <Navbar />
            </nav>

            <Section className="">
                <div classname="">
                    <div className="xl:flex xl:justify-between xl:mr-24">
                        <div>
                                <h1 className="text-base font-normal leading-5 tracking-tight text-black pt-8 ml-5 xl:text-6xl xl:ml-16 xl:mt-20">Rent a <span> Place </span>  
                                    away from <br /> <span>Home</span> in the <span>Metaverse</span>
                                </h1>
                                <p className="text-sm font-normal pt-6 ml-5 leading-6 text-black xl:text-2xl xl:leading-9 xl:ml-16 xl:mt-4">we provide you access to luxury and affordable houses <br /> in the metaverse, 
                                get a chance to turn your <br /> imagination to reality at your comfort zone
                                </p>
                            <div>
                                <input type="text" placeholder="Search for location" className="mt-6 ml-5 px-3 font-normal leading-5 w-48 h-7 xl:box-border xl:w-96 xl:h-12 xl:ml-16 xl:mt-12"/>
                                <button className="w-24 h-7 text-white text-xs font-normal leading-3 xl:h-12 xl:w-56">Search</button>
                            </div>
                        </div>
                        
                        <div className="flex mt-12 gap-1 xl:gap-2 xl:mt-24">
                            <div className="mt-20">
                                <img src={img1} alt="" />
                                <img src={img3} alt=""  />
                            </div>
                            <div className="">
                                <img src={img2} alt="" />
                                <img src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                    

                   

                    {/* <div className="flex mt-12 gap-1 container">
                        <div className="mt-20">
                            <img src={img1} alt="" />
                            <img src={img3} alt=""  />
                        </div>
                        <div className="">
                            <img src={img2} alt="" />
                            <img src={img4} alt="" />

                        </div>
                        
                       
                    </div> */}


                </div>
               
            </Section>
        </>
     
     );
}
 
export default Home;