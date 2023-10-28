import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within: bg-skate-700"
        href={"/monsters"}
      >
        All Monsters
      </Link>
    </>
  );
}
