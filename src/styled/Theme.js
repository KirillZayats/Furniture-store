import { ThemeProvider } from "styled-components"

const standartTheme = {
    colors: {
        mainColor: "#000",
        secondColor: "#fff",
        rearColor: "#808080",
        veryRearColor: "#697386",
        buttonPayColor: "#3C4257",
        textButtonPayColor: "#8792A2",
        lineTransitionPayColor: "rgba(60, 66, 87, 0.12)",
        buttonDownUpColor: "rgba(60, 66, 87, 0.5)",

    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={standartTheme}>
            {children}
        </ThemeProvider>
    )
}