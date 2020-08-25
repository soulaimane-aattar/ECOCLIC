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
