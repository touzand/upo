import styled from 'styled-components'
import '../index.css'

const LoaderContainer = styled.div`
width:100%;
height:200px;
display:flex;
justify-content:center;
align-items:center;

`

const Loader = (  ) =>(
  <LoaderContainer>
  <span className='loader'></span>
  </LoaderContainer>
)
export default Loader
