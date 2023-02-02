import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "english",
  setLanguage: (state) => set({ language: state.language }),
}));
