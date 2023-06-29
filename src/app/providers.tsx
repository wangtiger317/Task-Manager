"use client"

import StyledComponentsRegistry from "@/lib/registry";
import { ReduxProviders } from "@/redux/provider";
import { ThemeAppProvider } from "@/theme/provider";
import '@/styles/global.css'

export default function Providers({children} : {children: React.ReactNode}) {
  return (
    <StyledComponentsRegistry>
        <ThemeAppProvider>
            <ReduxProviders>
                {children}
            </ReduxProviders>
        </ThemeAppProvider>
    </StyledComponentsRegistry>
  )
}
