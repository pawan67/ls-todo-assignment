"use client";
import Logo from "@/components/logo";
import CreateTodo from "../../_components/create";
import { useTodosStore } from "@/hooks/use-todos";
import TodoItem from "../../_components/item";

const MainPage = () => {
  const todos = useTodosStore();

  console.log(todos.todos);
  return (
    <div>
      <Logo />
      <div>
        <CreateTodo />
      </div>

      <div className=" space-y-3">
        {todos.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
