import * as React from "react";
import { useState , useCallback } from "react";

export const useRegExp = () =>{
    const [regExp,setRegExp] = useState<string>("");
    const [replace,setReplace] = useState<string>("");
    const setRegExpValue = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>setRegExp(e.target.value),[regExp]);
    const setReplaceValue = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>setReplace(e.target.value),[replace]);
    return [regExp,setRegExpValue,replace,setReplaceValue];
}

export const useFolder:()=>
    [string,(e:React.ChangeEvent<HTMLInputElement>|string)=>void,string,(e:React.ChangeEvent<HTMLInputElement>|string)=>void] 
    = () =>{
    const [exportFolder,setExport] = useState<string>("");
    const [watchFolder,setWatch] = useState<string>("");
    const setExportValue = useCallback((e:React.ChangeEvent<HTMLInputElement>|string)=>setExport(typeof e === "string" ? e : e.target.value),[exportFolder]);
    const setWatchValue = useCallback((e:React.ChangeEvent<HTMLInputElement>|string)=>setWatch(typeof e === "string" ? e : e.target.value),[watchFolder]);
    return [exportFolder,setExportValue,watchFolder,setWatchValue];
}

export const useRegExpOptions = () =>{
    const [isExport,setIsExport] = useState<boolean>(false);
    const [isGlobal,setIsGlobal] = useState<boolean>(false);
    const [isIgnore,setIsIgnore] = useState<boolean>(false);
    const setOptionValue = useCallback((e:React.ChangeEvent<HTMLInputElement>,name:string)=>{
        switch(name){
            case "export":
                setIsExport(e.target.checked);
                break;

            case "global":
                setIsGlobal(e.target.checked);
                break;

            case "ignore":
                setIsIgnore(e.target.checked);
                break;
        }
    },[isExport,isGlobal,isIgnore]);
    return [isExport,isGlobal,isIgnore,setOptionValue];
}