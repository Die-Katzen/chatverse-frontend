import { createContext, useContext } from "react";
import { IFormData } from "../components/Layouts/SignInUpLayout";
import { User } from "../components/AuthProvider/AuthProvider";

export interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (user: IFormData) => Promise<boolean>;
  signup: (user: IFormData) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
