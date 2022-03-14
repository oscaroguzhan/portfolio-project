import React, { useRef, useState } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout, Layout } from "../Styles/Layout";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const formRef = useRef();
  const [msg, SetMsg] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cimunzc",
        "template_lirs7tg",
        formRef.current,
        "ymk9rbJgPAYaCdcHA"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Layout>
        <Title title={"Contact"} span={"With Me"} />
        <InnerLayout />
        <StyledContact>
          <div className="contact-left">
            <h1>Looking forward to new opportunities</h1>
            <div className="info">
              <div className="info-item">
                <PhoneIcon className="icon" />
                0766526126
              </div>
              <div className="info-item">
                <EmailIcon className="icon" />
                oscar.w.ergun@gmail.com
              </div>
              <div className="info-item">
                <HomeIcon className="icon" />
                Ängavångsgatan 115 25474 Helsingborg
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="email" placeholder="Email" name="user_email" />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="btn_submit">Submit</button>
              {msg && (
                <span>Thank you... I will be in touch as soon as possible</span>
              )}
            </form>
          </div>
        </StyledContact>
      </Layout>
    </div>
  );
};
const StyledContact = styled.div`
  padding: 2rem;
  display: flex;
  color: var(--white);
  // media query
  @media all and (max-width:720px) {
    display:grid;
    .contact-left {
      margin: 1rem 1rem;

    }
  }
  h1 {
    width: 80%;
    margin-bottom: 2rem;
  }
  .contact-left {
    flex: 1;
    .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .info-item {
      display: flex;
      gap: 1.5rem;
      }
    }
  }
  .contact-right {
    flex:1;
    margin: 0 1rem;
    form {
      
      input {
        width: 100%;
        height: 2rem;
        border:none;
        border-bottom: 1px solid black;
        margin: 10px 0;
        padding-left: 5px;
        font-size: 15px;
      }
      textarea {
        font-size:15px;
        padding-left: 5px;
        width:100%;
      }
      button {
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        background-color:var(--primary-color);
        color:var(--white);
        font-size: 1rem;
        border:none;
        margin: 0.5rem auto;

        &:hover {
          background-color:var(--secondary-color);
          transition: all 0.5 ease-out;
        }
      }
      span {
        opacity: 0.8;
        margin-left: 1rem;
      }
    }
  }
  }
  
  .contact-right {
    flex: 1;
    a {
    width:18rem;
    margin-top:1rem;
  }
  
  
`;
export default ContactPage;
