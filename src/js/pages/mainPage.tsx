import * as React from "react";
import { useCallback } from "react";
import { useSelector , useDispatch } from "react-redux";
import { droppedFile_set } from "../redux/action/droppedActions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MainPage } from "../styles/container";
const  { Container} = MainPage;

import Main from "../components/mainCompo/main/main";
import AsideOptions from "../components/mainCompo/aside/asideOptions";
import NavButtons from "../components/mainCompo/nav/navButtons";
import Footer from "../components/mainCompo/footer/footer";
import StateType from "../redux/stateType";

import { isDirectory } from "../fileSystem/fileType";

const MainCompo = () =>{
    const dispatch = useDispatch();
    const files = useSelector((state:StateType)=>state.droppedFiles);
    const handleDroppedFile = useCallback(monitor=>{
        console.log(monitor);
        if(monitor){
            const dropped:File[] = monitor.getItem().files;
            console.log(dropped);
            (async()=>{
                const mapped = await Promise.allSettled(dropped.map(async(d)=>{
                    if(await isDirectory(d.path))return null;
                    return {path:d.path,name:d.name};
                }));
                console.log(mapped);
                const result = mapped.filter(m=> m.status==="fulfilled"&&m.value!==null).map((m:any)=> m.value);
                dispatch(droppedFile_set(result));
            })();
            
        }
    },[files]);
    return(
        <Container>
            <DndProvider backend={HTML5Backend}>
                <Main onDrop={handleDroppedFile}/>
            </DndProvider>
            <AsideOptions />
            <NavButtons />
            <Footer />
        </Container>
    )
}

export default MainCompo;