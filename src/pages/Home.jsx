import Landing from "../components/landing";
import Services from "../components/Services";
import MoreServices from "../components/MoreServices";
import Pagination from "../components/Pagination";
import AccordionUsage from "../components/Accordion";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="h-screen">
      <Landing />
      <Services />
      <MoreServices />
      <Pagination />
      <AccordionUsage />
      <Blog />
      <Contact />
       <span className="capitalize py-5 text-center w-full block text-white bg-[rgb(10,38,63)] ">
          all rights reserved &copy; <span className="text-emerald-300">mohamed hamdy</span>
        </span>
    </div>
  );
}
