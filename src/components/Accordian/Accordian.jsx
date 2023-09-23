import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function CustomAccordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div>
      <Accordion
        expanded={isAccordionOpen}
        onChange={toggleAccordion}
        sx={{
          boxShadow: "none",
          "& .css-xpdijk-MuiPaper-root-MuiAccordion-root": {
            boxShadow: "none",
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography
            className={`font-montserrat text-black py-2 ${
              isAccordionOpen ? "text-purple-500" : "text-black"
            }`}
          >
            Lorem ipsum dolor siiuuu consectetur adipisicing elit.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="font-montserrat text-black py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quidem eligendi deserunt veniam eius ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
