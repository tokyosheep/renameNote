import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";

import { regExp_set , replace_set } from "../../../../redux/action/regExpAction";
import StateType from "../../../../redux/stateType";
import { StdTextBox , FolderTextBox } from "../../../parts/textBox";

import { DndProvider , DropTargetMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { isDirectory } from "../../../../fileSystem/fileType";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap:5px;
    box-sizing: border-box;
`;

type Props = {
    exportFolder:string,
    setExport:(e: React.ChangeEvent<HTMLInputElement>|string) => void,
    watchFolder:string,
    setWatch:(e: React.ChangeEvent<HTMLInputElement>|string) => void,
}

const TextWrapper:(props:Props)=>JSX.Element = (
    {exportFolder,setExport,watchFolder,setWatch}
    ) =>{
    const dispatch = useDispatch();
    const files = useSelector((state:StateType)=>state.droppedFiles);
    const regExp = useSelector((state:StateType)=>state.regExp);
    const replace = useSelector((state:StateType)=>state.replace);
    const setRegExp = useCallback((e)=>dispatch(regExp_set(e.target.value)),[regExp]);
    const setReplace = useCallback((e)=>dispatch(replace_set(e.target.value)),[replace]);
    const handleDropFunc = useCallback((monitor,name)=>{
        if(monitor){
            console.log(monitor);
            const dropped:File[] = monitor.getItem().files;
            console.log(dropped[0].path);
            (async()=>{
                if(await isDirectory(dropped[0].path)!==true)return;
                if(name==="export")setExport(dropped[0].path);
                if(name==="watch")setWatch(dropped[0].path);
            })();
        }
    },[files]);
    return(
        <Wrapper>
            <StdTextBox name="regexp" func={setRegExp} value={regExp} />
            <StdTextBox name="replace" func={setReplace} value={replace} />
            <DndProvider backend={HTML5Backend}>
                <FolderTextBox name="export" func={setExport} value={exportFolder} onDrop={handleDropFunc}/>
            </DndProvider>
            <DndProvider backend={HTML5Backend}>
                <FolderTextBox name="watch" func={setWatch} value={watchFolder} onDrop={handleDropFunc} />
            </DndProvider>
        </Wrapper>
    )
}

export default TextWrapper;