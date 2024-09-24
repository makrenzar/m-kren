import "boxicons";
import React, { useState } from "react";

function NavigationBar() {
  const [active, setActive] = useState("portfolio");

  const navItems = [".projects", ".experience", ".contact"];

  return (
    <>
      <div className="main-h-screen  overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between  space-x-4 rounded-full p-2 mt-3 border">
            <span className="bg-[#0D0D0E] text-[#F1EDE7] w-5 hover:pr-[59px] overflow-hidden cursor-pointer ease-in-out duration-300">m/kren</span>
            <div className="space-x-3">
              {" "}
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-2 py-2 rounded-lg transition-colors ease-in-out duration-300 ${
                    active === item
                      ? "bg-[#0D0D0E] text-[#F1EDE7]"
                      : "bg-[#F1EDE7]  hover:bg-[#706a62] hover:text-[#F1EDE7] "
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
<p>resume</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
