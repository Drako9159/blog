import { create } from "zustand";
//import { persist } from "zustand/middleware";
/*
export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
      setToken: (token) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      setProfile: (profile) =>
        set((state) => ({
          profile,
        })),
      logout: () =>
        set((state) => ({
          token: "",
          isAuth: false,
          profile: null,
        })),
    }),
    {
      name: "auth",
    }
  )
);
*/
/*
export const useBearsStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  removeAllBears: () => set({ bears: 0 }),
}));
*/
/*
const useBearStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  reset: () => set({ bears: 0 }),
}));
*/
export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
