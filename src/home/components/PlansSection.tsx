import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PlansSection = () => {
  const plans: {
    title: string;
    description: string;
    price: number;
    hrefViewMore: string;
    hrefSelectPlan: string;
  }[] = [
    {
      title: "Website",
      description: "Crea un catálogo profesional y atractivo que sorprenda.",
      price: 2990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Business",
      description:
        "Comienza a vender al instante con los elementos esenciales del eCommerce.",
      price: 5990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Advanced Store",
      description:
        "Haz crecer tu negocio con potentes herramientas de marketing.",
      price: 8990,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
  ];

  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {plans.map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  minHeight: "345px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
                elevation={4}
              >
                <CardHeader title={item.title} subheader={item.description} />
                <Box>
                  <CardContent>
                    <Typography variant="caption">Desde</Typography>
                    <Typography variant="h4" className="title">
                      {`AR$ ${item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
                    </Typography>
                    <Typography variant="caption">/mes</Typography>
                  </CardContent>
                  <CardActions></CardActions>
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      variant="contained"
                      className="button contained"
                      href={item.hrefSelectPlan}
                    >
                      Seleccionar
                    </Button>
                    <Button
                      variant="text"
                      className="button button-text"
                      href={item.hrefViewMore}
                    >
                      Ver más
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default PlansSection;
