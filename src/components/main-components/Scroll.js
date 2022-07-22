import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader";
import ScrollCard from './ScrollCard'

const ScrollContainer = styled.div`
width:100%;
display:flex;
overflow:hidden;
overflow-x:scroll;
`;

const Scroll = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: props.endPoint,
    method: "get",
  });

  return (
    <>
    {props.children}
    <ScrollContainer>
      {isLoading ? <Loader /> : 
          response.data.results.map(( props,index  )=><ScrollCard props={props} key={props.id}/>)
      }
    </ScrollContainer>
    </>
  );
};
export default Scroll;
