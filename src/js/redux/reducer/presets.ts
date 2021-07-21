import { PresetType } from "../stateType";

export type PresetRadioType = PresetType&{checked:boolean};

const initPresets:PresetRadioType[] = [];

export type PresetActions = 
    {type:"preset_set",presets:PresetType[]}|
    {type:"preset_create",preset:PresetType}|
    {type:"preset_delete"}|
    {type:"preset_check",index:number}|
    {type:"preset_overWrite",preset:PresetRadioType};

type PresetReducer = (state:PresetRadioType[],action:PresetActions)=>PresetRadioType[];

export const presets:PresetReducer = (state=initPresets,action)=>{
    switch(action.type){
        case "preset_set":
            return action.presets.map(o=> ({...o,checked:false}));
            
        case "preset_create":
            return [...state,{...action.preset,checked:false}];

        case "preset_overWrite":
            const index = state.findIndex(s=> s.checked);
            state[index] = {...action.preset};
            return {...state};

        case "preset_check":
            console.log(state);
            console.log(action.index);
            state.forEach(s=> s.checked = false);
            state[action.index].checked = true;
            return [...state];

        case "preset_delete":
            return state.filter((f)=> !f.checked);

        default:
            return state;
    }
}