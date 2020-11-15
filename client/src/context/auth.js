import { createContext, useContext } from 'react';

export const AuthContext = createContext();

//TODO Overhaul Auth Strategy

export function useAuth() {
  return useContext(AuthContext);
}