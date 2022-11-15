import Framenine from "../logo/Framenine";
import FacebooK from "../icon/FacebooK";
import Instagram from "../icon/Instagram";
import Twitter from "../logo/Twitter";


const Footer = () => {
    return ( 
        <footer className="max-w-full" style={{background: "#1D1D1E", width: "1440px", height: "322px"}}>
        <div className=" xl:flex xl:justify-between">
            <div className="xl:mt-12 xl:ml-28">
                <Framenine />
                    <div className="xl:mt-14 xl:flex xl:justify-around xl:mr-40 xl:mb-16">
                        <FacebooK />
                        <Instagram />
                        <Twitter />

                    </div>
                    <span className="xl:text-xs font-normal leading-4 text-white">&copy; 2022 Metabnb</span>

            </div>
            

                <div className="xl:mt-16 text-white">
                    <h2 className="xl:text-lg xl:font-bold leading-5 xl:mb-3">Community</h2>
                    <div className="text-sm font-normal xl:leading-8">
                        <h3>NFT</h3>
                        <h3>Tokens</h3>
                        <h3>Landlords</h3>
                        <h3>Discord</h3>

                    </div>
                    
                </div>
                <div className="xl:mt-16 text-white">
                    <h2 className="xl:text-lg font-bold leading-5 xl:mb-3">Places</h2>
                    <div className="text-sm font-normal xl:leading-8">
                        <h3>Castle</h3>
                        <h3>Farms</h3>
                        <h3>Beach</h3>
                        <h3>Learn more</h3>

                    </div>
                    
                </div>
                <div className="xl:mt-16 text-white xl:mr-28">
                    <h2 className="xl:text-lg xl:font-bold leading-5 xl:mb-3">About us</h2>
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