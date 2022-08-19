import { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../index.css";
import Menu from "../components/NavMenu";

const NavContainer = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: var(--dark);
  position: relative;

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    background-color:transparent;

    input{display:none;}

    i{
    background-color:transparent;

    }
    
  }

  .nav-icon:nth-child(1){
  padding-left:2rem;
  }

  .nav-icon:nth-child(4){
  padding-right:2rem;
  }

  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .desktop-navigation {
    display: none;
  }

  @media (min-width: 800px) {
    justify-content: space-between;

    .nav-icon{
    display:flex;
    padding:.25rem;
    gap:.5rem;
    border-radius:.5rem;
    color:var(--dark-70);

    input{
    display:initial;
    border:none;
    background-color:var(--dark-70);
    border-radius:.25rem 0 0 .25rem;
    padding-left:.5rem;
    outline:none;

    ::placeholder{
    color:var(--dark-80)
    }
    }

    }

    .movile-navigation {
      display: none;
    }

    .desktop-navigation {
      display: initial;
    }

    a:nth-child(2) {
      display: none;
    }
  }
`;

const Nav = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <NavContainer>
      <div className="movile-navigation">
        <div className="nav-icon" onClick={() => setVisible(!visible)}>
          <i className="bi bi-list"></i>
        </div>
        {visible && <Menu visible={visible} setVisible={setVisible} />}
      </div>
      <Link to="/" className="nav-icon">
        UPO
      </Link>
      <div className="desktop-navigation">
        <Menu />
      </div>
      <div onClick={() => props.setInputVisible(true)} className="nav-icon">
        <input type='text' placeholder="Search . . ."/>
        <i className="bi bi-search nav-icon"></i>
      </div>
      {props.inputVisible && (
        <SearchBar
          inputVisible={props.inputVisible}
          setInputVisible={props.setInputVisible}
        />
      )}
    </NavContainer>
  );
};
export default Nav;
