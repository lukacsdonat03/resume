import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ marginTop: "55px" , boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>1.Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you want to get to know me the click <a href="#me">here</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
              <li>
                Programming Languages
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>PHP(basics)</li>
                  <li>
                    HTML5-CSS (I know these are not programming languages)
                  </li>
                </ul>
              </li>
              <li>
                Database
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </li>
              <li>
                Frameworks
                <ul>
                  <li>React</li>
                  <li>Spring Boot</li>
                  <li>NodeJs</li>
                  <li>ExpressJs</li>
                  <li>Laravel(same level as php)</li>
                </ul>
              </li>
              <li>
                Supplements
                <ul>
                  <li>Material UI</li>
                  <li>Sequelize ORM</li>
                  <li>React Bootstrap - Bootsrap</li>
                </ul>
              </li>
              <li>
                Other Skills
                <ul>
                  <li>REST API</li>
                  <li>JSON</li>
                  <li>MS Office</li>
                  <li>Git-Github</li>
                  <li>Postman</li>
                  <li>Swagger</li>
                </ul>
              </li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have language exam in English (B2).
            <br />
            I'm also fluent in Hungarian as it is my motherlanguage.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion
             expanded={expanded === "panel4"}
             onChange={handleChange("panel4")}
        >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Expreimence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            So this is a critical point in my CV. I am just finished the school so I do not have any working experience in this occuaption.
            I can mention a project that was necessary for one of my exams. It was a poject work where We need to develop a Restful webapp. 
            This project was a team project although I developed the most of the project (about 90%).
            It is React Express webapp with MySQL database. The topic of the webpage is fitness.
            You can find this project on <Link to={"https://github.com/lukacsdonat03/EasyEffort"}>Github</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Container>
  );
}
