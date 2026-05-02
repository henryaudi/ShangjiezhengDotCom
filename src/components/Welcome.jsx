import { Typography, Stack, Box } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MemoryIcon from "@mui/icons-material/Memory";
import LanIcon from "@mui/icons-material/Lan";
import CustomSvgIcon from "./CustomSvgIcon";

function Welcome() {
  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4" component="h1" style={{ fontWeight: "bold" }}>
          Welcome to Shangjie (Henry) Zheng&apos;s homepage!
        </Typography>
      </div>
      <div>
        <Typography variant="body1" style={{ marginBottom: "0px" }}>
          I am an Embedded Systems & Software Engineer working with Energy
          Storage Systems {" ("}
          ESS{") "}and Battery Management Systems {"("}BMS{")"} with focus on
          controls software development and modeling. I earned my Master of
          Science degree in Computer Science at{" "}
          <a
            href="https://www.smu.edu/lyle"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#27beb4" }}
          >
            Lyle School of Engineering
          </a>
          {", "}
          <a
            href="https://www.smu.edu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#27beb4" }}
          >
            Southern Methodist University (SMU)
          </a>
          . Before attending SMU, I studied Mechanical Engineering at{" "}
          <a
            href="https://umkc.edu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#27beb4" }}
          >
            University of Missouri - Kansas City (UMKC){" "}
          </a>
          for my undergrad and was a mechanical engineer in glass manufacturing
          industry for a year right out of college.
          <br />
        </Typography>
      </div>
      <div>
        <Typography variant="body1" style={{ marginBottom: "0px" }}>
          I always see myself as a passionate advocate for embracing innovative
          technology to solve real-world challenges. My technical R&D interests
          include:
        </Typography>
      </div>
      <div style={{ paddingLeft: "2em", marginTop: "0.75em" }}>
        <Interests />
      </div>
      <div>
        For more information, please check out my CV attached here:{" "}
        <a
          href="/Shangjie_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#27beb4" }}
        >
          Shangjie_resume.pdf
        </a>
      </div>
    </Stack>
  );
}

function Interests() {
  return (
    <Stack spacing={1}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CustomSvgIcon
          path="/distributed-database.svg"
          style={{ marginRight: "0.7em" }}
        />{" "}
        Distributed Systems & Data Streaming
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CustomSvgIcon
          path="/full-stack-terminal.svg"
          style={{ marginRight: "0.7em" }}
        />{" "}
        Full-Stack Development
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CustomSvgIcon
          path="/real-time-systems.svg"
          style={{ marginRight: "0.7em" }}
        />{" "}
        Real-Time Systems Software
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CustomSvgIcon
          path="/machine-learning-svgrepo-com.svg"
          style={{ marginRight: "0.7em" }}
        />{" "}
        Applied Machine Learning Systems
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "-5px" }}>
        <Typography variant="h5">...</Typography>
      </div>
    </Stack>
  );
}

export default Welcome;
