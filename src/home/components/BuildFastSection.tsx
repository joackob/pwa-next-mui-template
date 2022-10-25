import CardSection from "./CardSection";
import Image from "next/image";

const BuildFastSection = () => {
  return (
    <CardSection
      title="Construye rápido. Crece rápido. Carga más rápido"
      subtitle="Obtén una página web profesional que cargue a la velocidad de la luz. Convierte más tráfico de tu página web en clientes y clasifica entre los primeros en los motores de búsqueda."
      withButtonCreate
      reverseContent
    >
      <Image
        src="https://picsum.photos/1200/800"
        alt="Demo de una web dedicada a la indumentaria"
        height="800px"
        width="1200px"
      />
    </CardSection>
  );
};

export default BuildFastSection;
