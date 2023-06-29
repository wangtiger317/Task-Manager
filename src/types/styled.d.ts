import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        fontSizes: {
            sm: string;
            md: string;
            lg: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        radius: {
            small: string;
            medium: string;
            large: string;
        };
        zIndex: {
            default: string;
        };
    }
}
