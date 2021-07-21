import * as React from "react";
import styled from "styled-components";

import { PresetSideBar } from "../../../styles/container";
const { HeaderCompo } = PresetSideBar;

const HeaderTitle = styled.h2`
    font-size: 25px;
    font-weight: 300;
    color: #fff;
    margin: 0px 10px;
`;

const Header = () =>{
    return(
        <HeaderCompo>
            <HeaderTitle>
                Regexp List
            </HeaderTitle>
        </HeaderCompo>
    )
}

export default Header;