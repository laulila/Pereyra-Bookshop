import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

export function ProtectedRoute({ children }) {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}