import {useState} from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

const NavContainer = styled.nav`
display:flex;
justify-content:space-between;
`

const Nav = () => {
const [inputVisible,setInputVisible] = useState(false)

  return(
    <NavContainer>
    <div>T</div>
    <div>UPO</div>
    <div onClick={()=>setInputVisible(true)}>S</div>
      {inputVisible && <SearchBar inputVisible={inputVisible} setInputVisible={setInputVisible}/>}
    </NavContainer>
  )}
export default Nav;
