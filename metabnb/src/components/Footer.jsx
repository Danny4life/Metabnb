import Framenine from "../logo/Framenine";
import FacebooK from "../icon/FacebooK";
import Instagram from "../icon/Instagram";
import Twitter from "../logo/Twitter";


const Footer = () => {
    return ( 
        <footer className="max-w-full" style={{background: "#1D1D1E", width: "1440px", height: "322px"}}>
        <div className=" flex justify-between md:flex md:justify-between">
            <div className="xl:mt-14 md:mt-6 xl:ml-28 mt-40 relative left-8">
                <Framenine />
                    <div className="xl:mt-14 flex justify-around xl:mr-40 xl:mb-16  mt-4 mb-4">
                        <FacebooK className="" />
                        <Instagram />
                        <Twitter className="" />

                    </div>
                    <span className="xl:text-xs font-normal leading-4 text-white">&copy; 2022 Metabnb</span>

            </div>
            

                <div className="xl:mt-16 text-white relative right-24 mt-8 md:relative md:right-16">
                    <h2 className="text-lg xl:font-bold leading-5 xl:mb-3">Community</h2>
                    <div className="text-sm font-normal xl:leading-8">
                        <h3>NFT</h3>
                        <h3>Tokens</h3>
                        <h3>Landlords</h3>
                        <h3>Discord</h3>

                    </div>
                    
                </div>
                <div className="xl:mt-16 text-white relative right-12 mt-8">
                    <h2 className="text-lg font-bold leading-5 xl:mb-3">Places</h2>
                    <div className="text-sm font-normal xl:leading-8">
                        <h3>Castle</h3>
                        <h3>Farms</h3>
                        <h3>Beach</h3>
                        <h3>Learn more</h3>

                    </div>
                    
                </div>
                <div className="xl:mt-16 text-white xl:mr-28 relative right-4 mt-8">
                    <h2 className="text-lg xl:font-bold leading-5 xl:mb-3">About us</h2>
                    <div className="text-sm font-normal xl:leading-8">
                        <h3>Road map</h3>
                        <h3>Creators</h3>
                        <h3>career</h3>
                        <h3>Contact us</h3>

                    </div>
                    
                </div>
            
        </div>
    </footer>

     );
}
 
export default Footer;