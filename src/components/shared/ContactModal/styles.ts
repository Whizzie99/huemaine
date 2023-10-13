"use client";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;

export const StyledContent = styled.div`
  background: var(--white);
  width: 90%;
  padding: 1.5em;

  > h2 {
    text-transform: capitalize;
    text-align: center;
    font-family: var(--font-bodoni);
    font-weight: 900;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;

export const StyledCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2em;
  }
`;

export const StyledForm = styled.form`
  > p{
    padding: 0.5em 1em;
    text-align: center;
    font-family: var(--font-alegreya);
    text-transform: capitalize;
    margin: 0.3em 0;

    &.success-msg{
      background: #79EB98;
      color: #3C754B;
    }

    &.error-msg{
      background: #FF6666;
      color: #943B3B;
    }
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin: 1em 0;

  label {
    font-family: var(--font-bodoni);
    text-transform: capitalize;
    font-weight: 600;
  }

  input,
  textarea {
    padding: 0.5em;
    border: 0.01em solid var(--black-1);
    font-family: var(--font-alegreya);
    border-radius: 0;

    &::placeholder {
      font-family: var(--font-alegreya);
      text-transform: capitalize;
    }
  }

  input {
    padding: 0.8em;
  }
`;

export const StyledSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  background: var(--black-1);
  border: none;
  padding: 0.5em;

  span {
    color: var(--white);
    &:first-child {
      font-family: var(--font-alegreya);
      font-size: 1.3em;
      text-transform: capitalize;
    }

    &:last-child {
      font-size: 1.5em;
      margin-top: 0.23em;
    }
  }

  .loading-msg{
    color: var(--white);
    font-family: var(--font-alegreya);
    text-transform: capitalize;
    font-size: 1.3em;
  }
`;
