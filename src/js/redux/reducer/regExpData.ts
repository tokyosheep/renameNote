const initRegExp = "";

export type RegExpAction = {type:"regExp_set",value:string};

type RegExpReducer = (state:string,action:RegExpAction)=>string;

export const regExp:RegExpReducer = (state=initRegExp,action) =>{
    switch(action.type){
        case "regExp_set":
            return action.value;

        default:
            return state;
    }
}

const initReplace = "";

export type ReplaceAction = {type:"replace_set",value:string};

type ReplaceReducer = (state:string,action:ReplaceAction)=>string;

export const replace:ReplaceReducer = (state=initReplace,action)=>{
    switch(action.type){
        case "replace_set":
            return action.value;

        default:
            return state;
    }
} 

export type RegExpOptions = {
    ignore:boolean,
    global:boolean,
    export:boolean
}

const initOptions:RegExpOptions = {
    ignore:false,
    global:false,
    export:false
};

export type RegOptionsKey = keyof RegExpOptions;

export type RegExpActions = 
    {type:"regExpOptions_set",prop:RegOptionsKey,checked:boolean}|
    {type:"regExpOptions_load",data:RegExpOptions};

type RegExpOptionsReducer = (state:RegExpOptions,action:RegExpActions)=>RegExpOptions;

export const regExpOptions:RegExpOptionsReducer = (state=initOptions,action)=>{
    switch(action.type){
        case "regExpOptions_set":
            state[action.prop] = action.checked;
            return {...state};

        case "regExpOptions_load":
            return {...action.data};

        default:
            return state;
    }
}

