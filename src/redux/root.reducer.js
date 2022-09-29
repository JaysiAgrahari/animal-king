import {combineReducers} from 'redux'
import collectionReducer from './collections/collection.reducer';
const rootReducer = combineReducers({
    collection: collectionReducer,
})
export default rootReducer;