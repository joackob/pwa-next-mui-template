import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import { Fragment, SyntheticEvent, useState } from "react";
import CardSection from "./CardSection";

const StepsToDeploySection = () => {
  const steps: {
    title: string;
    description: string;
    label: string;
    href: string;
  }[] = [
    {
      title: "Elige una plantilla",
      description:
        "Elige entre +100 plantillas diseñadas profesionalmente para páginas web.",
      label: "Buscar plantillas",
      href: "#",
    },
    {
      title: "Personaliza lo que quieras",
      description: "Fuentes, imágenes, texto y más.",
      label: "Aprende más",
      href: "#",
    },
    {
      title: "Crea un logotipo",
      description: "Completa tu marca con un logotipo profesional.",
      label: "Explora todas las opciones",
      href: "#",
    },
    {
      title: "Elige un dominio",
      description:
        "Usa un dominio existente o con un nuevo dominio personalizado.",
      label: "Aprende más",
      href: "#",
    },
    {
      title: "Pública",
      description:
        "Haz crecer tu presencia en línea con las herramientas de marketing y SEO.",
      label: "",
      href: "#",
    },
  ];

  const [stepExpanded, setStepExpanded] = useState<number>(0);
  const handleChange =
    (step: number) => (_: SyntheticEvent, isExpanded: boolean) => {
      setStepExpanded(isExpanded ? step : 0);
    };
  return (
    <CardSection
      title={`Crea una página web de la que estés orgulloso en ${steps.length} pasos`}
      withButtonCreate
    >
      <Fragment>
        {steps.map((item, index) => (
          <Accordion
            key={index}
            expanded={stepExpanded === index}
            onChange={handleChange(index)}
            variant="outlined"
            sx={{
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id={`${index}`}
            >
              <Typography className="title" variant="body1">{`${index + 1}. ${
                item.title
              }`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="subtitle" variant="body1">
                {item.description}
              </Typography>
              <Link
                className="link link-variant-primary"
                fontWeight="bold"
                color="inherit"
                href={item.href}
              >
                {item.label}
              </Link>
            </AccordionDetails>
          </Accordion>
        ))}
      </Fragment>
    </CardSection>
  );
};

export default StepsToDeploySection;
