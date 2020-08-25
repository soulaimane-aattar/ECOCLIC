const cardItems = (state = [], action) => {
  const item = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      const foundItem = state.find((p) => p.id === item.id);
      if (foundItem) {
        return state.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...state, { ...item, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((c) => c.id !== item.id);
    case "CHANGE_ITEM_QUANTITY":
      const quantity = action.quantity;
      return state.map((p) =>
        p.id === item.id ? { ...p, quantity: quantity } : p
      );
  }
  return state;
};

export default cardItems;
/*
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['itemId'],
  changeItemQuantity: ['itemId', 'quantity'],
});

export const CartTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  items: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: (state, { item }) => {
    const foundItem = state.items.find(product => product.id === item.id);
    if (foundItem) {
      return {
        items: state.items.map(product => (product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product)),
      };
    }

    return { items: [...state.items, { ...item, quantity: 1 }] };
  },
  [Types.REMOVE_ITEM]: (state, { itemId }) => ({
    items: [...state.items.filter(item => item.id !== itemId)],
  }),
  [Types.CHANGE_ITEM_QUANTITY]: (state, { itemId, quantity }) => ({
    items: state.items.map(item => (item.id === itemId ? { ...item, quantity } : item)),
  }),
});
*/
