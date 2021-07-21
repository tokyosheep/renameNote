import * as React from "react";
import styled from "styled-components";
import { TextStyle , centerPlaced } from "../../styles/mixin";
import { lightButtonColor , buttonColor } from "../../styles/commonValue";
import { rgba } from "polished";

const storkeColor = "#707070";

type CheckBoxProps = {
    checked:boolean,
    func:(e:React.ChangeEvent<HTMLInputElement>,name?:string)=>void,
    name:string
}

const StdCheckBoxWrapper = styled.label<{checked:boolean}>`
    width: 100px;
    height: 30px;
    background: ${props=>props.checked ? lightButtonColor : rgba(lightButtonColor,0) };
    border: 1px solid ${props=> props.checked ? rgba(storkeColor,0) :storkeColor};
    display: block;
    position: relative;
    border-radius: 3px;
    cursor: pointer;
    transition: .3s linear;
    & > input{
        display: none;
    }
`;

const BoxText = styled.div<{size:number}>`
    position: absolute;
    ${TextStyle};
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    font-weight: 300;
`;  

const CircleIcon = styled.div<{checked:boolean}>`
    position: absolute;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    border: 1px solid ${props=> props.checked ? rgba(storkeColor,0) :storkeColor};
    transition: .3s linear;
    & > div{
        ${centerPlaced};
        width: ${props=>props.checked ? "10px" : "0px" };
        height: ${props=>props.checked ? "10px" : "0px" };
        background: ${buttonColor};
        border-radius: 50%;
        transition: .3s linear;
    }
`;

export const StdCheckBox:(props:CheckBoxProps)=>JSX.Element = ({name,func,checked}) =>{
    return(
        <StdCheckBoxWrapper checked={checked}>
            <input type="checkbox" checked={checked} onChange={(e)=>func(e,name)} />
            <CircleIcon checked={checked}>
                <div></div>
            </CircleIcon>
            <BoxText size={15}>{name}</BoxText>
        </StdCheckBoxWrapper>
    )
}