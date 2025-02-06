import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { axiosReqV2 } from "../../../../axios";
import { SearchBar } from "../../../components";
import {
    Container,
    FlightsBox,
    Flight
} from "./Styles";

export const SearchPage = () => {
    const router = useRouter();
    const [flights, setFlights] = useState();

    const fetchFlights = async () => {
        try {
            const response = await axiosReqV2.get(
                `flights/searchFlights`, {
                params: {
                    originSkyId: JSON.parse(router?.query?.origin).skyId,
                    destinationSkyId: JSON.parse(router?.query?.destination).skyId,
                    originEntityId: JSON.parse(router?.query?.origin).entityId,
                    destinationEntityId: JSON.parse(router?.query?.destination).entityId,
                    date: JSON.parse(router?.query?.date).slice(0, 10)
                }
            }
            );
            if (!response.ok) {
                setFlights(response?.data?.data);
            }
        } catch (error) { }
    };

    useEffect(() => {
        if (router.isReady) {
            fetchFlights();
        }
    }, [router.query, flights?.itineraries]);
    return (
        <Container>
            <SearchBar />
            <Typography
                variant="v2"
                sx={{
                    display: "block",
                    paddingLeft: "16px",
                    marginBlock: "16px",
                    fontSize: "20px",
                    fontWeight: "600"
                }}
            >
                Flights
            </Typography>
            <FlightsBox>
                {flights?.itineraries?.map((flight) => {
                    return (<Flight>
                        <Box display="flex" alignItems="center">
                            <img src={flight?.legs?.[0]?.carriers?.marketing?.[0]?.logoUrl} alt="logo" />
                            <Typography display="block" color="#70757a" fontSize="12px">
                                {flight?.legs?.[0]?.carriers?.marketing?.[0]?.name}
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography display="block" color="#202124" fontSize="16px">
                                {`${Math.floor(flight?.legs?.[0]?.durationInMinutes / 60)} hr ${flight?.legs?.[0]?.durationInMinutes % 60 < 10 ? '0' : ''}${flight?.legs?.[0]?.durationInMinutes % 60} min`}
                            </Typography>
                            <Typography display="block" color="#70757a" fontSize="12px">
                                {`${flight?.legs?.[0]?.origin?.id} - ${flight?.legs?.[0]?.destination?.id}`}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography fontSize="16px" color="#202124">
                                {flight?.price?.formatted}
                            </Typography>
                        </Box>
                    </Flight>)
                }
                )}
            </FlightsBox>
        </Container>
    )
}