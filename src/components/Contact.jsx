import img from "../assets/img/promo/promo-bg.png";
export default function Contact() {
  return (
    <div className="container m-auto py-20">
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
    </div>
  );
}
