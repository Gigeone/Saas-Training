"use client";

import { signOut, useSession } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div>
          <p>hello</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export default Dashboard;
