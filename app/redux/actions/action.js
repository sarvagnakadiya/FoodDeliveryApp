import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, EMPTY_CART, VIEW_MORE } from "./action_types";
export const addToCart = (item) =>
(
    {
        type: ADD_TO_CART,
        payload: item
    }
)
export const increment = (item) =>
(
    {
        type: INCREMENT,
        payload: item,

    }
)
export const removeFromCart = (item) => (
    {
        type: REMOVE_FROM_CART,
        payload: item
    }
)
export const emptyCart = (item) => (
    {
        type: EMPTY_CART,
        payload: item
    }
)
export const viewMore = (item) => (
    {
        type: VIEW_MORE,
        payload: item
    }
)