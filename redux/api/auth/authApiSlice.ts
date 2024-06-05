import { apiSlice } from "../../api/reducer/apiSlice";
const apiWithTag = apiSlice.enhanceEndpoints({
    addTagTypes: [
        "user"
    ],
});

export const authApiSlice = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/v1/user/login",
                method: "POST",
                headers: {
                    // "Content-Type": "application/x-www-form-urlencoded",
                    "Content-Type": "application/json",
                },
                body: credentials,
            }),
        }),
        registeration: builder.mutation({
            query: (credential) => ({
                url: "/api/v1/user/register",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: credential,
            }),
        }),
    })
})


export const {
    useLoginMutation,
    useRegisterationMutation
} = authApiSlice