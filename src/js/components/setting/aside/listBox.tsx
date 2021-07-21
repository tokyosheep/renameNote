import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { preset_check } from "../../../redux/action/presetActions";
import styled from "styled-components";

import { rgba } from "polished"
import StateType from "../../../redux/stateType";

const Wrapper = styled.li<{checked:boolean}>`
    background: ${props=>props.checked ? rgba("#AFA9A9",0.4) : rgba("#AFA9A9",0.2)};
    width: 100%;
    height: 25px;
    margin-bottom: 2px;
    cursor: pointer;
    &:hover{
        background: rgba(#AFA9A9,0.6);
    }
`;

const ListTitle = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 300;
`;

const ListBox:(props:{name:string,checked:boolean,index:number})=>JSX.Element = ({name,checked,index}) =>{
    const dispatch = useDispatch();
    const presets = useSelector((state:StateType)=>state.presets);
    console.log(index);
    const handleClick = useCallback((index)=> dispatch(preset_check(index)),[presets]);
    return(
        <Wrapper checked={checked} onClick={()=>handleClick(index)}>
            <ListTitle>
                {name}
            </ListTitle>
        </Wrapper>
    )
}

export default ListBox;