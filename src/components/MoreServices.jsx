import img1 from "../assets/img/offer/1.png";
import img2 from "../assets/img/offer/2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
export default function MoreServices() {
  return (
    <div>
      <div className="container m-auto flex flex-col lg:flex-row justify-center lg:items-center items-start pb-20 px-3">
        <div className="w-full md:w-1/2 px-3 flex justify-center">
          <img src={img1} />
        </div>
        <div className="textContent w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-[39px] leading-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="pb-3">
            <li className="py-2 my-3 text-2xl leading-relaxed flex items-center">
              <CheckCircleIcon
                style={{ fontSize: "30px" }}
                className="text-[rgb(10,38,64)] me-3"
              />{" "}
              <span> We connect our customers with the best.</span>
            </li>
            <li className="py-2 my-3 text-2xl leading-relaxed flex items-center">
              <CheckCircleIcon
                style={{ fontSize: "30px" }}
                className="text-[rgb(10,38,64)] me-3"
              />{" "}
              <span>Advisor success customer launch party.</span>
            </li>
            <li className="py-2 my-3 text-2xl leading-relaxed flex items-center">
              <CheckCircleIcon
                style={{ fontSize: "30px" }}
                className="text-[rgb(10,38,64)] me-3"
              />{" "}
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul>
          <button className="rounded-full bg-[rgb(10,38,64)] text-white px-7 py-4 font-bold">
            Start now
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-center container m-auto px-3">
        <div className="textContent w-full lg:w-1/2 flex flex-col items-start justify-center ">
          <h2 className="text-3xl md:text-[39px] leading-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <ul className="w-full">
            <li className="flex items-center px-3 py-7 text-2xl md:text-2xl shadow-md my-5 hover:bg-[rgb(10,38,64)] hover:text-white transition-all duration-300 rounded rounded-5">
              <LocalFloristIcon style={{ fontSize: 30 }} className="me-3" />{" "}
              <span>We connect our customers with the best.</span>
            </li>
            <li className="flex items-center px-3 py-7 text-2xl md:text-2xl shadow-md my-5 hover:bg-[rgb(10,38,64)] hover:text-white transition-all duration-300 rounded rounded-5">
              <VisibilitySharpIcon style={{ fontSize: 30 }} className="me-3" />{" "}
              <span>Advisor success customer launch party.</span>
            </li>
            <li className="flex items-center px-3 py-7 text-2xl md:text-2xl shadow-md my-5 hover:bg-[rgb(10,38,64)] hover:text-white transition-all duration-300 rounded rounded-5">
              <Brightness7Icon style={{ fontSize: 30 }} className="me-3" />{" "}
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 px-3 flex justify-center md:justify-end">
          <img src={img2} />
        </div>
      </div>
    </div>
  );
}
