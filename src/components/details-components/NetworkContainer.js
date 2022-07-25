import styled from 'styled-components'

const NetworkContainer = styled.div`
background-color:#222;
display:flex;
padding:0 !important;
border-radius:.5rem;
overflow:hidden;
margin-bottom:1rem;

img{
width:70px;
}

h4{
}

div{
display:flex;
flex-direction:column;
justify-content:center;
padding:0 !important;
margin-left:.5rem;

p,h4{
margin:0;
}

p{
font-size:.9rem;
}
}

`

const Network = props =>(
  <NetworkContainer>
    <img src={`${props.api}${props.logo}`}/>
    <div>
      <div>
      <p>Watch now in</p>
      <h4>{props.name}</h4>
      </div>
    </div>
  </NetworkContainer>
)
export default Network
