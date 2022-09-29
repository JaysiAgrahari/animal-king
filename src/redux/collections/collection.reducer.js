import animal from"./animal.js";
const INTIAL_STATE ={
    collections: animal,


}
const collectionReducer =( state=INTIAL_STATE,action)=>{
    switch(action.type) {
        default:
            return state
    }
}
export default collectionReducer