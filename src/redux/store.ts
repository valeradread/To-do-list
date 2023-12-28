import reducer from './reducer';
import {combineReducers, legacy_createStore as createStore} from "redux";


export type RootState = ReturnType<typeof reducers>;


const reducers = combineReducers({
    notesTable_reducer: reducer
});
let store = createStore(reducers);

export default store;