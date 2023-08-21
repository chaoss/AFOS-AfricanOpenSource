import collaborationText from '../assets/images/collaboration-text.svg';
import afosLogo from '../assets/images/afos-faded-logo.svg';

export default function Collaboration() {
  return (
    <div className="collaboration-container pt-10 bg-[#fde68a] relative">
      {/* Section for collaboration content */}
      
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-5 md:p-10 lg:p-28 lg:pl-0 py-10">
          <h2 className="text-2xl lg:text-5xl font-semibold">
            Foster Collaboration and Knowledge Sharing
          </h2>
          <p className="text-lg py-5 font-medium">
            Kickstart expert conversations around your project. Make new connections,
            and create opportunities for collaborators to expand your projects.
          </p>
        </div>
        <div className="md:w-2/5 p-5 md:p-10 order-first md:order-last">
          <img
            src={collaborationText}
            alt="Collaboration text"
            className="w-full h-auto object-contain"
          />
        </div>
        {/*  */}
      </div>

      {/* AFOS logo */}
      <div className="text-center md:text-right mt-10">
        <img
          src={afosLogo}
          alt="AFOS logo"
          className="mt-5 md:mt-0"
        />
      </div>
    </div>
  );
}