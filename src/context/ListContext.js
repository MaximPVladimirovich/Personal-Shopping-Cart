import { createContext, useCallback, useReducer } from "react";

export const TodosContext = createContext();

const initialState = {
  isLoaing: true,
  todos: [],
  error: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_LISTS":
      return {
        ...state,
        todos: payload,
        isLoading: false,
      };
    case "FETCH_LISTS_ERROR":
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export function TodosContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTodos = useCallback(async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await data.json();

      if (result) {
        console.log(result);
        dispatch({ type: "FETCH_LISTS", payload: result });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_LISTS_ERROR", payload: error.message });
    }
  }, []);

  return (
    <TodosContext.Provider value={{ ...state, fetchTodos }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContext;
