export interface AuthState {
    token: string | null;
    message: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}


export interface CredentialsPayload {
    token: string;
    message: string;
}

