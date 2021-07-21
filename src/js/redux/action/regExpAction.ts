import { RegExpAction , ReplaceAction , RegExpActions , RegOptionsKey , RegExpOptions } from "../reducer/regExpData";

export const regExp_set:(value:string)=>RegExpAction = value => ({type:"regExp_set",value:value});

export const replace_set:(value:string)=>ReplaceAction = value => ({type:"replace_set",value:value});

export const regExpOptions_set:(prop:RegOptionsKey,checked:boolean)=>RegExpActions = (prop,checked)=>{
    return {type:"regExpOptions_set",prop:prop,checked:checked};
}

export const regExpOptions_load:(data:RegExpOptions)=>RegExpActions = data =>{
    return {type:"regExpOptions_load",data:data};
}