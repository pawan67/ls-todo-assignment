"use client";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTodosStore } from "@/hooks/use-todos";
const CreateTodo = () => {
  const todos = useTodosStore();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      toast.error("Please enter a todo");
      return;
    }
    todos.addTodo({
      id: uuidv4(),
      todo: todo,
      isCompleted: false,
    });

    toast.success("Todo created successfully");

    setTodo("");

    return;
  };
  return (
    <div className=" my-5">
      <form onSubmit={handleSubmit} className=" flex items-center space-x-3">
        <Input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Create new todo"
        />
        <Button type="submit">
          <Plus size={16} className=" mr-2" />
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateTodo;
