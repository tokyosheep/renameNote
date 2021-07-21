import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import { useCallback } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { PresetType } from "../../../redux/stateType";
import StateType from "../../../redux/stateType";


import { PresetRadioType } from "../../../redux/reducer/presets";

import { windowMode_set } from "../../../redux/action/windowAction";
import { regExp_set , replace_set , regExpOptions_load } from "../../../redux/action/regExpAction";

const PresetWrapper = styled.li`
    width: 100%;
    height: 35px;
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 2px;
    background: #303030;
    padding: 5px;
    cursor: pointer;
    position: relative;
    &:hover{
        background: #4e4e4e;
    }
`;

const TextBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
`;

const PresetBox:(props:{name:string})=>JSX.Element = ({name}) =>{
    const dispatch = useDispatch();
    const mode = useSelector((state:StateType)=>state.windowMode);
    const presets = useSelector((state:StateType)=>state.presets);
    const loadPreset:(presets:PresetRadioType[],name:string)=>void = useCallback((presets,name)=>{
        const selected = presets.find(p=> p.name===name);
        if(!selected)return;
        dispatch(regExp_set(selected.regExp));
        dispatch(replace_set(selected.replace));
        dispatch(regExpOptions_load({global:selected.global,ignore:selected.ignore,export:selected.export}));
        dispatch(windowMode_set("rename"));
    },[]);
    return(
        <PresetWrapper onClick={()=>loadPreset(presets,name)}>
            <TextBlock>
            {name}
            </TextBlock>
        </PresetWrapper>
    )
}

export default PresetBox;