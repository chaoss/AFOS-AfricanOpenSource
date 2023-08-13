import logo from "../assets/images/afos-logo.svg";
import twitter_icon from "../assets/images/twitter-icon.svg";
import linkedin_icon from "../assets/images/linkedin-icon.svg";
import youtube_icon from "../assets/images/youtube-icon.svg";

function Footer() {
    return (
        <div className="p-5 md:p-10 lg:p-24 !pb-0 flex flex-col gap-10 bg-[#f6f1d4]">
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div className="text-[#383838] font-bold text-lg  md:flex justify-between items-center">
                <div>
                    {/* Quick Links */}
                    <div className="py-5 text-xl">Quick Link</div>
                    <div className="flex gap-5 md:gap-10 flex-wrap justify-between">
                        <div className="flex flex-col md:gap-4">
                            <div>Communities</div>
                            <div>Events</div>
                            <div>Highlights</div>
                        </div>
                        <div className="flex flex-col md:gap-4">
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                            <div>Highlights</div>
                        </div>
                        <div className="flex flex-col md:gap-4">Feedback</div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="pt-10 lg:p-0 mr-10 justify-center items-center">
                    <div>Social Media</div>
                    <div className="flex flex-wrap w-24 gap-5 py-5 ">
                        <a href="https://twitter.com/chaoss_africa?lang=en"><img src={twitter_icon} alt="twitter" /></a>
                        <a href="https://www.youtube.com/@CHAOSStube"><img src={youtube_icon} alt="youtube" /></a>
                        <a href="https://www.linkedin.com/company/chaoss/"><img src={linkedin_icon} alt="linkedin" /></a>
                    </div>
                </div>
            </div>

            <hr className="border-[#8A8A00]" />

            <div className="text-center py-5">© 2023 Afos</div>
        </div>
    );
}

export default Footer;
