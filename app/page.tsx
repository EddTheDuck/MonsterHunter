import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Welcome to MH Monster DB!</h1>
      </header>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within: bg-skate-700"
        href={"/monsters"}
      >
        All Monsters
      </Link>
    </>
  );
}
