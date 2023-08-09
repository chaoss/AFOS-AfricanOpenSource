import africamap from "../assets/images/openafricamap.svg";
import africamap_text from "../assets/images/africamap-text.svg";

function Newsletter(){
    return(
        <div className="bg-black w-full h-screen flex items-center justify-center">
             {/* {Newsletter letter map} */}
             <div className="relative">
             <img src={africamap} alt="africamap in lime-green color" className="w-96 h-120" />
             <img 
             src={africamap_text} 
             alt="put your skill to work text as image" 
             className="absolute top-1/2 left-35 transform  -translate-y-2/3" />
             </div>
            
        </div>
    )
}

export default Newsletter;