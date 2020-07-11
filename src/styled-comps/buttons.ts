import styled from "styled-components";
import { Link } from "react-router-dom";
import { NewTheme } from "../themes";

export const ProjectHomeBtn = styled(Link)`
      margin-top: 15px !important;
      width: 125px;
      margin: auto;
      border: none;
      background-color: ${NewTheme.btnColor};
      color: ${NewTheme.textColor};
      font-weight: 600;
      padding: 15px 15px;
      opacity: 1;
      border-radius: 5px;

      &:hover {
        opacity: 0.9;
      }
`;
