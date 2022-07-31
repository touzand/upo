import styled from 'styled-components'

const CreditsContainer = styled.div`
padding:1rem;

`

const Credits = ({children}) =>{
  <CreditsContainer>{children}</CreditsContainer>
}
export default Credits
