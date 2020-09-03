import ACTION_TYPES from "../actios/acctionTypes";
const cardItems = (state = [], action) => {
  const item = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      const foundItem = state.find((p) => p.articleId === item.articleId);
      if (foundItem) {
        return state.map((p) =>
          p.articleId === item.articleId
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...state, { ...item, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((c) => c.articleId !== item.articleId);
    case "CHANGE_ITEM_QUANTITY":
      const quantity = action.quantity;
      return state.map((p) =>
        p.articleId === item.articleId ? { ...p, quantity: quantity } : p
      );
    case ACTION_TYPES.CHECKOUT_SUCCESS:
      return [];
  }
  return state;
};

export default cardItems;
