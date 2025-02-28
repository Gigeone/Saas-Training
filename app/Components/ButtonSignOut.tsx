"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonSignOut() {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "http://localhost:3000/" });
    router.push("/");
  };
  return (
    <div className="flex items-center justify-end mb-2 mt-2 lg:mt-0 p-3">
      <Button
        onClick={handleSignOut}
        className="bg-orange-500 hover:bg-orange-600 text-white"
        variant={"default"}
        size={"sm"}
      >
        {" "}
        <LogOut className="w-4 h-4" /> Sign Out{" "}
      </Button>
    </div>
  );
}
