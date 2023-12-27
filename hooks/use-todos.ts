import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TodoStore = {
  todos: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }[];
  addTodo: ({
    id,
    isCompleted,
    todo,
  }: {
    id: string;
    isCompleted: boolean;
    todo: string;
  }) => void;
  removeTodo: (id: string) => void;
  checkToggle: (id: string) => void;
};

export const useTodosStore = create(
  persist<TodoStore>(
    (set) => ({
      todos: [],
      addTodo: ({ id, isCompleted, todo }) =>
        set((state) => ({
          todos: [...state.todos, { id, isCompleted, todo }],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      checkToggle: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),
    }),

    {
      name: "todos-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
