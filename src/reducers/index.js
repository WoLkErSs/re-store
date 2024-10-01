const initialState = {
  books: [],
  loading: true,
  error: null,
  orderTotal: 220,
  cartItems: [
    {
      id: 'idsdawda',
      name: 'book1',
      count: 10,
      total: 2
    }
  ]
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
