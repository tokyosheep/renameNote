import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import { useCallback } from "react";
import { regExpOptions_set } from "../../../../redux/action/regExpAction";
import styled from "styled-components";

import { StdCheckBox } from "../../../parts/checkBox";
import StateType from "../../../../redux/stateType";

const Wrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    gap:10px;
`;

const CheckBoxWrapper = () =>{
    const dispatch = useDispatch();
    const options = useSelector((state:StateType)=>state.regExpOptions);
    const handleCheckbox = useCallback((e,name)=>dispatch(regExpOptions_set(name,e.target.checked)),[options]);
    return(
        <Wrapper>
            <StdCheckBox name="ignore" checked={options.ignore} func={handleCheckbox} />
            <StdCheckBox name="global" checked={options.global} func={handleCheckbox} />
            <StdCheckBox name="export" checked={options.export} func={handleCheckbox} />
        </Wrapper>
    )
}

export default CheckBoxWrapper;