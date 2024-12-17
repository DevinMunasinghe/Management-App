import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const JsonAxios = () => {
    console.log("BASE_URL>>", BASE_URL)
    var config: any = {
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    };

    return axios.create(config);
};