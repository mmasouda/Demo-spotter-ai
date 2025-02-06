import { styled, Box, Select, MenuItem, createTheme } from "@mui/material";

const theme = createTheme();

export const Container = styled(Box)`
  width: 100%;
  max-width: 736px;
  padding-inline: 16px;
  margin-inline: auto;
  ${theme.breakpoints.up("md")} {
    max-width: 1024px;
  }
`

export const Search = styled(Box)`
  position: relative;
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px 48px;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15);
`;

export const Form = styled(Box)`
  display: block;
  ${theme.breakpoints.up("md")} {
    display: flex;
  }
`;

export const StyledSelect = styled(Select)`
  height: 36px;
  color: #3c4043;
  font-size: 12px;
  border-radius: 8px;
  :hover {
      background-color: #e8f0fe;
    }
  fieldset {
    border: none;
  }
`;

export const StyledMenuItem = styled(MenuItem)``;

export const Input = styled("input")`
  font-size: 16px;
  color: #3c4043;
  padding: 8px 16px;
  border: 1px solid #dadce0;
  border-radius: 4px;
  :focus {
    outline: none;
  }
  ${theme.breakpoints.up("xs")} {
    width: 100%;
    height: 48px;
  }
  ${theme.breakpoints.up("md")} {
    width: 280px;
    height: 56px;
    margin-inline: 8px;
  }
`;

export const AirportList = styled(Box)`
  position: absolute;
  width: calc(100% - 16px);
  height: fit-content;
  max-height: 250px;
  margin-inline: 8px;
  border-radius: 4px;
  overflow: auto;
  box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  z-index: 100;
  .MuiAccordion-root:before {
    background: transparent;
    box-shadow: none;
  }
  svg {
    path {
      fill: #5f6368;
    }
  }
`;

export const Btn = styled("button")`
  position: absolute;
  display: flex;
  align-items: center;
  margin-inline: auto;
  right:0;
  left: 0;
  bottom: -20px;
  justify-content: center;
  width: 105px;
  height: 40px;
  color: #fff;
  padding: 0 16px 0 12px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  background-color: rgb(26, 115, 232);
  cursor: pointer;
  :disabled {
    opacity: 0.7;
  }
`;
