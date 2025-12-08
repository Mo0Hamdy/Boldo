import "/src/App.css";
import Navbar from "./Navbar";
export default function Landing() {
  return (
    <div className="h-screen lg:h-5/6">
      <Navbar />
      <div className="Landing h-full w-full flex justify-center items-center py-10">
        <div className="w-screen h-100 flex justify-evenly items-center flex-col lg:flex-row top-8 relative">
          <div className="text flex flex-col items-center w-full md:w-4/5 lg:w-2/5 px-6 my-10">
            <h2 className="text-white lg:text-start font-medium text-center text-4xl lg:text-3xl xl:text-5xl">
              Save time by building fast with Boldo Template
            </h2>
            <p className="text-white border-1 text-center lg:text-start leading-normal py-6">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="buttons w-full flex flex-col md:justify-between md:flex-row items-center sm">
              <button className="capitalize mx-2 my-2 px-12 py-4 w-80 lg:w-56 xl:w-72 font-bold text-sm rounded-full bg-emerald-300 ">
                buy template
              </button>
              <button className="capitalize mx-2 my-2 px-12 py-4 w-80 lg:w-56 xl:w-72 font-bold text-sm text-white border-2 rounded-full border-white hover:bg-white hover:text-[rgb(10,38,64)] duration-300">
                explore
              </button>
            </div>
          </div>
          <div>
            <img
              className="m-auto w-80 sm:w-[450px]"
              src="/src/assets/img/hero/hero-graphics.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
