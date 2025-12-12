import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "./ReviewCard";

export default function Pagination() {
  return (
    <div className="bg-[rgb(10,38,64)] py-16 px-5 md:px-10">
      <div className="m-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="text-2xl md:text-[39px] leading-normal text-white w-full md:w-2/3 lg:w-1/2">
            An enterprise template to ramp up your company website
          </h2>
          <div className="flex w-[150px] justify-evenly my-5">
            <span className="bg-white flex items-center justify-center h-16 w-16 cursor-pointer text-2xl rounded-full">
              <FontAwesomeIcon
                className="text-[rgb(10,38,64)]"
                icon={faArrowLeft}
              />
            </span>
            <span className="bg-white flex items-center justify-center h-16 w-16 cursor-pointer text-2xl rounded-full">
              <FontAwesomeIcon
                className="text-[rgb(10,38,64)]"
                icon={faArrowRight}
              />
            </span>
          </div>
        </div>
      </div>
      <ReviewCard />
    </div>
  );
}
