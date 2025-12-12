import * as React from "react";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import img from "../assets/img/offer/3.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon className="text-white bg-[rgb(10,38,64)] rounded-full" />
    }
    {...props}
  />
))(({ theme }) => ({
  borderBottom: "0.5px solid black",
  padding: "0",
  flexDirection: "row",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="container m-auto py-20 px-3">
      <img src={img} alt="" />
      <div className="flex flex-col md:flex-row py-20 items-center gap:5 lg:gap-10">
        <h2 className="text-3xl md:text-3xl w-full md:w-1/2">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="w-full md:w-1/2">
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              elevation={0}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography sx={{ fontSize: "19px" }}>
                  We connect our customers with the best?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-500">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the accordion-flush class. This is the first
                  item's accordion body.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography sx={{ fontSize: "19px" }}>
                  Android research & development rockstar?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-500">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the accordion-flush class. This is the first
                  item's accordion body.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
