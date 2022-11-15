import frameone from "../images/frameone.jpg";
import frametwo from "../images/frametwo.jpg";
import framethree from "../images/framethree.jpg";
import framefour from "../images/framefour.jpg";
import framefive from "../images/framefive.jpg";
import framesix from "../images/framesix.jpg";
import frameseven from "../images/frameseven.jpg";
import frameeight from "../images/frameeight.jpg";

const CardOne = () => {
    return ( 
        <div className="">
                    <div className="ml-8 m-4">
                        <div className="mt-12 justify-center gap-4 xl:flex flex-col xl:flex-row grid grid-cols-1 sm:grid sm:grid-cols-2">
                            <img src={frameone} alt="" />
                            <img src={frametwo} alt="" />
                            <img src={framethree} alt="" />
                            <img src={framefour} alt="" />
                        </div>
                        <div className="justify-center gap-4 mt-4 xl:flex flex-col xl:flex-row grid grid-cols-1 sm:grid sm:grid-cols-2">
                            <img src={framefive} alt="" />
                            <img src={framesix} alt="" />
                            <img src={frameseven} alt="" />
                            <img src={frameeight} alt="" />
                        </div>
                     </div>
                </div>
                
     );
}
 
export default CardOne;