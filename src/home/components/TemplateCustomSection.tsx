import { Grid } from "@mui/material";
import React from "react";
import CardSection from "./CardSection";
import Image from "next/image";

const TemplateCustomSection = () => {
  return (
    <CardSection
      title="Plantillas totalmente personalizables"
      subtitle="Plantillas creadas para satisfacer tus necesidades. Elige una plantilla y edita cualquier cosa: cambia colores, fuentes, imágenes y más. No se necesitan habilidades de codificación."
      justContent
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Image
            src="https://picsum.photos/800/1200"
            alt="Demo de una web dedicada a la indumentaria"
            height="1200px"
            width="800px"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="https://picsum.photos/800/1200"
            alt="Demo de una web dedicada a la indumentaria"
            height="1200px"
            width="800px"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="https://picsum.photos/800/1200"
            alt="Demo de una web dedicada a la indumentaria"
            height="1200px"
            width="800px"
          />
        </Grid>
      </Grid>
    </CardSection>
  );
};

export default TemplateCustomSection;
