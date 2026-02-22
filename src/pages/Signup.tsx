import { useParams, Navigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import type { UserRole } from "../types/roles";

const Signup = () => {
  const { role } = useParams();

  const validRoles: UserRole[] = ["student", "industry", "institution"];

  if (!role || !validRoles.includes(role as UserRole)) {
    return <Navigate to="/get-started" />;
  }

  return <SignupForm role={role as UserRole} />;
};

export default Signup;
