import styled , {keyframes} from 'styled-components'
import {useState} from 'react'
import '../index.css'
import {useEffectOnce} from '../hooks/useEffectOnce'

const bye = keyframes`
0%{left:0%}
50%{left:120%}
100%{left:120%;visibility:hidden}
`

const Container = styled.div`
position:absolute;
display:flex;
align-items:center;
justify-content:center;
top:0;
bottom:0;
left:0;
right:0;
z-index:2;
background-color:var(--dark);
animation:${ bye } 1s 1s ease both;

`

const ContentLoader = () =>{
  const [ loader,setLoader ] = useState(true);

  useEffectOnce(()=>{
  setTimeout(()=>{
    setLoader(false)
    },1100)
  })

  return(
    <div>
    {loader &&
      <Container>
      <h1 className='content-loader-text'>Loading...</h1>
    </Container>
    }
    </div>

  )
}

export default ContentLoader
