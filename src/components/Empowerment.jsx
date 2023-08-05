import empowerment_text from "../assets/images/empowerment-text.svg";
import afos_logo from "../assets/images/afos-faded-logo.svg";

function Empowerment() {
    return (
        <div className="pt-10 bg-[#fbd24e] relative">
            <div className="md:flex justify-center items-center">
                <div className="md:w-1/2 p-5 md:p-10 ">
                    <img src={empowerment_text} alt="Empowerment text" />
                </div>
                <div className="md:w-2/5 p-5 md:p-10 lg:p-28 lg:pl-0 py-10 ">
                    <div className="text-5xl lg:text-7xl font-semibold">
                        Get <br />
                        Empowered!
                    </div>
                    <div className="text-xl py-5 font-medium ">
                        Sharpen your skills and develop competence as you help
                        to grow the African open source ecosystem
                    </div>
                    <button className="bg-white hover:bg-slate-100 mt-5 p-3 px-10 rounded-xl font-semibold z-10">
                        Find Projects
                    </button>
                </div>
            </div>
            <img src={afos_logo} alt="afos logo" />
        </div>
    );
}

export default Empowerment;
