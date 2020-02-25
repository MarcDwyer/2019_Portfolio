import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";

type PHamburger = {
  color?: string;
  fontSize?: string;
};
export const HamburgerMenu = styled(FaHamburger)<PHamburger>`
  color: ${p => p.color || "#eee"};
  height: 95%;
  cursor: pointer;
`;

export const MobileNavbar = styled.nav`
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 1000;
  width: 100%;
  height: 55px;
  background-color: #666666;
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;
