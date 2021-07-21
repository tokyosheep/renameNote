export type WindowType = "rename"|"select"|"create";

const initMode:WindowType = "rename";

export type WindowModeActions = {type:"windowMode_set",mode:WindowType};

type WindowModeReducer = (state:WindowType,action:WindowModeActions)=>WindowType;

export const windowMode:WindowModeReducer = (state=initMode,action)=>{
    switch(action.type){
        case "windowMode_set":
            return action.mode;

        default:
            return state;
    }
}

const initIsWatch = false;

export type WatchingAction = {type:"watching_set",switchWatch:boolean};

type WatchingReducer = (state:boolean,action:WatchingAction)=>boolean;

export const isWatching:WatchingReducer = (state=initIsWatch,action)=>{
    switch(action.type){
        case "watching_set":
            return action.switchWatch;

        default:
            return state;
    }
}