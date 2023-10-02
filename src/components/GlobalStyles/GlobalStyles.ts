"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --white: #fff;
    --black-1: #000;
    --black-2: #252525;
    --black-3: #1E1E1E;
  }

  /* RESET */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
