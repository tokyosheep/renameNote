import * as React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StateType from "../../../redux/stateType";

import { windowMode_set } from "../../../redux/action/windowAction";

import { SettingCompo } from "../../../styles/container";
import { BackButton } from "../../parts/buttons";
const { HeaderCompo } = SettingCompo;

const SettingTitle = styled.h1`
    font-size: 33px;
    font-weight: 300;
    color: #7e7b7b;
    margin: 0px;
    margin-top: 4px;
`;

const Header = () =>{
    const dispatch = useDispatch();
    const mode = useSelector((state:StateType)=>state.windowMode);
    const handleWindow = useCallback(()=>dispatch(windowMode_set("rename")),[mode]);
    return(
        <HeaderCompo>
            <SettingTitle>
                Preset Setting
            </SettingTitle>
            <BackButton name="fnished" func={handleWindow}/>
        </HeaderCompo>
    )
}

export default Header;