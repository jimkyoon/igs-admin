import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAlertContext } from "./alertContext";

export const useAuthContext = () => {
  const { setAlert } = useAlertContext();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => setAlert(error), [error, setAlert]);

  return {
    user,
    loading,
    login,
    logout,
  };
};
