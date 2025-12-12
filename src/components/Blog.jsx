import BlogCard from "./BlogCard";
export default function Blog() {
  return (
    <div className="container m-auto text-center flex flex-col items-center px-2">
      <div>
        <p className="pb-7 text-gray-500 text-xl">Our Blog</p>
        <h2 className="md:text-5xl text-xl w-4/5 mx-auto leading-snug">
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div>
        <BlogCard />
      </div>
      <button className="transition-all duration-300 rounded-full bg-white hover:bg-[rgb(10,38,64)] text-[rgb(10,38,64)] hover:text-white px-7 py-4 font-bold border-2 border-[rgb(10,38,64)]">
        Load More
      </button>
    </div>
  );
}
