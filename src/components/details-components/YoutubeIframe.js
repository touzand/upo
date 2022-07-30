import styled from 'styled-components';
import {useParams,useNavigate} from 'react-router-dom'

const IframeContainer = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
padding:1rem;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#00000099;

iframe{

}
`

const YoutubeIframe =  () =>{
  const {key} = useParams()
  const navigate = useNavigate()

  return( 
    <IframeContainer onClick={()=> navigate(-1)}>

      <iframe width="338" height="190" src={ `https://www.youtube.com/embed/${key}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

  </IframeContainer>

  )}
export default YoutubeIframe
