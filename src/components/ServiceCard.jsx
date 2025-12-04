import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ServiceCard({ imgSrc }) {
  return (
    <Card
      sx={{ /*maxWidth: 345,*/ boxShadow: "none" /*, margin: "30px"*/ }}
      className="text-center m-8 w-full md:text-start  md:max-w-80  md:m-9"
    >
      {/* <CardMedia sx={{ height: 370 }} image={imgSrc} title="green iguana" /> */}
      <img src={imgSrc} alt="img" className="m-auto w-60 md:w-fit" />
      <CardContent sx={{ padding: 0 }}>
        {/* <Typography gutterBottom  className="lg:text-4xl text-2xl">
          Cool feature title
        </Typography> */}
        <h2 className="text-2xl pt-4 pb-2">Cool feature title</h2>
        {/* <Typography
          variant="body1"
          component="p"
          sx={{ color: "text.secondary" }}
        >
          Learning curve network effects return on investment.
        </Typography> */}
        <p className="text-xl text-gray-500">
          Learning curve network effects return on investment.
        </p>
      </CardContent>
      <CardActions sx={{ paddingLeft: 0 }}>
        <a href="#" className="block m-auto md:ms-0 capitalize font-bold text-lg relative cursor-pointer after:absolute  after:-bottom-2 after:h-px after:bg-black after:w-full after:block">
          explore page <ArrowForwardIcon />{" "}
        </a>
      </CardActions>
    </Card>
  );
}
