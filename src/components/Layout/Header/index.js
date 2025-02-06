import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import LuggageIcon from '@mui/icons-material/Luggage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Container,
    NavBar,
    Logo,
    BurgerBtn,
    BtnGroup,
    Btn,
    User,
    SideBar,
    SideBarBtn
} from "./Styles";

const Header = (props) => {
    const [open, setOpen] = useState(false);

    const strings = {
        btnTravel: "Travel",
        btnExplore: "Explore",
        btnFlights: "Flights",
        btnHotels: "Hotels",
        btnVacationRent: "Vacation rentals"
    }
    return (
        <Container component="nav">
            <NavBar>
                <Grid container justifyContent="space-between">
                    <Logo>
                        <BurgerBtn onClick={() => setOpen(!open)}>
                            <MenuIcon />
                        </BurgerBtn>
                        <Image src={"/Google-Logo.png"} alt='Logo' width={74} height={24} />
                    </Logo>
                    <BtnGroup sx={{ display: { xs: "none", md: "flex" } }}>
                        <Box display="flex">
                            <Btn>
                                <LuggageIcon />
                                <Typography>
                                    {strings.btnTravel}
                                </Typography>
                            </Btn>
                            <Btn>
                                <TravelExploreIcon />
                                <Typography>
                                    {strings.btnExplore}
                                </Typography>
                            </Btn>
                            <Btn className='active'>
                                <FlightIcon />
                                <Typography>
                                    {strings.btnFlights}
                                </Typography>
                            </Btn>
                            <Btn>
                                <HotelIcon />
                                <Typography>
                                    {strings.btnHotels}
                                </Typography>
                            </Btn>
                            <Btn>
                                <HouseIcon />
                                <Typography>
                                    {strings.btnVacationRent}
                                </Typography>
                            </Btn>
                        </Box>
                        <DarkModeIcon />
                    </BtnGroup>
                    <User>
                        <AppsIcon />
                        <AccountCircleIcon />
                    </User>
                </Grid>
            </NavBar>
            <SideBar sx={{ left: open ? "0" : "-256px" }}>
                <SideBarBtn>
                    <LuggageIcon />
                    <Typography>
                        {strings.btnTravel}
                    </Typography>
                </SideBarBtn>
                <SideBarBtn>
                    <TravelExploreIcon />
                    <Typography>
                        {strings.btnExplore}
                    </Typography>
                </SideBarBtn>
                <SideBarBtn className='active'>
                    <FlightIcon />
                    <Typography>
                        {strings.btnFlights}
                    </Typography>
                </SideBarBtn>
                <SideBarBtn>
                    <HotelIcon />
                    <Typography>
                        {strings.btnHotels}
                    </Typography>
                </SideBarBtn>
                <SideBarBtn>
                    <HouseIcon />
                    <Typography>
                        {strings.btnVacationRent}
                    </Typography>
                </SideBarBtn>
            </SideBar>
        </Container>
    )
}

export default Header;
