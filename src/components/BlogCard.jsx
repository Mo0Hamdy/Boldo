import img1 from "../assets/img/blog/1.png";
import img2 from "../assets/img/blog/2.png";
import img3 from "../assets/img/blog/3.png";
import img11 from "../assets/img/blog/profile1.png";
import img22 from "../assets/img/blog/profile2.png";
import img33 from "../assets/img/blog/profile3.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const data = [
  {
    img: img1,
    profileImg: img11,
    text: "Pitch termsheet backing validation focus release.",
    profileName: "Chandler Bing",
  },
  {
    img: img2,
    profileImg: img22,
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    profileName: "Rachel Green",
  },
  {
    img: img3,
    profileImg: img33,
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    profileName: "Monica Geller",
  },
];

const cards = data.map((element, index) => {
  return (
    <Card
      key={index}
      elevation={0}
      className="w-full max-w-md-[225px] lg:w-[280px] xl:w-[340px] flex flex-col md:justify-start items-center "
    >
      <img
        className="cursor-pointer w-[400px] md:w-full object-cover"
        src={element.img}
        alt=""
      />
      <CardContent sx={{padding:"0"}}>
        <div>
          <h5 className="text-gray-500 my-2 text-center md:text-left">
            <span className="font-bold text-black">Category</span> November 22,
            2021
          </h5>
          <p className=" text-xl text-center md:text-left">{element.text}</p>
        </div>
        <div className="flex mt-3 items-center justify-center md:justify-start">
          <img src={element.profileImg} alt="" />
          <h5 className="text-gray-500 ms-5">{element.profileName}</h5>
        </div>
      </CardContent>
    </Card>
  );
});

export default function BlogCard() {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-10 xl:gap-20 py-14 px-3">
      {cards}
    </div>
  );
}
