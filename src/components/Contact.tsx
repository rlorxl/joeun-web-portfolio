import React from "react";
import { styled } from "styled-components";

const Contact = () => (
  <ContactWrap>
    <h2 id="contact">Contact</h2>
    <Email>gooodgirl08@gmail.com</Email>
    <div>
      <p>gooodgirl08@gmail.com</p>
      <p>+82 5554 8026</p>
      <p>
        <a href="/">kakao open link</a>
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
        />
      </svg>
    </div>
    <CopyRight>© 2023. Joeun Lee All rights reserved.</CopyRight>
  </ContactWrap>
);

export default Contact;

const ContactWrap = styled.section`
  height: 70vh;
  ${({ theme }) => theme.mixins.flexBox({ direction: "column" })};
  text-align: center;

  div > p {
    margin-top: 16px;
  }

  svg {
    cursor: pointer;
    margin-top: 32px;
  }
`;

const Email = styled.p`
  font-size: calc(2.5rem + 6vw);
  font-weight: 700;
  text-transform: uppercase;
  padding: 8rem 0;
`;

const CopyRight = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  opacity: 0.5;
  margin: 80px 0 60px 0;
`;
