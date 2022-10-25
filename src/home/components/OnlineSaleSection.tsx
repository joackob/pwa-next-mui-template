import {
  CheckCircle,
  Payment,
  Timeline,
  Timer,
  Web,
} from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import CardSection from "./CardSection";

const OnlineSaleSection = () => {
  const profits: { title: string; icon: JSX.Element; description: string }[] = [
    {
      title: "Configurar en minutos.",
      icon: <Timer />,
      description:
        "Utiliza nuestra plataforma eCommerce todo en uno para construir tu tienda online y comenzar las ventas hoy mismo.",
    },
    {
      title: "Vende donde sea.",
      icon: <Web />,
      description:
        "Haz que tus productos estén disponibles en tu tienda online, Instagram, Facebook y Amazon.",
    },
    {
      title: "Gestión fácil de usar.",
      icon: <CheckCircle />,
      description:
        "Desde el inventario y el envío, hasta el marketing y todo lo demás, ayudaremos a que tu negocio crezca.",
    },
    {
      title: "Haz crecer tu negocio.",
      icon: <Timeline />,
      description:
        "Libera el poder de nuestras herramientas de SEO y marketing de terceros para hacer crecer tu presencia online.",
    },
    {
      title: "Opciones de pago múltiple.",
      icon: <Payment />,
      description:
        "Mediante MercadoPago, eCommerce soporta todos los métodos de pago más populares. Desde PayPal y Visa hasta Mastercard y otros, acepta pagos en línea de todo el mundo.",
    },
  ];
  return (
    <CardSection
      title="Vende online sin tarifas sorpresa"
      subtitle="Nuestro increíble creador eCommerce tiene todo lo que necesitas para empezar, administrar y hacer crecer tu negocio sin tocar tus ganancias."
      justContent
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <List>
            {profits.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item container xs={12} md={6} direction="column">
          <Grid
            item
            flexGrow={1}
            xs={12}
            sx={{
              backgroundImage: `url("https://picsum.photos/1200/800")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Grid>
    </CardSection>
  );
};

export default OnlineSaleSection;
