import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader";
import ScrollCard from "./ScrollCard";

const GeneralContainer = styled.div`
  @media (min-width: 800px) {
    padding-left: 5rem;
  }
`;

const ScrollContainer = styled.div`
  .slider{
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  padding-right: 0.5rem;
  scroll-behavior:smooth;
  }

  @media (min-width: 800px) {
  }
`;

const Scroll = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: props.endPoint,
    method: "get",
});

const sliderLeft = () =>{
  let slider = document.querySelector('.slider')
  slider.scrollLeft = slider.scrollLeft - 500
  }

const sliderRight = () =>{
  let slider = document.querySelector('.slider')
  slider.scrollRight = slider.scrollRight - 500
  }

  let animationDelayStartAt = 0;

  return (
    <GeneralContainer>
      {props.children}
      <ScrollContainer className='scroll-container'>
        <div className="slider">
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
