import Logo from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ListTodo } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className=" flex items-center h-full justify-center">
      <div className="  max-w-2xl text-center flex flex-col items-center">
        <p className=" text-3xl font-semibold mt-5">
          This is a simple todo app built with{" "}
          <a
            href="https://nextjs.org/"
            className=" text-blue-500 hover:underline"
          >
            Next.js 14
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className=" text-blue-500 hover:underline"
          >
            Tailwind CSS
          </a>{" "}
          with{" "}
          <a href="https://ui.shadcn.com/">
            <span className="text-blue-500 hover:underline">Shadcn UI</span>
          </a>{" "}
          components.
        </p>

        <div className=" mt-5">
          <Link href={"/todos"} className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
