// zustand save the state in the local storage, so if you refresh the page, the state will be the same.

import { create } from "zustand";
import { getToken, saveToken } from "../lib/localStorage";

type TokenStore = {
    token: string;
    setToken: (token: string) => void;
};

const useTokenStore = create<TokenStore>((set) => ({
    token: getToken() || '',
    setToken: (token: string) => {
        saveToken(token);
        set({ token });
    },
}));

export default useTokenStore;