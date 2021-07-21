import { FileType } from "../stateType";


export type DroppedActions = 
    {type:"droppedFile_set",files:FileType[]}|
    {type:"droppedFile_delete",index:number}|
    {type:"droppedFile_reset"};

type DroppedReducer = (state:FileType[],action:DroppedActions)=>FileType[];

const initFiles:FileType[] = [];

export const droppedFiles:DroppedReducer = (state=initFiles,action)=>{
    switch(action.type){
        case "droppedFile_set":
            return [...action.files];

        case "droppedFile_delete":
            return state.filter((s,i)=> i !==action.index);

        case "droppedFile_reset":
            return [];

        default:
            return state;
    }
}