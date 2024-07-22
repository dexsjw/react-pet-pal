// src/contexts/ownerReducer.jsx
export const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || []
};

export const ownerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.email === action.payload.email ? action.payload : user
        )
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.email !== action.payload)
      };
    default:
      return state;
  }
};
