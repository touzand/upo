import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader";
import ScrollCard from "./ScrollCard";
import { useRef } from "react";
import '../../index.css'

const GeneralContainer = styled.div`
  @media (min-width: 800px) {
    padding-left: 5rem;
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  scroll-behavior: smooth;

  .slider {
    width: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    padding-right: 0.5rem;
    scroll-behavior: smooth;
  }

  .controls {
  display:none;
  }

  @media (min-width: 800px) {
  .controls{
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    height: 72%;
    z-index: 2;
    pointer-events:none;

    div{
    opacity:1;
    width:80px;
    cursor:pointer;
    transition:all .1s ease-in;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    pointer-events:auto;
    cursor:pointer;
    }

    div:nth-child(1) {
      background-image: linear-gradient(to right, var(--dark), transparent);
    }

    div:nth-child(2) {
      background-image: linear-gradient(to left, var(--dark), transparent);
    }

    div:nth-child(1):hover {
      background-image: linear-gradient(to right, var(--dark), transparent);
      font-size:3rem;
    }

    div:nth-child(2):hover {
      background-image: linear-gradient(to left, var(--dark), transparent);
      font-size:3rem;
    }
  }
  }
`;

const Scroll = (props) => {
  const rowRef = useRef(null);

  const [response, isError, isLoading] = useAxios({
    url: props.endPoint,
    method: "get",
  });

  const scroll = (scrollOffset) => {
    rowRef.current.scrollLeft += scrollOffset;
  };

  let animationDelayStartAt = 0;

  return (
    <GeneralContainer>
      {props.children}
      <ScrollContainer className="scroll-container">
        <div className="slider" ref={rowRef}>
          <div className="controls">
            <div onClick={() => scroll(-300)}><i class="bi bi-arrow-left-short"></i></div>
            <div onClick={() => scroll(300)}><i class="bi bi-arrow-right-short"></i></div>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            response.data.results.map((propis, index) => (
              <ScrollCard
                animationDelay={animationDelayStartAt + `.${index}`}
                mediaType={props.mediaType}
                props={propis}
                key={propis.id}
              />
            ))
          )}
        </div>
      </ScrollContainer>
    </GeneralContainer>
  );
};
export default Scroll;
