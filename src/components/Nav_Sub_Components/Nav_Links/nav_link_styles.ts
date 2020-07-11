import styled from "styled-components";
import { Link } from "react-router-dom";
import { NewTheme } from "../../../themes";

export const NavAppLink = styled(Link)`
width: 100%;
background-color: transparent;
height: 45px;
margin-bottom: 5px;
display: flex;

span {
    margin: auto;
}

&:hover {
    background-color: ${NewTheme.shadeOne};
}
`;
