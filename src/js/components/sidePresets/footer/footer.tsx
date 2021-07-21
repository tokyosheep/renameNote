import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import StateType from "../../../redux/stateType";
import styled from "styled-components";
import { windowMode_set } from "../../../redux/action/windowAction";

import { PresetSideBar } from "../../../styles/container";
const { FooterCompo } = PresetSideBar;

import { HiArrowNarrowLeft } from "react-icons/hi";

const FooterTitle = styled.span`
    color: #fff;
    font-size: 15px;
    display: block;
`;

const ArrowIcon = styled(HiArrowNarrowLeft)`
    fill:#fff;
`;

const Footer = () =>{
    const dispatch = useDispatch();
    const mode = useSelector((state:StateType)=>state.windowMode);
    const handleMode = useCallback(()=>dispatch(windowMode_set("rename")),[mode]);
    return(
        <FooterCompo onClick={handleMode}>
            <FooterTitle>close</FooterTitle>
            <ArrowIcon></ArrowIcon>
        </FooterCompo>
    )
}

export default Footer;