import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'reobert',
      email: 'reobert@example.com'
    })
  };
  const handleLogout = () => {
    setUser(null);
  };


  return (
    <div>
      <button onClick = {handleLogin } > Login</button>
      <button onClick = {handleLogout } >Log out</button>
      <div>User name is {user?.name ||  'Guest'}</div>
    </div>
  )
}
