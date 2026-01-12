import { DarkTheme, DefaultTheme, type Theme } from "@react-navigation/native";

export const THEME = {
  light: {
    background: "hsl(0 0% 98%)",
    foreground: "hsl(0 0% 24%)",
    card: "hsl(0 0% 99%)",
    cardForeground: "hsl(0 0% 24%)",
    popover: "hsl(0 0% 99%)",
    popoverForeground: "hsl(0 0% 24%)",

    primary: "hsl(35 28% 43%)",
    primaryForeground: "hsl(0 0% 100%)",

    secondary: "hsl(76 53% 92%)",
    secondaryForeground: "hsl(35 36% 35%)",

    muted: "hsl(0 0% 95%)",
    mutedForeground: "hsl(0 0% 50%)",

    accent: "hsl(0 0% 93%)",
    accentForeground: "hsl(0 0% 24%)",

    destructive: "hsl(22 83% 63%)",

    border: "hsl(0 0% 88%)",
    input: "hsl(0 0% 88%)",
    ring: "hsl(35 28% 43%)",

    radius: "0.5rem",

    chart1: "hsl(35 28% 43%)",
    chart2: "hsl(76 53% 92%)",
    chart3: "hsl(0 0% 93%)",
    chart4: "hsl(75 38% 94%)",
    chart5: "hsl(35 28% 43%)",
  },

  dark: {
    background: "hsl(0 0% 18%)",
    foreground: "hsl(0 0% 95%)",
    card: "hsl(0 0% 21%)",
    cardForeground: "hsl(0 0% 95%)",
    popover: "hsl(0 0% 21%)",
    popoverForeground: "hsl(0 0% 95%)",

    primary: "hsl(67 54% 92%)",
    primaryForeground: "hsl(201 20% 20%)",

    secondary: "hsl(67 10% 32%)",
    secondaryForeground: "hsl(67 54% 92%)",

    muted: "hsl(0 0% 25%)",
    mutedForeground: "hsl(0 0% 77%)",

    accent: "hsl(0 0% 29%)",
    accentForeground: "hsl(0 0% 95%)",

    destructive: "hsl(22 83% 63%)",

    border: "hsl(89 10% 24%)",
    input: "hsl(0 0% 40%)",
    ring: "hsl(67 54% 92%)",

    radius: "0.5rem",

    chart1: "hsl(67 54% 92%)",
    chart2: "hsl(67 10% 32%)",
    chart3: "hsl(0 0% 29%)",
    chart4: "hsl(67 14% 35%)",
    chart5: "hsl(67 54% 92%)",
  },
};

export const NAV_THEME: Record<"light" | "dark", Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};
