import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";

export const OS = "os";
export const DARK_CLASS = "dark";
export const LIGHT_CLASS = "light";
export const PREFER_DARK_QUERY = "(prefers-color-scheme: dark)";

export type Theme = typeof DARK_CLASS | typeof LIGHT_CLASS | typeof OS;

export const ThemeContext = createContext<Theme | null>(null);
export const SetThemeContext = createContext<Dispatch<
    SetStateAction<Theme>
> | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return LIGHT_CLASS;
        const existingPreference = window.localStorage.getItem("theme") as
            | Theme
            | undefined;
        return existingPreference ?? LIGHT_CLASS;
    });

    // Effect to change mode if the user changes its theme preference
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia(PREFER_DARK_QUERY);

        const handleChange = () => {
            if (theme === OS) {
                if (mediaQuery.matches) {
                    document.documentElement.classList.add(DARK_CLASS);
                } else {
                    document.documentElement.classList.remove(DARK_CLASS);
                }
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem("theme", theme);
        if (
            theme === DARK_CLASS ||
            (theme === OS && window.matchMedia(PREFER_DARK_QUERY).matches)
        ) {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    }, [theme]);

    return (
        <SetThemeContext.Provider value={setTheme}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </SetThemeContext.Provider>
    );
};
