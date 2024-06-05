import { AuthState, CredentialsPayload } from "@/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem("token", token);
    } catch (error) {
        console.error("Error storing token:", error);
    }
};

const initialState: AuthState = {
    token: null,
    message: null,
    isLoading: true,
    isAuthenticated: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
            const { token, message } = action.payload;
            storeToken(token);
            state.token = token;
            state.message = message;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logout: (state) => {
            state.token = null;
            state.message = "Logout successfully";
            AsyncStorage.removeItem("token");
            state.isAuthenticated = false;
            state.isLoading = false;
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentMessage = (state: { auth: AuthState }) => state.auth.message;
export const selectCurrentToken = (state: { auth: AuthState }) => state.auth.token;
export const selectCurrentLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectCurrentIsAuth = (state: { auth: AuthState }) => state.auth.isAuthenticated;

export default authSlice.reducer;