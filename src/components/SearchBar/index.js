import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import FlightIcon from '@mui/icons-material/Flight';
import { axiosReq } from "../../../axios";
import {
    Container,
    Search,
    Form,
    StyledSelect,
    StyledMenuItem,
    Input,
    AirportList,
    Btn
} from "./Styles";

export const SearchBar = () => {
    const router = useRouter();
    const [age, setAge] = useState('');
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [openOrign, setOpenOrigin] = useState(false);
    const [openDestination, setOpenDestination] = useState(false);
    const [originList, setOriginList] = useState();
    const [destinationList, setDestinationList] = useState();
    const [date, setDate] = useState();

    const fetchAirportsOrigin = async (query) => {
        try {
            const response = await axiosReq.get(
                `flights/searchAirport`, {
                params: {
                    query: query,
                    locale: 'en-US'
                }
            }
            );
            if (!response.ok) {
                setOriginList(response?.data?.data);
            }
        } catch (error) { }
    };

    const fetchAirportsDes = async (query) => {
        try {
            const response = await axiosReq.get(
                `flights/searchAirport`, {
                params: {
                    query: query,
                    locale: 'en-US'
                }
            }
            );
            if (!response.ok) {
                setDestinationList(response?.data?.data);
            }
        } catch (error) { }
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container onClick={() => { setOpenOrigin(false); setOpenDestination(false) }}>
            <Search>
                <Form>
                    <Box
                        sx={{
                            width: { xs: "100%", md: "fit-content" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "8px"
                        }}
                    >
                        <Box position="relative">
                            <Input
                                id="origin"
                                placeholder="Origin"
                                onClick={() => setOpenDestination(false)}
                                onChange={(event) => {
                                    if (event.target.value) {
                                        fetchAirportsOrigin(event.target.value);
                                        setOpenOrigin(true);
                                    } else {
                                        setOpenOrigin(false);
                                    }
                                }}
                            />
                            {openOrign && <AirportList>
                                {originList?.map((airport, index) => {
                                    if (airport?.navigation?.entityType === "AIRPORT") {
                                        return (
                                            <Box
                                                onClick={() => {
                                                    setOpenOrigin(false);
                                                    document.getElementById('origin').value = '';
                                                    document.getElementById('origin').setAttribute('placeholder', airport?.skyId);
                                                    setOrigin(airport);
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    height: "56px",
                                                    background: "#fff",
                                                    paddingInline: "12px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    height: "56px",
                                                    fontSize: "14px",
                                                    color: "#202124",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                    overflow: "hidden"
                                                }}
                                            >
                                                <FlightIcon />
                                                {airport?.presentation?.title}
                                                <span style={{ paddingLeft: "4px", color: "#70757a" }}>
                                                    {airport?.skyId}
                                                </span>
                                            </Box>
                                        )
                                    }
                                })}
                            </AirportList>
                            }
                        </Box>
                        <span style={{ color: "#3c4043" }}>to</span>
                        <Box position="relative">
                            <Input
                                id="Destination"
                                placeholder="Destination"
                                onClick={() => setOpenOrigin(false)}
                                onChange={(event) => {
                                    if (event.target.value) {
                                        fetchAirportsDes(event.target.value);
                                        setOpenDestination(true);
                                    } else {
                                        setOpenDestination(false);
                                    }
                                }}
                            />
                            {openDestination && <AirportList>
                                {destinationList?.map((airport, index) => {
                                    if (airport?.navigation?.entityType === "AIRPORT") {
                                        return (
                                            <Box
                                                onClick={() => {
                                                    setOpenDestination(false);
                                                    document.getElementById('Destination').value = '';
                                                    document.getElementById('Destination').setAttribute('placeholder', airport?.skyId);
                                                    setDestination(airport);
                                                }}
                                                sx={{
                                                    width: "100%",
                                                    height: "56px",
                                                    background: "#fff",
                                                    paddingInline: "12px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    height: "56px",
                                                    fontSize: "14px",
                                                    color: "#202124",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                    overflow: "hidden"
                                                }}
                                            >
                                                <FlightIcon />
                                                {airport?.presentation?.title}
                                                <span style={{ paddingLeft: "4px", color: "#70757a" }}>
                                                    {airport?.skyId}
                                                </span>
                                            </Box>
                                        )
                                    }
                                })}
                            </AirportList>
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: "100%", md: "fit-content" },
                            marginTop: "8px",
                            textAlign: "center"
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
                        </LocalizationProvider>
                    </Box>
                </Form>
                <Btn
                    disabled={origin == undefined || destination == undefined || date == undefined}
                    onClick={() => router.push("/search", { query: { origin: JSON.stringify(origin), destination: JSON.stringify(destination), date: JSON.stringify(date) } })}>
                    <SearchIcon />
                    Search
                </Btn>
            </Search>
        </Container>
    )
}
