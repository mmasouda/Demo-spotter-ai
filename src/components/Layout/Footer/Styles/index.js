import { styled, Box, createTheme } from "@mui/material";

const theme = createTheme();

export const Container = styled(Box)`
  margin-inline: auto;
  margin-block: 24px;
  border-top: 1px solid #dadce0;
  ${theme.breakpoints.up("sm")} {
    max-width: 736px;
  }
  ${theme.breakpoints.up("lg")} {
    max-width: 1024px;
  }
   span {
     color: #0060f0;
     padding-left: 4px;
     cursor: pointer; 
   }
`;

export const BtnGroup = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Btn = styled("button")`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding-inline: 14px;
  margin-right: 6px;
  margin-block: 4px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 20px;
  color: #0060f0;
  cursor: pointer;
   svg {
     height: 18px;
      path {
        fill: #0060f0;
      }
   }
   p {
     font-size: .875rem;
     letter-spacing: .0107142857em;
     font-weight: 500;
     color: #202124;
   }
  :hover {
    background: #e8f0fe;
     p {
       color: #0060f0;
     }
  }
`;

export const LinksContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
   a {
     padding: 6px 10px;
     margin-top: 4px;
     color: #0060f0;
   }
`;
