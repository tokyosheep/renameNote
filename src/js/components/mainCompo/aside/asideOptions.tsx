import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import { MainPage } from "../../../styles/container";
const { SideCompo } = MainPage;

import { useFolder } from "./usePreset";
import ButtonsWrapper from "./buttonsWrapper/buttonsWrapper";
import TextWrapper from "./textWrapper/textWrapper";
import CheckBoxWrapper from "./checkBoxWrapper/checkBoxWrapper";


const AsideOptions = () =>{
    const [exportFolder,setExportValue,watchFolder,setWatchValue] = useFolder();
    return(
        <SideCompo>
            <ButtonsWrapper exportFolder={exportFolder} watchFolder={watchFolder}/>
            <TextWrapper 
                exportFolder={exportFolder} 
                setExport={setExportValue} 
                watchFolder={watchFolder}
                setWatch={setWatchValue}    
            />
            <CheckBoxWrapper />
        </SideCompo>
    )
}

export default AsideOptions;