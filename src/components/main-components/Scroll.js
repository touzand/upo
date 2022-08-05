import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader";
import ScrollCard from './ScrollCard'

const GeneralContainer = styled.div`

@media (min-width:800px){
padding-left:5rem;
}

`

const ScrollContainer = styled.div`
width:100%;
display:flex;
overflow:hidden;
overflow-x:scroll;
padding-right:.5rem;


@media (min-width:800px){
}

`;

const Scroll = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: props.endPoint,
    method: "get",
  });

  let animationDelayStartAt = 0

  return (
    <GeneralContainer>
    {props.children}
    <ScrollContainer>
      {isLoading ? <Loader /> : 
          response.data.results.map(( propis,index  )=><ScrollCard animationDelay={animationDelayStartAt + `.${index}`} mediaType={props.mediaType} props={propis} key={propis.id}/>)
      }
    </ScrollContainer>
    </GeneralContainer>
  );
};
export default Scroll;
