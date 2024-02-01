import { useContext } from "react";
import { SetThemeContext, ThemeContext } from "./ThemeProvider";

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(SetThemeContext);
    if (theme === null || setTheme === null)
        throw Error(`useTheme should only be called within ThemeProvider.`);
    return [theme, setTheme] as const;
};
