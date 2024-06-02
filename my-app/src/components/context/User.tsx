import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const  userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: 'context',
      email: 'user@example.com'
    });
  };

  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick = {handleLogin } > Login</button>
      <button onClick = {handleLogout } >Log out</button>
      <div>User is { userContext?.user ? userContext?.user?.name  + ' ' + userContext?.user?.email : 'not logged in' }</div>
    </div>
  )
}
