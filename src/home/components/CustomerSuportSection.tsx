import CardSection from "./CardSection";
import Image from "next/image";

const CustomerSuportSection = () => {
  return (
    <CardSection
      title="Atención al cliente. Listos 24/7."
      subtitle={`¿Queres cambiar tu catálogo mensual, semanal o diariamente? No hay problema.
              ¿Queres cambiar un detalle de tu sitio? Estamos para eso.
              ¿Atascado? No por mucho tiempo. Nuestro equipo de soporte del creador de sitios web puede ayudar, sin importar la hora del día (o la noche).`}
      withButtonCreate
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

export default CustomerSuportSection;
