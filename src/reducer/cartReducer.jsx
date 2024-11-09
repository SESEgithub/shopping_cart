

export const CartReducer = (state,action) => {
    const{type, payload} = action;
    switch(type){
        case 'ADD_TO_CART':
            return {...state,cartItems:payload.items};
        case 'REMOVE_FROM_CART':
            return {...state,cartItems:payload.items};
        case "UPDATE_TOTAL_PRICE":
            return {...state,totalPrice:payload.total_Price};
        default:
          throw new Error("no case found for this action");
        }

}
