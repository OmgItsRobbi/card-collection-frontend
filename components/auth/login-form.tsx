"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSignIn(e: any) {
    e.preventDefault();
    void signIn("credentials", {
      callbackUrl: `${window.location.origin}/`,
      username: username,
      password: password,
    });
  }

  return (
    <div>
      <form onSubmit={onSignIn} className="m-auto grid w-[400px] gap-4 pt-[5%]">
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border rounded-md px-4 py-2 shadow"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border rounded-md px-4 py-2 shadow"
        />
        <button
          type="submit"
          className="bg-secondary hover:bg-indigo-900 text-white font-bold rounded-md px-4 py-2 shadow"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export { LoginForm };
