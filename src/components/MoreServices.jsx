import img1 from "../assets/img/offer/1.png";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function MoreServices() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* <img className="max-w-[500px]" src={img1} /> */}
        <div className="textContent w-full md:w-1/2 ms-20">
          {/* <h2 className="text-4xl leading-normal">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2> */}
          {/* <ul className="py-10">
            <li className="py-2 text-2xl">
              <CheckCircleIcon
                style={{ fontSize: "33px" }}
                className="text-[rgb(10,38,64)]"
              />{" "}
              <span> We connect our customers with the best.</span>
            </li>
            <li className="py-2 text-2xl">
              <CheckCircleIcon
                style={{ fontSize: "33px" }}
                className="text-[rgb(10,38,64)]"
              />{" "}
              <span>Advisor success customer launch party.</span>
            </li>
            <li className="py-2 text-2xl">
              <CheckCircleIcon
                style={{ fontSize: "33px" }}
                className="text-[rgb(10,38,64)]"
              />{" "}
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul> */}
          <button className="rounded-full bg-[rgb(10,38,64)] text-white px-6 py-3 font-bold">
            Start now
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
