import { create } from "zustand";
import { validateField } from "../utils/validation";

interface UserState {
    step: number;
    userDetails: Record<string, string>;
    errors: Record<string, string>;
    setStep: (step: number) => void;
    updateUserDetails: (field: string, value: string) => void;
    validateField: (field: string) => void;
    clearData: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
    step: 1,
    userDetails: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    },
    errors: {},
    setStep: (step) => set({ step }),
    updateUserDetails: (field, value) => {
        set((state) => ({
            userDetails: { ...state.userDetails, [field]: value },
            errors: { ...state.errors, [field]: validateField(field, value) },
        }));
    },
    validateField: (field) => {
        const value = get().userDetails[field];
        set((state) => ({
            errors: { ...state.errors, [field]: validateField(field, value) },
        }));
    },
    clearData: () =>
        set({
            step: 1,
            userDetails: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                street: "",
                city: "",
                state: "",
                zip: ""
            }
        }),
}));
