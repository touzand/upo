import styled from 'styled-components'

const PercentContainer = styled.span`
background-color:red;
`

const Percent = ({children}) =>(
  <PercentContainer>
    {children}
  </PercentContainer>
)
export default Percent
