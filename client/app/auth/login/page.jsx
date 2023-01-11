"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    const response = await fetch("http://localhost:4001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    
    if(response.ok){
      router.push("/home");
    }
    setUser({ username: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter password"
        value={user.password}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
