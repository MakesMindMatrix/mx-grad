import { useParams, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import type { UserRole } from "../types/roles";

const LoginRole = () => {
  const { role } = useParams();

  const validRoles: UserRole[] = ["student", "industry", "institution"];

  if (!role || !validRoles.includes(role as UserRole)) {
    return <Navigate to="/login" />;
  }

  return <LoginForm role={role as UserRole} />;
};

export default LoginRole;
