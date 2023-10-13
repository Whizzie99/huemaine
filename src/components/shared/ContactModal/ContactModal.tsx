"use client";
import { useState } from "react";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { experimental_useFormState as useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { sendEmailAction } from "@/app/actions";
import { HiXMark } from "react-icons/hi2";
import { PiArrowRightLight } from "react-icons/pi";
import {
  StyledWrapper,
  StyledForm,
  StyledFormGroup,
  StyledCloseBtn,
  StyledContent,
  StyledSubmitBtn,
} from "./styles";

interface FormDataObj {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const initialState = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <StyledSubmitBtn type="submit" aria-disabled={pending}>
      {pending ? (
        <span className="loadin-msg">please hold on...</span>
      ) : (
        <>
          <span>submit</span>
          <span>
            <PiArrowRightLight />
          </span>
        </>
      )}
    </StyledSubmitBtn>
  );
};

const ContactModal = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(sendEmailAction, initialState);


  console.log(state?.message);

  const [formData, setFormData] = useState<FormDataObj>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // const handleFormDataAction = async(formdata: FormData) => {
  //   await sendEmail(formdata);
  // }

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledCloseBtn>
          <button onClick={router.back}>
            <HiXMark />
          </button>
        </StyledCloseBtn>
        <h2>send us a message</h2>
        <StyledForm action={formAction}>
          {
            state?.message == 'Thanks, your message has been sent!' && <p className="success-msg" aria-live="polite">{state?.message}</p>
          }
          {
            state?.message == 'Sorry, your message failed to send' && <p className="error-msg" aria-live="polite">{state?.message}</p>
          }
          <StyledFormGroup>
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              name="full-name"
              placeholder="enter your full name"
              required
              onChange={(e) => handleChange(e)}
            />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              required
              onChange={(e) => handleChange(e)}
            />
          </StyledFormGroup>

          <StyledFormGroup>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="enter subject"
              required
              onChange={(e) => handleChange(e)}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="wrtie your message "
              cols={30}
              rows={10}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </StyledFormGroup>
          <SubmitBtn/>
        </StyledForm>
      </StyledContent>
    </StyledWrapper>
  );
};

export default ContactModal;
