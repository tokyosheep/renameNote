const initDummy = "francois1616999";

export type DummyAction = {type:"dummyText_set",value:string};

type DummyReducer = (state:string,action:DummyAction)=>string;

export const dummyText:DummyReducer = (state=initDummy,action) =>{
    switch(action.type){
        case "dummyText_set":
            return action.value;

        default:
            return state;
    }
}