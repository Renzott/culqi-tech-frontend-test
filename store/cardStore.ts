import { create } from "zustand";
import { Card } from "@/services/models/Card"

type CardStore = {
    card: Card;
    cardToken: string;
    setCard: (card: Card) => void;
    setCardData: (name: string, value: string | number) => void;
    setCardToken: (cardToken: string) => void;
};

const useCardStore = create<CardStore>((set) => ({
    card: {
        card_number: 0,
        expiration_month: "",
        expiration_year: "",
        ccv: 0,
        email: "",
    },
    cardToken: "",
    setCardToken: (cardToken: string) => {
        set({ cardToken });
    },
    setCard: (card: Card) => {
        set({ card });
    },
    setCardData: (name, value) => {
        set(state => ({
            card: {
                ...state.card,
                [name]: value
            }
        }));
    }
}));

export default useCardStore;