import { Toaster } from "@/components/ui/sonner";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
