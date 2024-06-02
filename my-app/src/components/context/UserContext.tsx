import { useState, createContext } from "react"

export type AuthUser = {
  name: string,
  email: string
}

export type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>

}

export const UserContext = createContext<UserContextType | null>(null);

export type UserContextProvderProps = {
  children: React.ReactNode;
}

export const UserContextProvider = ({children}: UserContextProvderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider  value={{ user, setUser}}> {children} </UserContext.Provider>
  )
}
