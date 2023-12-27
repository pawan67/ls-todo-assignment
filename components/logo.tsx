import { ListTodo } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="  flex items-center space-x-2">
      <ListTodo size={40} />
      <span className=" text-xl font-semibold">Todo</span>
    </Link>
  );
};

export default Logo;
