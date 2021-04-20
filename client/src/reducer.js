export const initialState = {
  basket: [],
  // total: 0,
};

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
        //total: state.total,
      };
    default:
      return state;
  }
}

export default reducer;