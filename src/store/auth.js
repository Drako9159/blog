import { create } from "zustand";
//import { persist } from "zustand/middleware";

export const useAuthStore = create((set) => ({
  token: "",
  profile: null,
  isAuth: false,
  setToken: (token) => set((state) => ({ token, isAuth: true })),
  logout: () => set((state) => ({ token: "", isAuth: false, profile: null })),
}));
