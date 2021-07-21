import { WindowType } from "./reducer/windowMode";
import { RegExpOptions } from "./reducer/regExpData";
import { PresetRadioType } from "./reducer/presets";


export type FileType = {
    path:string,
    name:string
}

export type PresetType = {
    name:string,
    regExp:string,
    replace:string,
    global:boolean,
    ignore:boolean,
    export:boolean
}

type StateType = {
    droppedFiles:FileType[],
    presets:PresetRadioType[],
    windowMode:WindowType,
    dummyText:string,
    regExp:string,
    replace:string
    regExpOptions:RegExpOptions,
    isWatching:boolean
}

export default StateType;