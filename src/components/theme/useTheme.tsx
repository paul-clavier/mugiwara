import { useContext } from "react";
import { DARK_CLASS, LIGHT_CLASS, PREFER_DARK_QUERY, SetThemeContext, ThemeContext } from "./ThemeProvider";

const getThemeClassFromOs = () => {
    const mediaQuery = window.matchMedia(PREFER_DARK_QUERY);
    if (mediaQuery.matches) {
        return DARK_CLASS;
    } else {
        return LIGHT_CLASS;
    }
}

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(SetThemeContext);    
    if (theme === null || setTheme === null)
        throw Error(`useTheme should only be called within ThemeProvider.`);

    const themeClass = theme === "os" ? getThemeClassFromOs() : theme;
    return { theme, themeClass, setTheme };
};
