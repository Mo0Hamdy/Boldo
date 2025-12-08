import Landing from "../components/landing";
import Services from "../components/Services";
import MoreServices from "../components/MoreServices";
import Pagination from "../components/Pagination";
export default function Home() {
  return (
    <div className="h-screen">
      <Landing />
      <Services />
      <MoreServices />
      <Pagination />
    </div>
  );
}
