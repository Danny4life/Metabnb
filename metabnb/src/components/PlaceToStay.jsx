import Location from "../icon/Location";
import CardTwo from "./CardTwo";



const PlaceToStay = () => {
    return ( 
        <>
        <header className="">
            <ul className="xl:flex md:flex md:justify-evenly md:mt-20 xl:justify-evenly xl:mt-28 xl:text-sm font-normal leading-6 ml-6 text-black cursor-pointer">
                <li className="xl:ml-10">Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>Fantansy city</li>
                <li>Beach</li>
                <li>Carbins</li>
                <li>Off-Grid</li>
                <li>Farm</li>
                <div className="w-40 h-12 rounded-lg flex justify-evenly content-center items-center mr-16 relative bottom-4 mt-8 xl:mt-1 md:mt-1 -z-10" style={{background: "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)", border: "1px solid #B4B4B4"}}>
                    <div><a href="/" className="text-xs font-normal leading-5 text-center" style={{color: "#333333"}}>Location</a></div>
                    <Location />
                </div>
                
            </ul>

        </header>
        <CardTwo />
        </>
     );
}
 
export default PlaceToStay;