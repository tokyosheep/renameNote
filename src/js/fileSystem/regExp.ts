import fs from "fs";
import path from "path";
import { FileType } from "../redux/stateType";

export const replaceText:(name:string,regExpPattern:string,replace:string,isIgnore:boolean,isGlobal:boolean)=>string = 
    (name,regExpPattern,replace,isIgnore,isGlobal) =>{
    try{
        let options = "";
        if(isGlobal)options += "g";
        if(isIgnore)options += "i";
        const regExp = new RegExp(regExpPattern,options);
        return name.replace(regExp,replace);
    }catch(e){
        console.log(e);
        return name;
    }
}

export const renameFile:(file:FileType,regExpPattern:string,replace:string,isIgnore:boolean,isGlobal:boolean)=>Promise<boolean> = 
    async(file,regExpPattern,replace,isIgnore,isGlobal) =>{
    try{
        const renamedName = replaceText(file.name,regExpPattern,replace,isIgnore,isGlobal);
        const filePath = path.dirname(file.path);
        await fs.promises.rename(file.path,`${filePath}/${renamedName}`);
        return true;
    }catch(e){
        console.log(e);
        alert(`${file.name} isn't able to be renamed`);
        return false;
    }
}

export const renameAndMove:(file:FileType,folder:string,regExpPattern:string,replace:string,isIgnore:boolean,isGlobal:boolean)=>Promise<boolean> =
    async(file,folder,regExpPattern,replace,isIgnore,isGlobal) =>{
        try{
            const d = await fs.promises.stat(folder);
            if(!d.isDirectory())return false;
            const renamedName = replaceText(file.name,regExpPattern,replace,isIgnore,isGlobal);
            await fs.promises.rename(file.path,`${folder}/${renamedName}`);
            return true;
        }catch(e){
            console.log(e);
            alert(`${file.name} isn't able to be renamed`);
            return false;
        }
    }