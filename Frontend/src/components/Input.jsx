import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <label
        for="input-group-1"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >
        Website URL
      </label>
      <div class="relative mb-6">
        <input
          type="text"
          id="input-group-1"
          class="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="URL"
        ></input>
      </div>
      <label
        for="website-admin"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >
        Username
      </label>
      <div class="flex">
        <input
          type="text"
          id="website-admin"
          class="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
        ></input>
      </div>

      <label
        for="website-admin"
        class="block mb-2 mt-7 text-sm font-medium text-gray-900 dark:text-black"
      >
        Password
      </label>
      <div class="flex">
        <input
          type="text"
          id="website-admin"
          class="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
        ></input>
      </div>
    </div>
  );
};

export default Input;
