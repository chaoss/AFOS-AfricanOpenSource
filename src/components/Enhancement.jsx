import enhancement_text from "../assets/images/enhancement-text.svg";
function Enhancement() {
    return (
        <div className="bg-black w-full p-5 md:p-10 lg:p-28">
            {/* Enhancement Text */}
            <img src={enhancement_text} alt="Enhancement" />
            <div className="lg:flex items-end gap-10 py-8 md:py-20 ">
                <div className="text-3xl md:text-5xl lg:text-7xl xl:w-1/2 font-semibold text-[#fbfee0]">
                    Driving Technological Advancement and Social Impact
                </div>
                <div className="text-base md:text-xl lg:text-2xl xl:w-1/3 text-[#e1e39a] py-5 lg:py-0">
                    Become a driving force for technological advancement and
                    social impact across Africa through your open source
                    contributions
                </div>
            </div>
            <div className="text-center">
                <button className="font-bold lg:text-xl bg-[#fbfee0] hover:bg-[#bec486] rounded-full p-3 px-5 lg:p-4 lg:px-10 ">
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Enhancement;
