import * as React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled,{keyframes} from "styled-components";
import { MainPage } from "../../../styles/container";
const { MainCompo } = MainPage;
import StateType from "../../../redux/stateType";
import ListBox from "./listBox/listBox";
import { darken } from "polished";

import { useDrop , DropTargetMonitor } from "react-dnd";
import { NativeTypes} from "react-dnd-html5-backend";
import { centerPlaced } from "../../../styles/mixin";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import { replaceText } from "../../../fileSystem/regExp";

type DropFunc = (monitor:DropTargetMonitor)=>void;

const ListContainer = styled.ul<{color:string}>`
    list-style: none;
    width: 50%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${props=>props.color};
    box-sizing: border-box;
`;

const DroppingHere = styled.div<{isActive:boolean}>`
    display: ${props=>props.isActive ? "block" : "none"};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.7);
    z-index: 5;
`;

const bounding = keyframes`
    0%{
        width: 80px;
        height: 80px;
    }

    50%{
        width: 150px;
        height: 150px;
    }

    100%{
        width: 80px;
        height: 80px;
    }
`;


const DroppedIcon = styled(HiOutlineDocumentDownload)`
    width: 150px;
    height: 150px;
    ${centerPlaced};
    animation: ${bounding} 1.2s linear infinite;
`;

const DroppedTitle = styled.h2`
    font-size: 30px;
    top: 70%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
`;

const fileListColor = "#EDF8F4";

const Main:(props:{onDrop:DropFunc})=>JSX.Element = ({onDrop}) =>{
    const regExp = useSelector((state:StateType)=>state.regExp);
    const replace = useSelector((state:StateType)=>state.replace);
    const options = useSelector((state:StateType)=>state.regExpOptions);
    const droppedList = useSelector((state:StateType)=>state.droppedFiles);
    const fileList = droppedList.map((file,index)=><ListBox key={index} fileName={file.name}/>);
    const renamedList = droppedList.map((file,index)=>{
        return <ListBox key={index} fileName={replaceText(file.name,regExp,replace,options.ignore,options.global)}/>
    });
    const [{canDrop,isOver},drop] = useDrop({
        accept:[NativeTypes.FILE],
        drop(item,monitor){
            if(onDrop){
                onDrop(monitor);
            }
        },
        collect:monitor=>({
            isOver:monitor.isOver(),
            canDrop:monitor.canDrop()
        })
    });
    const isActive = canDrop && isOver;
    return(
        <MainCompo ref={drop} >
            <DroppingHere isActive={isActive}>
                <DroppedIcon></DroppedIcon>
                <DroppedTitle>Drop here</DroppedTitle>
            </DroppingHere>
            <ListContainer color={fileListColor}>
                {fileList}
            </ListContainer>
            <ListContainer color={darken(0.1,fileListColor)}>
                {renamedList}
            </ListContainer>
        </MainCompo>
    )
}

export default Main;