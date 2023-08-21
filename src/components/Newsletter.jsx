import africamap from "../assets/images/openafricamap.svg";
import africamap_text from "../assets/images/africamap-text.svg";
import mobile_image from "../assets/images/mobileafricamaptext.svg";

function Newsletter(){
    return(
        <div className="bg-black w-full flex items-center justify-center flex-col">
            {/* Africamap image */}
             <div className="relative md:w-2/5 h-150 my-8">
             <img src={africamap} alt="africamap in lime-green color" className="hidden md:block w-auto" />
             <img 
             src={africamap_text} 
             alt="put your skill to work text as an image" 
             className="hidden md:block md:absolute md:top-24 md:left-35" />

             {/* Show only on mobile screens  */}
             <img
             src={mobile_image} 
             alt="put your skill to work text as an image on Mobile screen"
             className="md:hidden w-auto"/>  
             </div>
            
            {/* Newsletter form */}
            <div className="md:w-100 h-45 px-6 md:px-16 py-6 mb-8 bg-[#fbd24e] rounded-lg border border-amber-200 justify-center items-center flex-col space-y-6 text-center max-w-[90%] ">
                <div className="text-[#323200] text-sm md:text-xl font-semibold ">Subscribe to weekly our newsletter</div>
            
                <form>
                    <div className="flex space-x-2">
                        <div className="w-96 h-12 bg-white rounded-lg">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className=" md:96 w-full h-12 border-0 outline-none bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-[#8A8A00] "
                            placeholder="Enter Email"
                            />
                        </div>
                        <div className="text-center h-12">
                            <button type="submit" className="hidden md:block bg-[#323200] hover:bg-slate-100 hover:text-[#323200] text-[#FFFFE3] text-base font-semibold leading-tight  p-3 px-10 rounded-lg z-10">Subscribe</button>
                            </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;