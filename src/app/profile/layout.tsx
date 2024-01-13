import { Avatar, Button, Divider } from "@nextui-org/react";
import {
  UserRoundCheck,
  Layers,
  Lollipop,
  MessageCircleWarning,
  Maximize2,
} from "lucide-react";

import Menu from "./components/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <main className="container">
        <section className="relative">
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <Avatar
                  src="/leslie.jpg"
                  className="w-28 h-28 sm:w-36 sm:h-36 border border-1 mx-auto sm:mx-0"
                />
              </div>

              <div className="grow">
                <div>
                  <h3 className="text-2xl font-bold">Saturn Savage</h3>
                  <h2 className="text-slate-500">Chan Yuxi</h2>
                </div>
                <p className="mt-2">
                  Starlight does not disappoint passersby, time does not
                  disappoint those who have a heart...
                </p>
                <div className="flex gap-2 items-center mt-4">
                  <UserRoundCheck size={18} />
                  <span className="link-like">1 following</span>
                  <span className="link-like">1794 followers</span>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <Layers size={18} />
                  <span className="link-like">0 articles</span>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <Lollipop size={18} />
                  <span className="link-like">0 poetries</span>
                </div>
                <div className="flex gap-2 justify-end mt-4">
                  <Button size="sm" variant="ghost">
                    Private letter
                  </Button>
                  <Button color="primary" size="sm" variant="ghost">
                    Follow
                  </Button>
                </div>

                <Divider className="my-6" />

                <div>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 w-full sm:w-[225px] rounded shadow bg-zinc-50 dark:bg-zinc-900">
                      <h1>How to fix ..</h1>
                      <Divider className="my-1" />
                      <p className="text-slate-500">
                        the skeleton of every application is routing...
                      </p>
                    </div>
                    <div className="px-4 py-2 w-full sm:w-[225px] rounded shadow bg-zinc-50 dark:bg-zinc-900">
                      <h1>How to fix ..</h1>
                      <Divider className="my-1" />
                      <p className="text-slate-500">
                        yes, see these terms being used throughout...
                      </p>
                    </div>
                    <div className="px-4 py-2 w-full sm:w-[225px] rounded shadow bg-zinc-50 dark:bg-zinc-900">
                      <h1>How to fix ..</h1>
                      <Divider className="my-1" />
                      <p className="text-slate-500">
                        how do you think, nodes in a subtree that have
                        application...
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center mt-2 link-like">
                    <Maximize2 size={18} />
                    show more 44
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 cursor-pointer">
            <MessageCircleWarning />
          </div>
        </section>
        <Divider className="my-6" />
        <section>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <div className="w-auto sm:w-36 overflow-scroll border border-0  sm:border-r-0">
              <Menu
                items={[
                  "Social",
                  "Notification",
                  "Account",
                  "Friend",
                  "Setting",
                  "About",
                ]}
                activeKey="Social"
              />
            </div>
            <div className="grow">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
