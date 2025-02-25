"use client";
import Image from "next/image";

import LogoMdc from "@/public/logo.svg";
import { Cursor, Typewriter } from "react-simple-typewriter";
import ButtonsProvider from "./Components/ButtonsProvider";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image
        src={LogoMdc}
        alt="logo"
        width={100}
        height={100}
        className="mb-4 object-contain"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-center font-black mb-2 uppercase flex items-center">
        <Typewriter
          typeSpeed={50}
          words={[
            "Bienbenue",
            "Welcome",
            "Benvenuto",
            "Willkommen",
            "Vienvenido",
          ]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>
      <p className="my-2 text-center">Rejoignez une aventure de developpeur</p>
      <ButtonsProvider />
    </section>
  );
}
