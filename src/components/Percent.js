import styled from 'styled-components'
import {formatAsPercent} from '../utilities/util'

const PercentContainer = styled.span`
color:black !important;
padding:.25rem;
background-color:#f3ce13;
`

const Percent = ({children}) =>(
  <PercentContainer>
    {formatAsPercent(children)}
  </PercentContainer>
)
export default Percent
