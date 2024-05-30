import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'robertos',
      email:'robert@example.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick = {handleLogin } > Login</button>
      <button onClick = {handleLogout } >Log out</button>
      <div>User is {user?.name ? `${ user.name } ${ user.email } ` : 'not logged in'}</div>
    </div>
  )
}
