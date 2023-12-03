import { useState } from "react";

import Sidebar from "./Sidebar";
import { ArrowRight } from "lucide-react";
import { Button } from "@nextui-org/react";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <aside
            className={`${
              open ? "w-72" : "w-20"
            } duration-300 min-h-screen  bg-indigo-950 overflow-y-scroll no-scrollbar`}
          >
            <Sidebar open={open} />
          </aside>
          <div className="flex flex-1 flex-col">
            <header className="flex bg-orange-300 h-16 p-4">
              <ArrowRight
                onClick={() => setOpen(!open)}
                className={`rounded-full cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-indigo-950 bg-white ${
                  open && "rotate-180"
                }`}
              />
            </header>
            <div className="flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
              <h1>Home page</h1>
              <Button>Click me</Button>
            </div>
            <div className="flex">Foooter</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
