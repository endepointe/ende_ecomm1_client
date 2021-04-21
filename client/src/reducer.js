export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}
const reducer = (state, action) => {
  // console.log(action)
  // if (state.basket.length > 0) {
  //   state.total += state.basket[state.basket.length - 1].price
  // }
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(`cant remove ${action.id}`)
      }
      return {
        ...state,
        basket: newBasket,
      }
    default:
      return state;
  }
}

export default reducer;