import * as React from "react";
import { useState , useCallback } from "react";
import styled from "styled-components";
import { TextColor } from "../../styles/commonValue";
import { TextStyle } from "../../styles/mixin";

import { HiFolder } from "react-icons/hi";

import { useDrop , DropTargetMonitor } from "react-dnd";
import { NativeTypes} from "react-dnd-html5-backend";

export type TextBox = {
    value:string,
    func:(e:React.ChangeEvent<HTMLInputElement>|string,name?:string)=>void,
    name?:string
}

const StdTextWrapper = styled.label`
    width: 300px;
    height: 45px;
    display: block;
`;

const TextTitle = styled.div<{size:number}>`
    width: 100%;
    ${TextStyle}
    font-weight: 200;
`;

const StdTextBoxStyle = styled.input`
    width: 90%;
    height: 35px;
    border: 1px solid #9A97F0;
    color: ${TextColor};
    border-radius: 3px;
    &:focus{
        outline: none;
    }
`;

export const StdTextBox:(props:TextBox)=>JSX.Element = ({value,func,name}) =>{
    return(
        <StdTextWrapper>
            <TextTitle size={9}>{name}</TextTitle>
            <StdTextBoxStyle type="text" value={value} onChange={(e)=>func(e,name)}></StdTextBoxStyle>
        </StdTextWrapper>
    )
}


const FolderIcon = styled(HiFolder)`
    fill: rgba(0,0,0,0.6);
    width: 30px;
    height: 100%;
`;


const InvisibleTextBox = styled.input`
    width: 250px;
    height: 100%;
    font-size: 15px;
    font-weight: 200;
    color: #000;
    position: relative;
    border: none;
    background: rgba(0,0,0,0);
    &:focus{
        outline: none;
    }
`;

const TextInputWrapper = styled.div<{focus:boolean}>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 35px;
    padding: 0px 3px;
    box-sizing: border-box;
    border: 1px solid ${TextColor};
    background: ${props=>props.focus ? "#fff" : "#DBDBDB"};
    position: relative;
    transition: .3s linear;
`;

type DropFunc = (monitor:DropTargetMonitor,name:string)=>void;

export const FolderTextBox:(props:TextBox&{onDrop:DropFunc})=>JSX.Element = ({value,func,name,onDrop}) =>{
    const [isForcus,setFocus] = useState<boolean>(false);
    const focus = useCallback((e:React.FocusEvent<HTMLInputElement>) => setFocus(e.type === "focus"),[isForcus]);
    const [{canDrop,isOver},drop] = useDrop({
        accept:[NativeTypes.FILE],
        drop(item,monitor){
            if(onDrop&&name){
                onDrop(monitor,name);
            }
        },
        collect:monitor=>({
            isOver:monitor.isOver(),
            canDrop:monitor.canDrop()
        })
    });
    const isActive = canDrop && isOver;
    return(
        <StdTextWrapper ref={drop}>
            <TextTitle size={9}>{name}</TextTitle>
            <TextInputWrapper focus={isForcus || isActive}>
                <FolderIcon></FolderIcon>
                <InvisibleTextBox onFocus={(e)=>focus(e)} onBlur={(e)=>focus(e)} type="text" value={value} onChange={(e)=>func(e,name)}></InvisibleTextBox>
            </TextInputWrapper>
        </StdTextWrapper>
    )
}

const NameTextWrapper = styled.label`
    display: block;
    background: ${TextColor};
    width: 190px;
    height: 35px;
    position: relative;
`;

const NameTextBoxStyle = styled.input`
    border: none;
    background: rgba(200,200,200,0.2);
    color: #fff;
    font-size: 12px;
    width: 80%;
    height: 25px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #bbb;
    }
    position: absolute;
    top: 50%;
    left: 5%;
    transform:translateY(-50%);
`;

export const NameTextBox:(props:TextBox)=>JSX.Element = ({value,func,name}) =>{
    return(
        <NameTextWrapper>
            <NameTextBoxStyle placeholder={name} type="text" value={value} onChange={(e)=>func(e,name)}></NameTextBoxStyle>
        </NameTextWrapper>
    )
}