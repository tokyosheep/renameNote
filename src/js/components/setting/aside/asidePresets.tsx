import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import StateType from "../../../redux/stateType";

import { SettingCompo } from "../../../styles/container";
const { AsideListCompo } = SettingCompo;

import Header from "./header";
import ListBox from "./listBox";

const ListBoxWrapper = styled.ul`
    list-style: none;
    padding: 0;
    overflow: scroll;
    margin: 0px;
`;

const AsidePresets = () =>{
    const presets = useSelector((state:StateType)=>state.presets);
    const presetList = presets.map((preset,index)=><ListBox key={index} name={preset.name} checked={preset.checked} index={index}></ListBox>)
    return(
        <AsideListCompo>
            <Header />
            <ListBoxWrapper>
                {presetList}
            </ListBoxWrapper>
        </AsideListCompo>
    )
}

export default AsidePresets;