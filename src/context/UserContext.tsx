import React, { createContext, useState } from "react";
import { UserContextType, User } from "../types/interfaces"; // Import User type

const defaultValue: UserContextType = {
  user: null,
  setUser: () => {}, // No-op function as the default
};

export const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Update to use User type

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};