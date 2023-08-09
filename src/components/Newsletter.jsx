import africamap from "../assets/images/openafricamap.svg";
import africamap_text from "../assets/images/africamap-text.svg";

function Newsletter(){
    return(
        <div className="bg-black w-full h-full flex items-center justify-center flex-col space-y-8">
            {/* Africamap image */}
             <div className="relative w-2/5 h-150">
             <img src={africamap} alt="africamap in lime-green color" className="w-auto" />
             <img 
             src={africamap_text} 
             alt="put your skill to work text as image" 
             className="absolute top-24 left-35" />
             </div>
            
            {/* Newsletter form */}
            <div className="w-100 h-52  px-16 py-8 bg-[#fbd24e] rounded-xl border border-amber-200 justify-center items-center flex-col space-y-8 text-center ">
            <div className="text-[#323200] text-xl font-semibold ">Subscribe to weekly our newsletter</div>
            
                <form>
                    <div className="flex space-x-2">
                        <div className="w-96 h-12 bg-white rounded-lg border border-yellow-100 ">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className=" w-96 h-12 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-[#8A8A00] "
                            placeholder="Enter Email"
                            />
                        </div>
                        <div className="text-center h-12">
                            <button type="submit" className=" bg-[#323200] hover:bg-slate-100 hover:text-[#323200] text-[#FFFFE3] text-base font-semibold leading-tight  p-3 px-10 rounded-lg z-10">Subscribe</button>
                            </div>
                        
                    </div>
                </form>
                
                
            </div>
        </div>
    )
}

export default Newsletter;