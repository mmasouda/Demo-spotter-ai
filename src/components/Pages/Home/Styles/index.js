import { styled, Box, createTheme } from "@mui/material";

const theme = createTheme()

export const Container = styled(Box)`
`;

export const Banner = styled(Box)`
  position: relative;
  width: 100%;
  height: 25vw;
  max-height: 288px;
  margin-bottom: 40px;
  background: url(/flights_banner.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
