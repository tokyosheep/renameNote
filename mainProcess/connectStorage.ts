import electron, { ipcMain } from "electron";
import Store from "electron-store";

import { PresetType } from "../src/js/redux/stateType";
import { PresetRadioType, presets } from "../src/js/redux/reducer/presets";

const initPresets:PresetType[] = [
    {
        regExp:"\w+",
        replace:"",
        name:"default",
        global:true,
        ignore:true,
        export:false
    },
    {
        regExp:"\d+",
        replace:"",
        name:"default2",
        global:true,
        ignore:true,
        export:false
    }
]
const initData = {
    presets:initPresets
}

const store = new Store<{presets:PresetType[]}>({defaults:initData});

export const initStore = () =>{
    //store.reset("presets");
    ipcMain.handle("sendData",()=>{
        const presets = store.get("presets");
        return presets;
    });

    ipcMain.handle("addData",(event,preset:PresetType&{checked?:boolean})=>{
        try{
            const presets = store.get("presets");
            delete preset.checked;
            store.set("presets",[...presets,preset]);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    });

    ipcMain.handle("deleteData",(event,deleteName:string)=>{
        try{
            const presets = store.get("presets");
            const deleted = presets.filter((preset)=>preset.name !== deleteName);
            store.set("presets",deleted);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    });

    ipcMain.handle("overWrite",(event,preset:PresetType)=>{
        try{
            const presets = store.get("presets");
            const index = presets.findIndex(p => p.name===preset.name);
            if(index===-1)return false;
            presets[index] = {...preset};
            store.set("presets",presets);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    })
}
