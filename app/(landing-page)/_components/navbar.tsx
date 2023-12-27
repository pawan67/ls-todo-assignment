import Logo from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" p-5  fixed inset-x-0 flex justify-between  top-0 ">
      <Logo />

      <div>
        <Link href={"/todos"} className={buttonVariants({
            variant: "outline",
        })}>
          Go to Todos
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
