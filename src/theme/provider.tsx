import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export function ThemeAppProvider({children} : {children: React.ReactNode}) {

    return(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
  }