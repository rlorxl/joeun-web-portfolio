import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TypingText = ({
  text,
  speed = 150,
  pause = 2000,
}: {
  text: string | string[];
  speed?: number;
  pause?: number;
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [arrIndex, setArrIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    let currentText = Array.isArray(text) ? text[arrIndex] : text;
    let timeoutId: NodeJS.Timeout;

    if (!deleting && index < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[index]);
        setIndex(prev => prev + 1);
      }, speed);
    } else if (deleting && index > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, speed);
    } else if (!deleting && index === currentText.length) {
      timeoutId = setTimeout(() => setDeleting(true), pause);
    } else if (index === 0 && deleting) {
      setDeleting(false);
      if (Array.isArray(text)) {
        setArrIndex(prev => (text[prev + 1] ? prev + 1 : 0));
      }
    }

    return () => clearTimeout(timeoutId);
  }, [index, text, speed, pause, deleting]);

  return (
    <Text>
      {displayedText}
      <Cursor>|</Cursor>
    </Text>
  );
};

export default TypingText;

const Text = styled.div`
  width: fit-content;
  height: 100%;
  color: ${({ theme }) => theme.color.fontColor};
  overflow: hidden;
`;

const Cursor = styled.span`
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: inline-block;
  width: 5px;
  background-color: ${({ theme }) => theme.color.appColor};
  margin-left: 2px;
  animation: blink 1s step-end infinite;
`;
