import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "hello",
      completeed: false,
    },
  ],

  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};
