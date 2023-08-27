import { ThemeProvider } from "styled-components"

const standartTheme = {
    colors: {
        mainColor: "#000",
        secondColor: "#fff",
        rearColor: "#808080"
    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={standartTheme}>
            {children}
        </ThemeProvider>
    )
}