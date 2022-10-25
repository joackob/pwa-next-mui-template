import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const title = "Vos queres crecer.\n Nosotros te queremos ayudar";
  const subtitle =
    "Crea una web con plantillas impecables, fácil edición y sin codificación.";
  const sm = useMediaQuery("min-width(600px)");

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'.' '.' 'title' 'subtitle' 'btn'",
          sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "100vh",
          md: "92vh",
        }}
      >
        <Box
          gridArea={"title"}
          alignSelf={{
            xs: "end",
            sm: "end",
          }}
          textAlign={{
            xs: "center",
            sm: "left",
          }}
        >
          <Typography variant={sm ? "h2" : "h3"} fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box
          textAlign={{
            xs: "center",
            sm: "left",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Button variant="contained">Comienza a crear</Button>
        </Box>

        <Box
          gridArea={"img"}
          sx={{
            backgroundImage: `url("https://picsum.photos/1200/800")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
    </Container>
  );
};

export default MainSection;
