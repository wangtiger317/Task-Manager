import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {lightTheme,darkTheme,GlobalStyles } from "../theme/ThemeConfig"
export function ThemeAppProvider({children} : {children: React.ReactNode}) {
  const [theme, setTheme] = useState("light") 

    return(
      <ThemeProvider 
         theme={theme == 'light' ? lightTheme : darkTheme}>
        {children}</ThemeProvider>
    )
  }