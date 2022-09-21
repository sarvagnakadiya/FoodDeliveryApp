import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, EMPTY_CART, VIEW_MORE } from '../actions/action_types';
const initialState = {
    foodList: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            //console.log("data added");
            return {
                // console.log("data added");
                ...state,
                foodList: [...state.foodList, action.payload],
                // ...state,
                // foodList: state.foodList.map(product =>
                //     product.item === action.item ? { ...product, selected: true } : product,
                // ),
            };

        case INCREMENT:
            let updatedCart = state.foodList.map((curElem) => {
                if (curElem.id === action.payload) {
                    return { ...curElem, quantity: curElem.quantity + 1 };
                }
                return curElem;
            });
            return { ...state, item: updatedCart };

        case REMOVE_FROM_CART:
            let list = [...state.foodList]
            const index = list.indexOf(action.payload)
            if (index != -1) {
                _ = list.splice(index, 1)
            }
            return {
                ...state,
                foodList: [...list]
            };

        case EMPTY_CART:
            return {
                ...state,
                foodList: [...state.foodList.filter((item) =>
                    item.key !== action.key)]
            };
        case VIEW_MORE:
            return {
                foodList: [action.payload],
            };
        default:
            return state;
    }
}

export default reducer;