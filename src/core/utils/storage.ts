const AUTH_TOKEN_KEY = "authToken";

export const saveToken = (token: string): void => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export const deleteToken = (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
}

export const getToken = (): string | null => localStorage.getItem(AUTH_TOKEN_KEY);
