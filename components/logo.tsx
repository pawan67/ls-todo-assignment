import { ListTodo } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Logo = () => {
  return (
    <Link
      href="/"
      className={buttonVariants({
        variant: "ghost",
      })}
    >
      <ListTodo size={22} className=" mr-2" />
      Todos
    </Link>
  );
};

export default Logo;
