import { Button, CogIcon, MoonIcon, SunIcon } from "@/components";
import { Theme } from "./ThemeProvider";
import { useTheme } from "./useTheme";

const getNextTheme = (theme: Theme) => {
    switch (theme) {
        case "light":
            return "dark";
        case "dark":
            return "os";
        case "os":
            return "light";
    }
};

const IconFromTheme = ({ theme }: { theme: Theme }) => {
    switch (theme) {
        case "light":
            return <SunIcon />;
        case "dark":
            return <MoonIcon />;
        case "os":
            return <CogIcon />;
    }
};

const ThemeButton = ({ className }: {className?: string}) => {
    const [theme, setTheme] = useTheme();
    return (
        <Button
            className={className}
            onClick={() => setTheme((theme) => getNextTheme(theme))}
            variant="outline"
            size="icon"
        >
            <IconFromTheme theme={theme} />
        </Button>
    );
};

export default ThemeButton;
