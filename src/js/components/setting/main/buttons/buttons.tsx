import * as React from "react";
import { ipcRenderer } from "electron";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StateType from "../../../../redux/stateType";

import { MainButton } from "../../../parts/buttons";
import { PresetType } from "../../../../redux/stateType";
import { PresetRadioType } from "../../../../redux/reducer/presets";

import { preset_create , preset_delete , preset_overWrite } from "../../../../redux/action/presetActions";
import { regExp_set , replace_set , regExpOptions_load } from "../../../../redux/action/regExpAction";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
`;

type CallbackFunc = (presets:PresetRadioType[])=>void;

export type RegisterFunc = (presets:PresetRadioType[],regExpName:string,regExp:string,replace:string)=>void;

const ButtonsBox:(props:{regExpName:string,setRegName:React.Dispatch<React.SetStateAction<string>>})=>JSX.Element = 
    ({regExpName,setRegName}) =>{
    const dispatch = useDispatch();
    const regExp = useSelector((state:StateType)=>state.regExp);
    const replace = useSelector((state:StateType)=>state.replace);
    const options = useSelector((state:StateType)=>state.regExpOptions);
    const presets = useSelector((state:StateType)=>state.presets);
    const createPreset:RegisterFunc = 
        useCallback((presets,regExpName,regExp,replace)=>{
        if(presets.find(preset=> preset.name === regExpName)){
            alert("the name has already been registered ");
            return;
        }
        const newPreset:PresetType = {name:regExpName,regExp,...options,replace};
        (async()=>{
            const flag = await ipcRenderer.invoke("addData",newPreset);
            if(!flag)return;
            dispatch(preset_create(newPreset));
            alert("the preset was registered");
        })();
    },[presets]);
    const loadPreset:CallbackFunc = useCallback((presets)=>{

        const selected = presets.find(preset=> preset.checked);
        if(!selected){
            alert("you don't select any preset");
            return;
        }
        setRegName(selected.name);
        dispatch(regExp_set(selected.regExp));
        dispatch(replace_set(selected.replace));
        dispatch(regExpOptions_load({global:selected.global,ignore:selected.ignore,export:selected.export}));
        alert("the preset was loaded");
    },[regExp,replace,options]);
    const overWrite:RegisterFunc = useCallback((presets,regExpName,regExp,replace)=>{
        if(!confirm("are you sure? to over write preset"))return;
        const selected = presets.find(preset=> preset.checked);
        if(!selected){
            alert("you don't select any preset");
            return;
        }
        (async()=>{
            const preset = {...options,regExp,replace,name:regExpName};
            const flag = await ipcRenderer.invoke("overWrite",preset);
            if(!flag){
                alert("it failed to over write preset");
                return;
            }
            dispatch(preset_overWrite({...preset,checked:false}));
            alert("the preset was over written ");
        })();
    },[presets]);
    const deletePreset:CallbackFunc = useCallback((presets)=>{
        (async()=>{
            if(!confirm("are you sure? deleting preset"))return;
            const selected = presets.find(preset=> preset.checked);
            if(!selected){
                alert("any preset isn't selected");
                return;
            }
            const flag = await ipcRenderer.invoke("deleteData",selected.name);
            if(!flag){
                alert("the preset couldn't be deleted");
                return;
            }
            dispatch(preset_delete());
            alert("the preset was deleted");
        })();
    },[presets]);
    return(
        <Wrapper>
            <MainButton name="create preset" func={()=>createPreset(presets,regExpName,regExp,replace)} />
            <MainButton name="load preset" func={()=>loadPreset(presets)} />
            <MainButton name="over write" func={()=>overWrite(presets,regExpName,regExp,replace)} />
            <MainButton name="delete preset" func={()=>deletePreset(presets)} caution={true} />
        </Wrapper>
    )
}

export default ButtonsBox;