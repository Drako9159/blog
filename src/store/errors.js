import { create } from "zustand";
//Not implement for now
export const useErrorStore = create((set) => ({
  error: {
    code: 0,
    message: "",
  },
  setError: (error) =>
    set((state) => ({
      error: { code: state.error.code, messsage: state.error.message },
    })),
}));
