import * as React from "react";
import { useCallback , useState } from "react";

import { NameTextBox } from "../../parts/textBox";
import { SettingCompo } from "../../../styles/container";
const { MainCompo } = SettingCompo;

import RegExpBoxes from "./textBoxes/textBoxes";
import CheckBoxes from "./checkBoxes/checkBoxes";
import ButtonsBox from "./buttons/buttons";


const SettingMainOptions = () =>{
    const [regExpName,setRegName] = useState<string>(""); 
    const setRegExpName = useCallback((e)=>setRegName(e.target.value),[regExpName]);   
    return(
        <MainCompo>
            <NameTextBox name="name" value={regExpName} func={setRegExpName} />
            <RegExpBoxes />
            <CheckBoxes />
            <ButtonsBox regExpName={regExpName} setRegName={setRegName} />
        </MainCompo>
    )
}

export default SettingMainOptions;