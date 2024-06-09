import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CursorContext from "../../context/cursor.tsx";

const PopupText = ({ text, duration = 0.2 }: { text: string | string[]; duration?: number }) => {
  const { expandHandler } = useContext(CursorContext);

  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [endTime, setEndTime] = useState<number>(0);
  const [arrIndex, setArrIndex] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    let currentText = Array.isArray(text) ? text[arrIndex] : text;
    const chars = currentText?.split("");

    if (!isStart) {
      setIsStart(true);
    }

    setDisplayedText(chars);
    setEndTime(duration * chars.length);

    if (endTime !== 0) {
      timeoutId = setTimeout(() => setIsStart(false), endTime * 1000);
    }

    return () => clearInterval(timeoutId);
  }, [text, endTime]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isStart) {
      timeoutId = setTimeout(() => {
        setArrIndex(prev => (Array.isArray(text) && text[prev + 1] ? prev + 1 : 0));
        setEndTime(0);
      }, endTime * 1000);
    }

    return () => clearInterval(timeoutId);
  }, [text, isStart]);

  return (
    <Container onMouseEnter={expandHandler} onMouseLeave={expandHandler}>
      {isStart
        ? displayedText.map((char, i) => (
            <Text key={char + i} duration={i * duration}>
              <span>{char}</span>
            </Text>
          ))
        : displayedText.map((char, i) => (
            <FadeoutText key={char + i} duration={i * duration}>
              <span>{char}</span>
            </FadeoutText>
          ))}
    </Container>
  );
};

export default PopupText;

const Container = styled.div`
  width: fit-content;
  height: 100%;
  padding: 10px calc(1rem + 2vw);
  background-color: ${({ theme }) => theme.color.appColor};
  border-radius: 150px;
  color: #222;
  overflow: hidden;
`;

const Text = styled.span<{ duration: number }>`
  @keyframes popup {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  display: inline-block;
  width: fit-content;
  animation: ${({ duration }) => `popup ${duration}s forwards`};
  transition: transform 0.8s;
`;

const FadeoutText = styled.span<{ duration: number }>`
  @keyframes fadeout {
    0% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }

  display: inline-block;
  width: fit-content;
  animation: ${({ duration }) => `fadeout ${duration}s forwards`};
  transition: transform 0.8s;
`;
