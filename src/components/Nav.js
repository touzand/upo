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
    padding: 0.5rem;
    cursor: pointer;
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

  .movile-navigation {
  }

  @media (min-width: 800px) {
    justify-content: space-between;

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
        <i className="bi bi-search"></i>
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
