import LogoMdc from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ModeToggleButton } from "./ModeToggleButton";
const NavBar = () => {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href="/">
          <Image
            src={LogoMdc}
            alt="logo société"
            width={30}
            height={30}
            className="w-12 h-12"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggleButton />
      </div>
    </nav>
  );
};

export default NavBar;
