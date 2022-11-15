import imgA from "../images/frameA.jpg";
import imgB from "../images/frameB.png";
import imgC from "../images/frameC.jpg";
import imgD from "../images/frameD.jpg";
import imgE from "../images/frameE.jpg";
import imgF from "../images/frameF.jpg";
import imgG from "../images/frameG.jpg";
import imgH from "../images/frameH.jpg";
import imgI from "../images/frameI.jpg";
import imgJ from "../images/frameJ.jpg";
import imgK from "../images/frameK.png";
import imgL from "../images/frameL.jpg";
import imgM from "../images/frameM.jpg";
import imgO from "../images/frameO.jpg";
import imgN from "../images/frameN.jpg";
import imgP from "../images/frameP.jpg";


const CardTwo = () => {
    return ( 
        <section className="mt-12">
        <div className="xl:flex justify-center gap-4 ml-10 xl:mr-2 md:grid md:grid-cols-2">
            <img className="mb-4" src={imgA} alt="" />
            <img className="mb-4" src={imgB} alt="" />
            <img className="mb-4" src={imgC} alt="" />
            <img className="mb-4" src={imgD} alt="" />
        </div>
        <div className="xl:flex justify-center gap-4 mt-4 ml-10 md:grid md:grid-cols-2">
            <img className="mb-4" src={imgE} alt="" />
            <img className="mb-4" src={imgF} alt="" />
            <img className="mb-4" src={imgG} alt="" />
            <img className="mb-4" src={imgH} alt="" />
        </div>
        <div className="xl:flex justify-center gap-4 mt-4 ml-10 md:grid md:grid-cols-2">
            <img className="mb-4" src={imgI} alt="" />
            <img className="mb-4" src={imgJ} alt="" />
            <img className="mb-4" src={imgK} alt="" />
            <img className="mb-4" src={imgL} alt="" />
        </div>
        <div className="xl:flex justify-center gap-4 mt-4 mb-16 ml-10 xl:mr-2 md:grid md:grid-cols-2">
            <img className="mb-4" src={imgM} alt="" />
            <img className="mb-4" src={imgO} alt="" />
            <img src={imgN} alt="" />
            <img src={imgP} alt="" />
        </div>

    </section>
     );
}
 
export default CardTwo;