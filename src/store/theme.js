import { create } from "zustand";
// getTheme is for set theme day or night

export const useThemeStore = create((set) => ({
  themeMode: "day",
  colors: {},
  libraryColors: {
    night: {
      layout: {
        backgroundColor: "#1f2028",
      },
      textEnable: {
        color: "#ececec",
      },
      textDisable: {
        color: "#7f7f85",
      },
      colorLogo: {
        a: "#df2007bd",
        b: "#0aa8cfbd",
        c: "#812567",
      },
    },
    day: {
      layout: {
        backgroundColor: "#ffffff",
      },
      textEnable: {
        color: "#121213",
      },
      textDisable: {
        color: "#7f7f85",
      },
      colorLogo: {
        a: "#df2007bd",
        b: "#0aa8cfbd",
        c: "#FF6708",
      },
    },
  },
  setTheme: (state) => set({ themeMode: state.themeMode }),
  setColors: (state) => set({ colors: state.colors }),
}));
