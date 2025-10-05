import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "../components/TimelineItem";
import TimelineCard from "../components/TimelineCard";
import DownButton from "../components/DownButton";

const timelineItems = [
  {
    position: "Data Scientist",
    date: "Feb 2024 - Present",
    company: "Cegid",
    url: "https://cdn.brandfetch.io/idDpr0wMyN/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1690210249902",
    description:
      "Main developer of Cegid Pulse OS, a production-grade platform that currently offers multi-agentic AI workflows for Cegid products (small businesses & finance) and being beta tested with several others. Led the implementation of Cegid Pulse OS's main features, including AI workflows, context engineering, and agentic orchestration. Enabled agents to take actions in the product using either tools (APIs’ proxies) or MCP. Installed monitoring, observability, and evaluation frameworks to ensure platform performance and quality in production. Contributed to organizational growth by leading small squads, mentoring interns, and guiding technical interviews for the AI department. Presented and showcased Cegid Pulse OS to internal teams, driving adoption of Pulse OS and Generative AI across Cegid.",
  },
  {
    position: "Software Engineer",
    date: "Jun 2021 - Dec 2023",
    company: "OmniumAI",
    url: "https://www.tecminho.uminho.pt/storage/app/media/images/spinoffs/omniumai.png",
    description:
      "Co-founded the CibusAI platform, securing victory in the 8th Startup Braga Acceleration Program among a competitive pool of startups. The platform is currently piloting with clients in the food science industry. Led the end-to-end development of a genomics data platform for a major client, Chr. Hansen, including requirements gathering, solution design, technical solution development (full-stack web application and data pipelines), and deployment on the client's infrastructure. Main developer of Omnia, an automated machine learning framework for biological and chemistry predictive models, accelerating model generation and deployment for client projects. Omnia was used to accelerate CibusAI development. Engineered end-to-end data pipelines in Databricks using ETL tools to process raw biological and chemistry data into golden datasets. Created, tuned, and deployed machine learning models for CibusAI.",
  },
  {
    position: "Invited assistant professor",
    date: "Sep 2022 - Feb 2023",
    company: "University of Minho",
    url: "https://www.eng.uminho.pt/SiteAssets/ENG-EN.png",
    description:
      "Lectured on the Data Science course in both Master’s of Bioinformatics and Biomedical Engineering, covering core principles and applications for biology and chemistry. Assessed and evaluated student projects to measure technical proficiency and understanding. Lectured on the Software Engineering Labs course in the Master’s of Bioinformatics, covering Unix, Docker, and data pipelines for practical skill development.",
  },
  {
    position: "Ph.D. Researcher",
    date: "Oct 2018 - Sep 2022",
    company: "Centre of Biological Engineering (CEB)",
    url: "https://bio.di.uminho.pt/assets/img/logocebbig.png",
    description:
      "Awarded the Academic Merit Scholarship (2020) for outstanding academic performance and successfully authored and co-authored 5 peer-reviewed articles in top scientific journals. Created a computational framework for modeling and simulating biological systems.End-to-end data pipelines on-prem infrastructure using ETL tools to process raw biological data into a data warehouse. Implemented a full-stack web application and reporting tools for data visualization and analysis.",
  },
  {
    position: "Research scientist",
    date: "Feb 2018 - Sep 2018",
    company: "ITQB-UNL",
    url: "https://www.itqb.unl.pt/education/integracao-de-doutorados-nas-empresas/logo-itqb-hor-signature.png/image_preview",
    description:
      "Responsible for a novel microscopy imaging analysis technique to process complex biological data.",
  },
  {
    position: "Intern",
    date: "Feb 2017 - Jul 2017",
    company: "Chr. Hansen Holding A/S",
    url: "https://cdn.brandfetch.io/idd845HoJ-/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1714560782195",
    description:
      "Developed a novel computational model for modeling and simulating biological systems in a world-leading bioscience company.",
  },
];

function Work() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  return (
    <Grid
      container
      id={"work"}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{
        backgroundColor: "#0E4749",
        py: 5,
        px: 2,
      }}
    >
      <Grid item xs={12}>
        <Typography
          color={"#FFFFFF"}
          sx={{
            fontWeight: "lighter",
            textTransform: "uppercase",
            writingMode: "vertical-lr",
            transform: "scale(-1)",
          }}
        >
          Work
        </Typography>
      </Grid>
      {isMobile ? (
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ marginX: "auto", marginTop: "2rem" }}>
            {timelineItems.map((item) => (
              <TimelineCard {...item} />
            ))}
          </Stack>
        </Grid>
      ) : (
        <>
          <Grid item xs={1}>
            <DownButton
              scrollHandler={() => scrollToProjects()}
              text={"projects"}
              color={"#ffffff"}
            />
          </Grid>
          <Grid item xs={10}>
            <Timeline position="alternate">
              {timelineItems.map((item) => (
                <TimelineItem {...item} />
              ))}
            </Timeline>
          </Grid>
          <Grid item xs={1} />
        </>
      )}
    </Grid>
  );
}

export default Work;
