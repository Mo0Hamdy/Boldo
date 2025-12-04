import ServiceCard from "./ServiceCard";
import img1 from "../assets/img/services/1.png";
import img2 from "../assets/img/services/2.png";
import img3 from "../assets/img/services/3.png";

export default function Services() {
  return (
    <div className="text-center flex flex-col items-center py-24">
      <div>
        <p className="pb-7 text-gray-500 text-lg">Our Services</p>
        <h2 className="md:text-5xl text-xl w-4/5 mx-auto leading-snug">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center w-full items-center">
        <ServiceCard imgSrc={img1} />
        <ServiceCard imgSrc={img2} />
        <ServiceCard imgSrc={img3} />
          </div>
    </div>
  );
}
