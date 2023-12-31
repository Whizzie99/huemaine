"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --white: #fff;
    --black-1: #000;
    --black-2: #252525;
    --black-3: #1E1E1E;
    --gray-1: #D9D9D9;
  }

  /* RESET */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* border: 0.01em solid red; */
  }

  /* body{
    scroll-behavior: smooth;
  } */
`;
