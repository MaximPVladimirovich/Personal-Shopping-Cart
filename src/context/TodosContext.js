import { createContext, useCallback, useReducer } from "react";

export const TodosContext = createContext();

const initialState = {
  isLoading: true,
  todos: [],
  error: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: [payload],
        isLoading: false,
      };
    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTodos = useCallback(async (listId) => {
    try {
      const data = await fetch(
        `https://mockend.com/MaximPVladimirovich/Personal-Shopping-Cart/todos?listId_eq=${listId}`
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: "FETCH_TODOS", payload: result });
      }
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
    }
  }, []);

  return (
    <TodosContext.Provider value={{ ...state, fetchTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
