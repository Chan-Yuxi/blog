import { combineClassNames } from "@/utils";

export default function Menu({
  items,
  activeKey,
}: {
  items: string[];
  activeKey: string;
}) {
  return (
    <nav>
      <ul className="flex flex-row sm:flex-col">
        {items.map((item, i) => (
          <li
            key={i}
            className={combineClassNames(
              activeKey === item
                ? "shadow rounded-sm border border-transparent dark:border-[--border] bg-zinc-100 dark:bg-zinc-900"
                : "",
              "text-sm py-2 px-4 text-right "
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
