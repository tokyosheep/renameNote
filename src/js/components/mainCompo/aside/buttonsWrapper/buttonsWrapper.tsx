import * as React from "react";
import { useState , useMemo , useCallback} from "react"
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";

import { StdButton } from "../../../parts/buttons";
import StateType from "../../../../redux/stateType";
import { watching_set } from "../../../../redux/action/windowAction";

import { renameFile , renameAndMove } from "../../../../fileSystem/regExp";

import { droppedFile_reset } from "../../../../redux/action/droppedActions";
import fs from "fs";

import { WatchData } from "./watchClass";

const Wrapper = styled.div`
    width: auto;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    box-sizing: border-box;
`;

const ButtonsWrapper:(props:{exportFolder:string,watchFolder:string})=>JSX.Element = ({exportFolder,watchFolder}) =>{
    const dispatch = useDispatch();
    const files = useSelector((state:StateType)=>state.droppedFiles);
    const options = useSelector((state:StateType)=>state.regExpOptions);
    const regExp = useSelector((state:StateType)=>state.regExp);
    const replace = useSelector((state:StateType)=>state.replace);
    const watchMode = useSelector((state:StateType)=>state.isWatching);
    const [watchStatus] = useState<WatchData>(new WatchData(watchFolder,exportFolder));
    useMemo(()=>watchStatus.exportFolder = exportFolder,[exportFolder]);
    useMemo(()=>watchStatus.watchFolder = watchFolder,[watchFolder]);
    useMemo(()=>{if(!watchMode)watchStatus.stopWatch()},[watchMode])
    const launchWatch = async() => {
        const flag = await watchStatus.launchToWatch(regExp,replace,options);
        if(flag)dispatch(watching_set(true));
    }
    const renameFiles = async() =>{
        if(!options.export){
            await Promise.allSettled(files.map(async(file)=>{
                return await renameFile(file,regExp,replace,options.ignore,options.global);
            }));
        }else{
            const d = await fs.promises.stat(exportFolder);
            if(!d.isDirectory()){
                alert("the directory is invlid");
                return;
            }
            await Promise.allSettled(files.map(async(file)=>{
                return await renameAndMove(file,exportFolder,regExp,replace,options.ignore,options.global);
            }));
        }
        dispatch(droppedFile_reset());
    }
    const resetFiles = useCallback(()=>dispatch(droppedFile_reset()),[files]);
    return(
        <Wrapper>
            <StdButton func={launchWatch} name="watch" />
            <StdButton func={renameFiles} name="rename" />
            <StdButton func={resetFiles} name="reset" />
        </Wrapper>
    )
}

export default ButtonsWrapper;