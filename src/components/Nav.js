import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavContainer = styled.nav`
display:flex;
justify-content:space-between;
`

const Nav = () => (
  <NavContainer>
    <div>T</div>
    <div>UPO</div>
    <div>S</div>
  </NavContainer>
);
export default Nav;
