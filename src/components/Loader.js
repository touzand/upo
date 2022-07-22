import styled, {keyframes} from 'styled-components'

const rollign = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
`

const LoaderStyled = styled.div`
width:100px;
height:100px;
border:thick solid grey;
border-top-color:navy;
border-radius:50%;
animation:${rollign} 1s ease;
`

const Loader = (  ) =>(
  <LoaderStyled/>
)
export default Loader
