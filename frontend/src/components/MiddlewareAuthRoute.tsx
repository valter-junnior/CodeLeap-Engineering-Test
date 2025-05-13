import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"

export const MiddlewareAuthRoute = () => {
  const username = useSelector((state: RootState) => state.auth.username);

  return username ? <Outlet /> : <Navigate to={"/login"} />
}
