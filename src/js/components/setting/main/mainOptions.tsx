import * as React from "react";
import { useCallback , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StateType from "../../../redux/stateType";
import { dummyText_set } from "../../../redux/action/dummyTextAction";

import { NameTextBox } from "../../parts/textBox";
import { SettingCompo } from "../../../styles/container";
const { MainCompo } = SettingCompo;

import RegExpBoxes from "./textBoxes/textBoxes";
import CheckBoxes from "./checkBoxes/checkBoxes";
import ButtonsBox from "./buttons/buttons";

import { StdTextBox } from "../../parts/textBox";

const SettingMainOptions = () =>{
    const dispatch = useDispatch();
    const [regExpName,setRegName] = useState<string>(""); 
    const setRegExpName = useCallback((e)=>setRegName(e.target.value),[regExpName]);
    const dummy = useSelector((state:StateType)=>state.dummyText);
    const handleTextBox = useCallback((e)=>dispatch(dummyText_set(e.target.value)),[dummy]);
    return(
        <MainCompo>
            <NameTextBox name="name" value={regExpName} func={setRegExpName} />
            <RegExpBoxes />
            <CheckBoxes />
            <ButtonsBox regExpName={regExpName} setRegName={setRegName} />
            <StdTextBox name="example text" value={dummy} func={handleTextBox} />
        </MainCompo>
    )
}

export default SettingMainOptions;