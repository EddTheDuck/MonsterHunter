import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Link
        className="border border-stone-500 text-stone-800 px-2 py-1 rounded hover:bg-stone-800 hover:text-stone-200 focus-within: bg-skate-700"
        href={"/monsters"}
      >
        All Monsters
      </Link>
    </>
  );
}
