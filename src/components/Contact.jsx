import img from "../assets/img/promo/promo-bg.png";
import img2 from "../assets/img/black-logo.png";
export default function Contact() {
  return (
    <div className="container m-auto pt-20 sm:px-3">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundColor: "rgb(10,38,64)",
        }}
        className="px-[50px] py-[100px] flex flex-col items-center"
      >
        <h2 className="text-white w-full lg:w-4/5 text-2xl sm:text-5xl text-center leading-normal">
          An enterprise template to ramp up your company website
        </h2>
        <div className="methods flex flex-col items-center lg:flex-row justify-evenly mt-14 w-full lg:w-4/5">
          <input
            type="email"
            placeholder="Your email address"
            className="px-7 py-4 rounded-full w-full lg:w-3/5 placeholder:text-black placeholder:text-xl focus:outline-none"
          />
          <button className="rounded-full hover:bg-emerald-200 transition-all duration-300 bg-emerald-300 text-[rgb(10,38,64)] text-xl px-7 py-4 font-bold mt-3">
            Start now
          </button>
        </div>
      </div>
      <footer className="mt-20 flex flex-col md:gap-10 md:flex-row align-start justify-between px-2">
        <div className="md:w-1/2">
          <img src={img2} alt="" />
          <p className="my-10 text-gray-500">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="grid grid-cols-3 md:w-1/2 gap-3">
          <div className="one">
            <h5 className="text-xl font-bold">Landings</h5>
            <ul>
              <li className="text-gray-500 my-4">
                <a href="#">Home</a>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Products</a>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="two">
            <h5 className="text-xl font-bold">Company</h5>
            <ul>
              <li className="text-gray-500 my-4">
                <a href="#">Home</a>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Careers</a>
                <span className="bg-emerald-300 text-black mx-1 p-2 font-bold rounded-full">
                  Hiring!
                </span>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="three">
            <h5 className="text-xl font-bold">Resources</h5>
            <ul>
              <li className="text-gray-500 my-4">
                <a href="#">Home</a>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Products</a>
              </li>
              <li className="text-gray-500 my-4">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
        
          </footer>
         
    </div>
  );
}
