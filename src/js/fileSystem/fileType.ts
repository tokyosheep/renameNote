import fs from "fs";

export const isDirectory:(filePath:string)=>Promise<boolean> = async filePath =>{
    try{
        const d = await fs.promises.stat(filePath);
        return d.isDirectory();
    }catch(e){
        console.log(e);
        return false;
    }
}