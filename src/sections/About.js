import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import AvatarImg from "../assets/avatar.jpg";
import DownButton from "../components/DownButton";

function About() {
  const scrollToWork = () => {
    const workSection = document.querySelector("#work");
    workSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Grid
      container
      id={"about"}
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Grid item px={2} py={3} xs={12} sm={12} md={3}>
        <Typography
          color={"#212529"}
          sx={{
            fontWeight: "lighter",
            textTransform: "uppercase",
            writingMode: "vertical-lr",
            transform: "scale(-1)",
          }}
        >
          About
        </Typography>
        {!isMobile && (
          <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
            <DownButton
              scrollHandler={() => scrollToWork()}
              text={"work"}
              color={"#212529"}
            />
          </div>
        )}
      </Grid>
      <Grid item px={2} py={3} xs={12} sm={12} md={6}>
        <Avatar
          alt="avatar"
          src={AvatarImg}
          sx={{
            marginY: "3rem",
            marginX: "auto",
            width: 200,
            height: 200,
          }}
        />
        <Typography
          color={"#212529"}
          variant="subtitle2"
          component="h3"
          sx={{
            fontWeight: "lighter",
            textAlign: "justify!important",
            textTransform: "uppercase",
            paddingX: "0.5rem",
            paddingY: "0.2rem",
          }}
        >
          I'm a Data Scientist with a Ph.D. in Biomedical Engineering and 5+
          years of experience leading the design, development, and deployment of
          AI systems.
        </Typography>
        <Typography
          color={"#212529"}
          variant="subtitle2"
          component="h3"
          sx={{
            fontWeight: "lighter",
            textAlign: "justify!important",
            textTransform: "uppercase",
            paddingX: "0.5rem",
            paddingY: "0.2rem",
          }}
        >
          Main developer of Cegid Pulse OS, currently delivering multi-agentic
          AI workflows for Cegid's core products. Experience in data engineering
          and full project delivery for major clients. Academic experience
          includes lecturing on Data Science at the university level. Proven
          success in fast-paced environments, including winning the 8th Startup
          Braga Acceleration Program.
        </Typography>
      </Grid>
      <Grid item px={2} py={3} xs={12} sm={12} md={3} />
      {/* <Grid item xs={12} sm={12} md={8}>
            <Accordion>
                {aboutSections.map((section, index) => (
                    <AccordionDetail
                        index={index}
                        title={section.title}
                        description={section.description}
                        description2={section.description2}
                        image={section.image}
                    />
                ))}
            </Accordion>
        </Grid> */}
    </Grid>
  );
}

export default About;
