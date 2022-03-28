import { FC, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";

interface WelcomeProps {
  message: string;
}

const WelcomeContainer = styled.div`
  font-weight: 600;
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
  user-select: none;
  cursor: default;
  ::after {
    content: "|";
    animation: blink 1s infinite ease-in-out;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &.finish {
    ::after {
      content: "";
      animation: none;
    }
  }
`;
const Home: FC<WelcomeProps> = ({ message }) => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [finish, setFinish] = useState<boolean>(false);
  useEffect(() => {
    let index = 0;
    setFinish(false);
    if (welcomeRef.current) welcomeRef.current.innerText = "";
    const typeText = setInterval(() => {
      welcomeRef.current?.insertAdjacentHTML("beforeend", message[index++]);
      if (message[index] === "\n")
        welcomeRef.current?.insertAdjacentHTML("beforeend", "<br/>");
      if (index === message.length) {
        setFinish(true);
        clearInterval(typeText);
      }
    }, 100);
    return () => {
      setFinish(false);
      clearInterval(typeText);
    };
  }, [message]);
  return (
    <div
      data-anchor="home"
      id="home"
      className=" h-screen flex items-center p-8"
      style={{ backgroundColor: "rgb(131, 188, 255)" }}
    >
      <WelcomeContainer
        ref={welcomeRef}
        className={classNames({ finish: finish })}
      />
    </div>
  );
};

export default Home;
