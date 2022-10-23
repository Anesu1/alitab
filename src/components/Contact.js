import React from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import { FormControl, Input, InputLabel, TextField } from "@mui/material";

const Wrapper = styled.section`
  padding: 10% 5%;
  position:relative;
  z-index:1;
  h2 {
    color: ${(props) => props.theme.color.lightgreen};
    margin-bottom: 30px;
  }
  .inner {
    max-width: 550px;
    margin: 0 auto;
  }
  form {
    .MuiFormControl-root {
      width: 100%;
      margin-bottom: 20px;
    }

    .MuiInputLabel-formControl {
      top: 10px;
      left: 10px;
    }
    .MuiInput-underline:after {
      border-color: ${(props) => props.theme.color.green};
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${(props) => props.theme.color.green};
    }
    [id="standard-multiline-static-label"]{
      left:25px;
    }
    label {
      color: rgba(0, 0, 0);
      z-index: 1;
      font-family: ${(props) => props.theme.fam.regular};
    }
    input {
      width: 100%;
      height: 40px;
    }
    textarea {
      height: 130px;
      width: 100%;
    }
    button {
      height: 40px;
      width: 100%;
      font-family: ${(props) => props.theme.fam.bold};
      text-transform: uppercase;
      border: none;
      color: #ffffff;
      background: ${(props) => props.theme.color.green};
      font-size: 15px;
    }
  }
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <div className="inner">
        <Heading>LET US WORK TOGETHER</Heading>
        <form action="https://formsubmit.co/1475abbb575b84e025c7f540dda8f78b" method="POST">
        <input type="hidden" name="_subject" value="Submission from alitab website!" />
        <input type="hidden" name="_template" value="table" />
          <FormControl>
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="Full Name"/>
          </FormControl>
          <FormControl>
            <InputLabel>Email Address</InputLabel>
            <Input type="email" name="Email"/>
          </FormControl>
          <FormControl>
            <InputLabel>What are you intrested in?</InputLabel>
            <Input type="text" name="What are you intrested in?"/>
          </FormControl>
          <TextField
            id="standard-multiline-static"
            label="Your Message"
            multiline
            name="Message"
            variant="standard"
            rows={4}
          />
          <button>send message</button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contact;
