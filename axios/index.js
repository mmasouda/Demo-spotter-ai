import axios from "axios";

export const axiosReq = axios.create({
    baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1/",
    headers: {
        'x-rapidapi-key': 'cd1b2c5718msh118746743aad170p14d024jsne1a7fc514db2',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    },
});

export const axiosReqV2 = axios.create({
    baseURL: "https://sky-scrapper.p.rapidapi.com/api/v2/",
    headers: {
        'x-rapidapi-key': 'cd1b2c5718msh118746743aad170p14d024jsne1a7fc514db2',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    },
});
