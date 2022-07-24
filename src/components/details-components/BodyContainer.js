import styled from "styled-components";

const Body = ({ children,backDrop,api }) => {
const BodyContainer = styled.div`
    background-image:url(${api}${backDrop});
    background-position: center center;
    background-size: cover;
    background-repeat: norepeat;
    color:white;

    div{
  padding: 1rem;
    widht:100%;
    height:100%;
    backdrop-filter: blur(5rem);
    }

    .tagname{
    font-weight:bold;
    padding:.5rem;
    color:white;
    text-align:center;
    border-bottom:solid thin white;
    }

  article{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

    span{
    color:white;
    border-color:white;
    }
  }
`;

  return( <BodyContainer><div>{children}</div></BodyContainer> ) };
export default Body;
