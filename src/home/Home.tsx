import { Container, Stack } from "@mui/material";
import BuildFastSection from "./components/BuildFastSection";
import CustomerSuportSection from "./components/CustomerSuportSection";
import MainSection from "./components/MainSection";
import OnlineSaleSection from "./components/OnlineSaleSection";
import PlansSection from "./components/PlansSection";
import StepsToDeploySection from "./components/StepsToDeploySection";
import TemplateCustomSection from "./components/TemplateCustomSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <MainSection />
      </Container>

      <Container maxWidth={false} className="background-light">
        <Container>
          <Stack spacing={8} py={8}>
            <PlansSection />
            <StepsToDeploySection />
            <BuildFastSection />
            <CustomerSuportSection />
            <OnlineSaleSection />
            <TemplateCustomSection />
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
