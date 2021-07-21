import { FileType } from "../stateType";
import { DroppedActions } from "../reducer/droppedFile";

export const droppedFile_set:(files:FileType[])=>DroppedActions = files => ({files:files,type:"droppedFile_set"});

export const droppedFile_delete:(index:number)=>DroppedActions = index => ({index:index,type:"droppedFile_delete"});

export const droppedFile_reset:()=>DroppedActions = () => ({type:"droppedFile_reset"});