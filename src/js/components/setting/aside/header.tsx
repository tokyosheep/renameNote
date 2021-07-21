import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,0.2);
`;

const HeaderTitle = styled.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin: 0px;
`;

const Header = () =>{
    return(
        <HeaderWrapper>
            <HeaderTitle>Presets</HeaderTitle>
        </HeaderWrapper>
    )
}

export default Header;