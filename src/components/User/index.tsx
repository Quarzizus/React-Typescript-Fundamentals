import { useState } from "react";

interface User {
  uid: number | string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 123456,
      name: "Miguel Vásquez",
    });
  };

  return (
    <div>
      <h2>User: useState</h2>
      <button onClick={login}>Login</button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export { User };
