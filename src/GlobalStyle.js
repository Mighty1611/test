import { createGlobalStyle } from "styled-components";



// means this wont changs
export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        -fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMid: 1.2rem;
        --fontSmall: 1rem;
    }

    
    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

`; 