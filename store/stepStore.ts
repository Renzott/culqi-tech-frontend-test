import { create } from "zustand";
import { getToken } from "../lib/localStorage";

type StepStore = {
    step: number;
    setStep: (step: number) => void;
};

const useStepStore = create<StepStore>((set) => ({
    step: 0,
    setStep: (step: number) => {
        const token = getToken();
        if (token) {
            set({ step });
        } else {
            set({ step: 0 });
        }
        
    },
}));


export default useStepStore;