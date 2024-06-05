import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.SERVER_URL || "http://192.168.0.100:4000" as string,
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
        const token = await getToken();
        // const token = getState().auth.token;
        // console.log(token);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        return token;
    } catch (error) {
        console.error("Error getting token:", error);
        return null;
    }
};

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});