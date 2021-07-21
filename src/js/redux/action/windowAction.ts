import { WindowType  , WindowModeActions , WatchingAction } from "../reducer/windowMode";

export const windowMode_set:(mode:WindowType)=>WindowModeActions = mode => ({type:"windowMode_set",mode:mode});

export const watching_set:(switchWatch:boolean)=>WatchingAction = switchWatch =>({type:"watching_set",switchWatch:switchWatch});