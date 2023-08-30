import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { Loading } from "../components/Loading";
import { EscolasticoRoute } from "../escolasticoAPP/routes/EscolasticoRoute";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRoute = () => {
  const status = useCheckAuth();
  if (status === "checking") return <Loading />;
  return (
    <>
      {status === "authenticated" ? (
        <Routes>
          <Route
            path="/*"
            element={<EscolasticoRoute />}
          />
          <Route
            path="/login/*"
            element={<Navigate to={"/"} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/login/*"
            element={<AuthRoute />}
          />
          <Route
            path="/*"
            element={<Navigate to={"/login"} />}
          />
        </Routes>
      )}
    </>
  );
};
