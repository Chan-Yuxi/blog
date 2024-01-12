import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen">
      <div className="p-8 m-8 border border-1 rounded">Hello World</div>
      <ThemeToggle />
      <hr />
      <Link href="/profile">to profile</Link>
    </main>
  );
}
