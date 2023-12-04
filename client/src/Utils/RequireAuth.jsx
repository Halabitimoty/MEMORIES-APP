import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

export async function RequireAuth() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    throw redirect("/signin");
  }
}
