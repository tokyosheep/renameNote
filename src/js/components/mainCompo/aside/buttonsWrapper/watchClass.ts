import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";

import { RegExpOptions } from "../../../../redux/reducer/regExpData";
import { renameFile , renameAndMove } from "../../../../fileSystem/regExp";
import { FileType } from "../../../../redux/stateType";

import { isDirectory } from "../../../../fileSystem/fileType";

interface WatchDataClass {
    launchToWatch:(regExp:string,replace:string,watchOption:RegExpOptions)=>Promise<boolean>,
    stopWatch:()=>Promise<void>
}

export class WatchData implements WatchDataClass{
    private watcher:chokidar.FSWatcher|null;
    private _watchFolder:string;
    private _exportFolder:string;
    constructor(
        watchFolder:string,
        exportFolder:string,
    ){
        this.watcher = null;
        this._watchFolder = watchFolder;
        this._exportFolder = exportFolder;
    }

    set watchFolder(folder:string){
        this._watchFolder = folder;
    }

    set exportFolder(folder:string){
        this._exportFolder = folder;
    }

    get watchFolder(){
        return this._watchFolder;
    }

    get exportFolder(){
        return this._exportFolder
    }

    async launchToWatch(regExp:string,replace:string,watchOption:RegExpOptions){
        if(!await isDirectory(this.watchFolder)||(watchOption.export&&! await isDirectory(this.exportFolder))){
            alert("directory you set is invlid");
            return false;
        }
        if(watchOption.export&&this.exportFolder===this.watchFolder){
            alert("watchfolder and exportfolder you selected same directory");
            return false;
        }
        this.watcher = chokidar.watch(this.watchFolder,{
            persistent:true,
            ignoreInitial:true,
            depth:0
        });

        this.watcher
        .on("ready",()=>alert("ready to watch"))
        .on("add",async(filePath)=>{
            console.log(filePath);
            const fileObj = {path:filePath,name:path.basename(filePath)};
            if(watchOption.export){
                await renameAndMove(
                    fileObj,
                    this._exportFolder,
                    regExp,
                    replace,
                    watchOption.ignore,
                    watchOption.
                    global
                );
            }else{
                await renameAndMove(
                    fileObj,
                    path.dirname(this.watchFolder),
                    regExp,
                    replace,
                    watchOption.ignore,
                    watchOption.
                    global
                )
            }
            
        });
        return true;
    }

    async stopWatch(){
        if(this.watcher !== null){
            await this.watcher.close();
            alert("watch is stopped");
        }
    }
}