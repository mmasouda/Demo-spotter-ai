import { styled, Box } from "@mui/material";

export const Container = styled(Box)`
  margin-top: 32px;
`;

export const FlightsBox = styled(Box)`
  padding-inline: 12px;
  margin-inline: 12px;
  margin-bottom: 16px;
  border: 1px solid #dadce0;
  border-radius: 8px;
`;

export const Flight = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 12px;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #dadce0;
  img {
    width: auto !important;
    height: 35px;
    margin-right: 12px;
  }
`;
