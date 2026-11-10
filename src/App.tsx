import { useState } from "react"
import { Button } from "./components/Button"
import { darkTheme, lightTheme } from "./theme"
import { ThemeProvider } from "@emotion/react"

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const [isContextMenu, setContextMenu] = useState(false)

    const currentTheme = isDarkTheme ? darkTheme : lightTheme

    return (
    <ThemeProvider theme={currentTheme}>
        <Button
            value="menu"
            onClick={() => setContextMenu(!isContextMenu)}

            color='white'
            size='16px'
            background='black'
            border="none"
            borderRadius='2px'
        />
        <br /> <br />
        {isContextMenu &&<>
                    <Button
                        value="что нибудь хз"

                        color='black'
                        size='12px'
                        background='#b8b8b8'
                        border="none"
                        borderRadius='2px'
                    />
                    <br />
                    <Button
                        value="ну и еще что нибудь"

                        color='black'
                        size='12px'
                        background='#b8b8b8'
                        border="none"
                        borderRadius='2px'
                    />
                    <br />
                    <Button
                        value="о наконец тема"
                        onClick={() => setIsDarkTheme(!isDarkTheme)}

                        color='black'
                        size='12px'
                        background='#b8b8b8'
                        border="none"
                        borderRadius='2px'
                    />
        </>}
    </ThemeProvider>)
}

export default App
