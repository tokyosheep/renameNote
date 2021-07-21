import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { windowMode_set } from "../../../redux/action/windowAction";
import styled from "styled-components";
import StateType from "../../../redux/stateType";
import { MainPage } from "../../../styles/container";
const { NavCompo } = MainPage;

import { MenuButton } from "../../parts/buttons";

const NavButtons = () =>{
    const dispatch = useDispatch();
    const mode = useSelector((state:StateType)=>state.windowMode);
    const setSelection = useCallback(()=>dispatch(windowMode_set("select")),[mode]);
    const settingMode = useCallback(()=>dispatch(windowMode_set("create")),[mode]);
    return(
        <NavCompo>
            <MenuButton name="presets" func={setSelection} />
            <MenuButton name="setting" func={settingMode} />
        </NavCompo>
    )
}

export default NavButtons;