import {useState} from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import '../index.css'

const NavContainer = styled.nav`
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
background-color:var(--dark);

.nav-icon{
font-size:1.5rem;
padding:.5rem;
cursor:pointer;
}

a{
color:white;
display:flex;
align-items:center;
justify-content:center;


img{
width:30px;
}
}
`

const Nav = props => {

  return(
    <NavContainer>
      <div className='nav-icon'>
        <i className="bi bi-list"></i>
      </div>
      <Link to="/" className='nav-icon'>UPO</Link>
    <div onClick={()=>props.setInputVisible(true)} className='nav-icon'>
          <i className="bi bi-search"></i>
    </div>
      {props.inputVisible && <SearchBar inputVisible={props.inputVisible} setInputVisible={props.setInputVisible}/>}
    </NavContainer>
  )}
export default Nav;
