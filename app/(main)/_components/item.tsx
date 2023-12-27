import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTodosStore } from "@/hooks/use-todos";
import { cn } from "@/lib/utils";
import { Delete, Edit2Icon, Trash } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export interface TodoItemProps {
  todo: {
    isCompleted: boolean;
    todo: string;
    id: string;
  };
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const todos = useTodosStore();
  return (
    <div className=" flex  justify-between items-center border p-3 px-4 rounded-md ">
      <div>
        <p
          className={cn(`${todo.isCompleted && " line-through"}  font-medium`)}
        >
          {todo.todo}
        </p>
      </div>
      <div className=" flex space-x-4 items-center">
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={() => todos.checkToggle(todo.id)}
        />

        <TodoRemoveWithAlertDialog todo={todo} />
      </div>
    </div>
  );
};

const TodoRemoveWithAlertDialog = ({ todo }: TodoItemProps) => {
  const todos = useTodosStore();

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash size={16} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            todo.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              todos.removeTodo(todo.id);
              toast.success("Todo deleted successfully");
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TodoItem;
