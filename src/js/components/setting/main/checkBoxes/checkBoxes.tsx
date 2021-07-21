import * as React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StateType from "../../../../redux/stateType";

import { regExpOptions_set } from "../../../../redux/action/regExpAction";

import { StdCheckBox } from "../../../parts/checkBox";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    gap:10px;
    padding: 10px;
`;

const CheckBoxes = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.regExpOptions);
    const handleCheckBox = useCallback((e,name)=>dispatch(regExpOptions_set(name,e.target.checked)),[options]);
    return(
        <Wrapper>
            <StdCheckBox name="ignore" checked={options.ignore} func={handleCheckBox}/>
            <StdCheckBox name="global" checked={options.global} func={handleCheckBox}/>
            <StdCheckBox name="export" checked={options.export} func={handleCheckBox}/>
        </Wrapper>
    )
}

export default CheckBoxes;