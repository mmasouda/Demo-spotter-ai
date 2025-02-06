import axios from "axios";

export const axiosReq = axios.create({
    baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1/",
    headers: {
        'x-rapidapi-key': 'c2ba8e218amsh8b05589f1315241p15f1adjsncb9a95e0307b',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    },
});

export const axiosReqV2 = axios.create({
    baseURL: "https://sky-scrapper.p.rapidapi.com/api/v2/",
    headers: {
        'x-rapidapi-key': 'c2ba8e218amsh8b05589f1315241p15f1adjsncb9a95e0307b',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    },
});
