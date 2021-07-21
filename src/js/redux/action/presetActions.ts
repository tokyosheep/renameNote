import { PresetActions , PresetRadioType } from "../reducer/presets";
import { PresetType } from "../stateType";

export const preset_set:(presets:PresetType[])=>PresetActions = presets => ({type:"preset_set",presets:presets});

export const preset_create:(preset:PresetType)=>PresetActions = preset => ({type:"preset_create",preset:preset});

export const preset_delete:()=>PresetActions = () => ({type:"preset_delete"});

export const preset_overWrite:(preset:PresetRadioType)=>PresetActions = (preset)=> ({type:"preset_overWrite",preset:preset});

export const preset_check:(index:number)=>PresetActions = index => ({type:"preset_check",index:index});