import * as React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StateType from "../../../../redux/stateType";
import { regExp_set , replace_set } from "../../../../redux/action/regExpAction";

import { StdTextBox } from "../../../parts/textBox";

const TextBoxWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    box-sizing: border-box;
`;

const RegExpBoxes = () =>{
    const dispatch = useDispatch();
    const regExp = useSelector((state:StateType)=>state.regExp);
    const replace = useSelector((state:StateType)=>state.replace);
    const handleRegExp = useCallback((e)=>dispatch(regExp_set(e.target.value)),[regExp]);
    const handleReplace = useCallback((e)=>dispatch(replace_set(e.target.value)),[replace]);
    return(
        <TextBoxWrapper>
            <StdTextBox name="regexp" func={handleRegExp} value={regExp} />
            <StdTextBox name="replace" func={handleReplace} value={replace} />
        </TextBoxWrapper>
    )
}

export default RegExpBoxes;