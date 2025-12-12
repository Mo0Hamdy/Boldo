import img1 from "../assets/img/review/1.png";
import img2 from "../assets/img/review/2.png";
import img3 from "../assets/img/review/3.png";

export default function ReviewCard() {
  const data = [
    {
      img: img1,
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      author: "Albus Dumbledore",
      position: "Manager @ Howarts",
    },
    {
      img: img2,
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      author: "Severus Snape",
      position: "Manager @ Slytherin",
    },
    {
      img: img3,
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      author: "Harry Potter",
      position: "Team Leader @ Gryffindor",
    },
  ];

  const card = data.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-white md:mx-5 w-full md:w-[370px] flex-shrink-0 h-[400px] flex flex-col items-start justify-between p-14 rounded-xl"
      >
        <p className="text-2xl">{item.text}</p>
        <div className="flex justify-between">
          <img
            className="me-4 hover:scale-[1.1] overflow-hidden duration-500"
            src={item.img}
            alt=""
          />
          <div>
            <h4 className="font-bold">{item.author}</h4>
            <h6 className="text-sm">{item.position}</h6>
          </div>
        </div>
      </div>
    );
  });
  return <div className="flex justify-center overflow-hidden mt-5">{card}</div>;
}
