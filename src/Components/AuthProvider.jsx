import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
