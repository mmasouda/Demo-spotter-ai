import { styled, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

export const Container = styled(Box)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dadce0;
  z-index: 200;
`;

export const NavBar = styled(Box)`
  width: 100%;
  height: 64px;
  padding: 8px;
  background: #fff;
`;

export const Logo = styled(Grid)`
  display: flex;
  align-items: center;
  width: 160px;
  height: 48px;
  padding-right: 30px;
   img {
     height: auto;
   }
`;

export const BurgerBtn = styled(Box)`
  display: flex;
  aligh-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-inline: 4px;
  border-radius: 50%;
  cursor: pointer;
   :hover {
     background-color: rgba(60, 64, 67, .08);
   }
     path {
       fill: #5f6368;
     }
`;

export const BtnGroup = styled(Grid)`
  display: flex;
  align-items: center;
  width: calc(100% - 256px);
  height: 48px;
  padding-left: 4px;
  justify-content: space-between;
   .active {
     background: #e8f0fe;
     border: 1px solid #e8f0fe;
      p {
        color: #0060f0;
      }
   }
    svg {
      height: 18px;
      margin-inline: 8px;
      path {
        fill: #5f6368;
      }
    }
`;

export const Btn = styled("button")`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 38px;
  padding-right: 16px;
  margin-right: 6px;
  margin-block: 4px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 20px;
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

export const User = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-inlind: 12px;
  width: 96px;
  height: 48px;
   svg {
     height: 26px;
      path {
        fill: #5f6368;
      }
   }
`;

export const SideBar = styled(Box)`
  position: fixed;
  top: 65px;
  width: 256px;
  height: calc(100vh - 65px);
  background-color: #fff;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  transition: 200ms;
  .active {
    color: #0060f0;
    background-color: #e8f0fe;
    svg {
    path {
      fill: #0060f0;
    }
  }
  }
`;

export const SideBarBtn = styled(Box)`
  display: flex;
  align-items: center;
  width: min(240px, calc(100vw - 16px));
  height: 48px;
  color: #3c4043;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  svg {
    height: 24px;
    margin-inline: 24px;
    path {
      fill: #3c4043;
    }
  }
  :hover {
    background-color: #e8f0fe;
  }
`;
