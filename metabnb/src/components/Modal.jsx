import img1 from "../images/metamask.png";
import img2 from "../images/metawallet2.png";
import WalletMask from "../logo/WalletMask";



const Modal = ({ open, onClose }) => {

    if (!open){
        return null;
    }
    return ( 
        <div onClick={onClose} className="" style={{background: "blue"}}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="max-w-xl w-full h-80 fixed top-1/4 left-1/3 bg-white rounded-2xl" style={{color: "#333333"}}>
                <div className="">
                    
                    <div className="flex justify-between mt-3">
                        <span className="text-base font-bold leading-7 ml-6 border-b w-full mb-8">Connect Wallet</span>
                        <p onClick={onClose} className="mr-4 w-6 h-6 cursor-pointer" style={{color: "#434343"}}>X</p>
                    </div>
                    <div>
                        <span className="text-xs font-normal leading-5 ml-6">Choose your preferred wallet:</span>
                    </div>
                    <div className="cursor-pointer">
                        <div className="flex justify-between content-center items-center w-11/12 rounded-xl h-16 ml-6 mt-6" style={{background: "#F8F9FA", border: "1px solid #CFD8DC"}}>
                            <img src={img1} alt="" className="object-cover w-9 h-9 ml-4" />
                            <span className="text-lg font-semibold leading-6 text-black xl:relative right-44">Metamask</span>
                            <div className="flex mr-3">
                                <WalletMask />
                            </div>
                           
                        </div>
                        <div className="flex justify-between content-center items-center w-11/12 rounded-xl h-16 ml-6 mt-6" style={{background: "#F8F9FA", border: "1px solid #CFD8DC"}}>
                            <img src={img2} alt="" className="object-cover w-9 h-9 ml-4" />
                            <span className="text-lg font-semibold leading-6 text-black xl:relative right-40">WalletConnect</span>
                            <div className="flex mr-3">
                                <WalletMask />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;