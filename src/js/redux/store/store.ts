import { combineReducers , createStore } from "redux";

import { droppedFiles } from "../reducer/droppedFile";
import { presets } from "../reducer/presets";
import { windowMode , isWatching } from "../reducer/windowMode";
import { dummyText } from "../reducer/dummyText";
import { replace , regExp , regExpOptions } from "../reducer/regExpData";

const rootReducer = combineReducers({
    droppedFiles,
    presets,
    windowMode,
    dummyText,
    replace,
    regExp,
    regExpOptions,
    isWatching
});

const configStore = () => createStore(rootReducer);

export default configStore;