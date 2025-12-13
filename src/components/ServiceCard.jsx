import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ServiceCard({ imgSrc }) {
  return (
    <Card
      sx={{ boxShadow: "none" }}
      className="text-center m-8 w-full md:text-start  md:max-w-80  md:m-9"
    >
      <img src={imgSrc} alt="img" className="m-auto w-60 md:w-fit" />
      <CardContent sx={{ padding: 0 }}>
        <h2 className="text-2xl pt-4 pb-2">Cool feature title</h2>
        <p className="text-xl text-gray-500">
          Learning curve network effects return on investment.
        </p>
      </CardContent>
      <CardActions sx={{ paddingLeft: 0 }}>
        <a
          href="#"
          className="block m-auto md:ms-0 capitalize font-bold text-lg relative cursor-pointer after:absolute  after:-bottom-2 after:h-px after:bg-black after:w-full after:block"
        >
          explore page <ArrowForwardIcon />{" "}
        </a>
      </CardActions>
    </Card>
  );
}
