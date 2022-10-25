import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const Separador = ({ simbolo }: { simbolo: string }) => (
  <span
    style={{
      color: "inherit",
      fontWeight: "bold",
    }}
  >
    &nbsp;{simbolo}&nbsp;
  </span>
);

const NavDesktop = ({
  linksLeft,
  linksRight,
}: {
  linksLeft: { label: string; href: string; icon: ReactNode }[];
  linksRight: { label: string; href: string; icon: ReactNode }[];
}) => (
  <Container sx={{ height: "8vh" }}>
    <Stack
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      direction="row"
    >
      <Breadcrumbs separator={<Separador simbolo=">" />}>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Link href="/" underline="none" color="inherit" fontWeight="bold">
            <Typography variant="inherit">NextJS</Typography>
          </Link>
        </Stack>

        {linksLeft.map((item, index) => (
          <Stack key={index} spacing={1} alignItems="center" direction="row">
            {item.icon}
            <Link
              href={item.href}
              underline="none"
              color="inherit"
              fontWeight="bold"
            >
              <Typography variant="inherit">{item.label}</Typography>
            </Link>
          </Stack>
        ))}
      </Breadcrumbs>
      <Breadcrumbs separator={<Separador simbolo="|" />}>
        {linksRight.map((item, index) => (
          <Stack key={index} spacing={1} alignItems="center" direction="row">
            {item.icon}
            <Link
              href={item.href}
              underline="none"
              color="inherit"
              fontWeight="bold"
            >
              <Typography variant="inherit">{item.label}</Typography>
            </Link>
          </Stack>
        ))}
      </Breadcrumbs>
    </Stack>
  </Container>
);

export default NavDesktop;
