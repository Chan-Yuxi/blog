import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen">
      <div className="p-8 m-8 border border-1 rounded">Hello World</div>
      <div>
        <p>
          When adjusting the size prop the size of the stroke width will be
          relative to the size of the icon, this is the default SVG behavior.
          The absoluteStrokeWidth prop is introduced to adjust this behavior to
          make the stroke width constant no matter the size of the icon.
        </p>
      </div>
      <ThemeToggle />
      <hr />
      <Link href="/profile">to profile</Link>
    </main>
  );
}
