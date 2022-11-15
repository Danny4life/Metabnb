import Navbar from "./Navbar";
import styled from "styled-components";
import img1 from "../images/imgone.jpg";
import img2 from "../images/imgtwo.jpg";
import img3 from "../images/imgthree.jpg";
import img4 from "../images/imgfour.jpg";
import Mask from "../logo/Mask";
import Token from "../logo/Token";
import Opensea from "../logo/Opensea";
import frameone from "../images/frameone.jpg";
import frametwo from "../images/frametwo.jpg";
import framethree from "../images/framethree.jpg";
import framefour from "../images/framefour.jpg";
import framefive from "../images/framefive.jpg";
import framesix from "../images/framesix.jpg";
import frameseven from "../images/frameseven.jpg";
import frameeight from "../images/frameeight.jpg";
import img12 from "../images/img12.png";
import Footer from "./Footer";



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
                    <div className="xl:flex xl:justify-between xl:mr-24 md:flex md:justify-center">
                        <div className="xl:ml-14">
                                <h1 className="text-base font-normal leading-5 tracking-tight text-black pt-8 ml-5 xl:text-6xl xl:ml-16 xl:mt-20 md:text-4xl">
                                    Rent a <span> Place </span>  
                                    away from <br /> <span>Home</span> in the <span>Metaverse</span>
                                </h1>
                                <p className="text-sm font-normal pt-6 ml-5 leading-6 text-black xl:text-2xl xl:leading-9 xl:ml-16 xl:mt-4 md:text-sm">we provide you access to luxury and affordable houses <br /> in the metaverse, 
                                get a chance to turn your <br /> imagination to reality at your comfort zone
                                </p>
                            <div className="">
                                <input type="text" placeholder="Search for location" className="mt-6 ml-5 px-3 font-normal leading-5 w-48 h-7 xl:box-border xl:w-96 xl:h-12 xl:ml-16 xl:mt-12"/>
                                <button className="w-24 h-7 text-white text-xs font-normal leading-3 xl:h-12 xl:w-56">Search</button>
                            </div>
                        </div>
                        
                        <div className="flex mt-12 gap-1 xl:gap-2 xl:mt-24 xl:mr-8">
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
                </div>
   
            </Section>
           
            <div className="max-w-full h-10 xl:h-16 flex justify-evenly content-center items-center mt-20 text-sm xl:text-4xl" style={{background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"}}>
                <div className="flex justify-center content-center items-center">
                    <Token />
                    <span className="font-bold leading-6 tracking-tight" style={{color: "#F7F7F7"}}>MBToken</span>
                 </div>
                 <div className="flex justify-center content-center items-center">
                    <Mask />
                    <span className="font-normal leading-6 tracking-tight" style={{color: "#F7F7F7"}}>METAMASK</span>
                 </div>
                 <div className="flex justify-center content-center items-center">
                    <Opensea />
                    <span className="font-bold leading-6 tracking-tight" style={{color: "#F7F7F7"}}>OpenSea</span>
                 </div>   
            </div>

            <section className="">
                <h1 className="flex justify-center mt-6 text-xl xl:text-5xl xl:leading-10 xl:mt-10 font-bold leading-8 text-black">
                    Inspiration for your next adventure
                </h1>
                <div className="">
                    <div className="ml-8 m-4">
                        <div className="mt-12 justify-center gap-4 flex flex-col xl:flex-row">
                            <img src={frameone} alt="" />
                            <img src={frametwo} alt="" />
                            <img src={framethree} alt="" />
                            <img src={framefour} alt="" />
                        </div>
                        <div className="justify-center gap-4 mt-4 flex flex-col xl:flex-row">
                            <img src={framefive} alt="" />
                            <img src={framesix} alt="" />
                            <img src={frameseven} alt="" />
                            <img src={frameeight} alt="" />
                        </div>
                     </div>
                </div>
                
            </section>

            <section className="">
                <div className="mt-16 max-w-full" style={{background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)", width: "1440px", height: "770px"}}>
                    <div className="flex justify-between flex-col xl:flex-row">
                        <div className="xl:ml-28 text-white">
                            <h1 className="xl:text-5xl xl:font-bold xl:py-40 xl:ml-0.5 xl:leading-10 mt-10 ml-6 mb-5 text-2xl font-normal">
                                Metabnb NFTs
                            </h1>

                            <p className="text-lg font-normal leading-8 xl:relative xl:bottom-24 w-full mb-5">
                                Discover our NFT gift cards collection. Loyal<br /> 
                                customers gets amazing gift cards which are<br /> 
                                traded as NFTs. These NFTs gives our cutomer<br /> 
                                access to loads of our exclusive services.
                            </p>
                            <button className="w-36 h-12 xl:py-2 xl:ml-0.5 rounded-lg bg-white text-xs font-normal leading-4 ml-6" style={{color: "#A02279"}}>Learn More</button>
                        </div>
                        <div className="mt-24 xl:mr-28">
                            <img src={img12} alt="" />
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
              
        </>
     
     );
}
 
export default Home;
