import { DummyAction } from "../reducer/dummyText";

export const dummyText_set:(value:string)=>DummyAction = value => ({type:"dummyText_set",value:value});