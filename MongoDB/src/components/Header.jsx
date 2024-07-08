import React from "react";
import "../index.css"; // or wherever your Tailwind CSS file is

const Header = () => {
  const handleButton = () => {
    window.open("https://github.com/devarsheecodess", "_blank");
  };

  const handleLogo = () => {
    window.location.reload();
  };

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a onClick={handleLogo} class="flex items-center">
            <img
              src="./favicon.png"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap cursor-pointer dark:text-white">
              Pass Vault
            </span>
          </a>
          <div class="flex items-center lg:order-2">
            <button
              onClick={handleButton}
              className="bg-slate-900 p-3 text-white rounded-lg hover:bg-slate-700"
            >
              <i class="fa-brands fa-github mr-3"></i>
              Admin
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
