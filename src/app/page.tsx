import { combineClassNames } from "@/utils";
import { Inika } from "next/font/google";

const inika = Inika({ weight: ["400", "700"], subsets: ["latin"] });

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Github, Send } from "lucide-react";

export default function Page() {
  return (
    <div className="flex justify-center">
      <main className="container">
        <section>
          <div className={combineClassNames(inika.className, "mt-8")}>
            <h1 className="text-6xl font-bold text-yellow-500">Hey</h1>
            <h1 className="text-6xl font-bold mt-2">Welcome</h1>
          </div>
          <div className="mt-8">
            <p>
              Nice to meet you, oh yeah! This is my personal blog, where you can
              learn about me and engage in technical exchanges.
            </p>
            <p>
              If you are also passionate about front-end technology, that&apos;s
              great!
            </p>
            <p>
              <Link className="text-blue-500 underline" href="#">
                Register
              </Link>{" "}
              as a member of us now!
            </p>
          </div>
        </section>
        <section>
          <div className="mt-8">
            <div className="flex gap-4">
              <Button color="primary" variant="ghost">
                <Github size={20} />
                <span>Github</span>
              </Button>
              <Button color="primary" variant="ghost">
                <Send size={20} />
                <span>2438149743@qq.com</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
