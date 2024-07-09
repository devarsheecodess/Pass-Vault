import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [Flag, setFlag] = useState(true);

  const getPasswords = async () => {
    try {
      let req = await fetch("http://localhost:3000/");
      let passwords = await req.json();
      setPasswordArray(passwords);
    } catch (error) {
      console.error("Error fetching passwords:", error);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const savePassword = async () => {
    if (form.site === "" || form.username === "" || form.password === "") {
      alert("Please fill all the fields!");
      return;
    }
    const newPassword = { ...form, id: uuidv4() };
    setPasswordArray([...passwordArray, newPassword]);

    try {
      await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(newPassword),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Password saved");
      setForm({ site: "", username: "", password: "" });
    } catch (error) {
      console.error("Error saving password:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = async (id) => {
    try {
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Editing password with id ", id);
      setForm({ ...passwordArray.find((item) => item.id === id), id });
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error editing password:", error);
    }
  };

  const handleDelete = async (id) => {
    let cf = confirm("Are you sure you want to delete this password?");
    if (cf) {
      try {
        await fetch("http://localhost:3000/", {
          method: "DELETE",
          body: JSON.stringify({ id }),
          headers: { "Content-Type": "application/json" },
        });
        console.log("Deleting password with id ", id);
        setPasswordArray(passwordArray.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting password:", error);
      }
    }
  };

  const handleEye = () => {
    setFlag(!Flag);
  };

  const handleCopy = (pass) => {
    navigator.clipboard.writeText(pass);
  };

  return (
    <div className="mr-36 ml-36">
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
            value={form.site}
            name="site"
            onChange={handleChange}
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
            value={form.username}
            name="username"
            onChange={handleChange}
          ></input>
        </div>

        <label
          for="website-admin"
          class="block mb-2 mt-7 text-sm font-medium text-gray-900 dark:text-black"
        >
          Password
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 z-10">
            <button onClick={handleEye} class="pointer-events-auto">
              {Flag ? (
                <i className="fa-solid fa-eye text-white"></i>
              ) : (
                <i className="fa-solid fa-eye-slash text-white"></i>
              )}
            </button>
          </div>

          <input
            type={Flag ? "password" : "text"}
            id="website-admin"
            class="bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            value={form.password}
            name="password"
            onChange={handleChange}
          ></input>
        </div>

        <button
          className="bg-slate-900 p-3 mt-5 text-white rounded-lg hover:bg-slate-700"
          onClick={savePassword}
        >
          <i class="fa-solid fa-plus mr-3"></i>
          Add
        </button>
      </div>

      {/* Table  */}
      <h3 className="font-bold mb-2 text-xl mt-10">Your Passwords</h3>
      {passwordArray.length === 0 && <div>No passwords to show!</div>}
      {passwordArray.length != 0 && (
        <div className="flex flex-col justify-center items-center">
          <table class="table-auto w-full ">
            <thead className="dark:bg-gray-800 text-white">
              <tr>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-blue-100">
              {passwordArray.map((item) => {
                return (
                  <tr>
                    <td className="py-2 border border-white w-32 text-center">
                      <a
                        href={item.site}
                        target="_blank"
                        className="hover:underline"
                      >
                        {" "}
                        {item.site}
                      </a>
                    </td>
                    <td className="py-2 border border-white w-32 text-center">
                      {item.username}
                    </td>
                    <td className="py-2 border border-white w-32 text-center">
                      {"•".repeat(item.password.length)}
                      <button
                        onClick={() => {
                          handleCopy(item.password);
                        }}
                      >
                        <i className="fa-regular fa-copy ml-3"></i>
                      </button>
                    </td>
                    <td className="py-2 border border-white w-32 text-center">
                      <span
                        onClick={() => {
                          handleEdit(item.id);
                        }}
                        className="cursor-pointer"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </span>
                      <span
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        className="cursor-pointer"
                      >
                        <i class="fa-solid fa-trash ml-5"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Input;
