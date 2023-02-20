const INIT_STATE={
    carts:[]
};
export const reducer=(state=INIT_STATE,action)=>{
    switch (action.type){
    case "Add_Cart":
        return{
            ...state,
            carts:[...state.carts ,action.payload]
        }
        default:
        return state 
    }
}