"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screeb h-screen">
      <h1 className="mb-10 font-bold text-3xl text-center">ECON-S-307 | 2025/2026 | Economie de la défense - Groupe 6</h1>
      <Image src={"/let-him-cook-meme.jpg"} width={1000} height={500} alt="meme"/>
      <div className="flex flex-col">
        <a href="https://github.com/sow-coding/S307bendo6" className="mt-20 font-medium text-fg-brand hover:underline" target="_blank">Code source</a>
      </div>
    </div>
  );
}
