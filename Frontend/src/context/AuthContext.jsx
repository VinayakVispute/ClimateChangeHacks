import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../service/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const [user, setUser] = useState(null);
  const [isuserVerified, setIsuserVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          if (user.emailVerified) {
            setIsuserVerified(true);
            setUser(user);
          } else {
            setUser(user);
            setIsuserVerified(false);
          }
        } else {
          // User is signed out
          setUser(null);
          navigate("/Test1");
        }
      } catch (error) {
        // Handle any errors that occurred during the authentication state change
        console.error("Authentication error:", error.message);
        alert("Authentication error");
        setLoginError("An error occurred during authentication.");
      } finally {
        setLoading(false);
        window.localStorage.removeItem("emailForSignIn");
      }
    });

    return unsubscribe;
  }, [user, search, navigate]);

  const value = {
    user,
    loading,
    loginError,
    setLoginError, // Use the provided setter function
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
