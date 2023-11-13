import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.section`
  width: 100%;
  height: 90px;
`;

const NavBarContentContainer = styled.section`
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px #00000026;
  align-items: center;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 53px;
  height: 40px;
  object-fit: contain;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
`;

// const Button = styled.button`
//   width: 158px;
//   height: 40px;
//   top: 25px;
//   left: 1202px;
//   border-radius: 24px;
//   padding: 8px 16px;
//   gap: 8px;
//   color: #002eff;
//   border: none;
//   cursor: pointer;
//   font-family: "Barlow";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 18px;
//   background-color: transparent;

//   &:hover,
//   &.active {
//     background-color: #e6f0ff;
//   }
// `;

const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  color: #002eff;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  border-radius: 24px;
  padding: 8px 16px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #e6f0ff;
  }
`;

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarContentContainer>
          <LogoImg src="logo.png" alt="Logo Entel" />
          <ButtonWrapper>
            <NavLinkButton to="/form">Formulario</NavLinkButton>
            <NavLinkButton to="/list">Lista formulario</NavLinkButton>
          </ButtonWrapper>
        </NavBarContentContainer>
      </NavBarContainer>
    </>
  );
};
