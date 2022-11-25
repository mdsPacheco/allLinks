import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import { Dashboard } from "../Layout/Dashboard";
import { Login } from "../Layout/Jwt/Login";
import { Links } from "../pages/Links/Links";
import { Products } from "../pages/Products/Products";
import { User } from "../pages/User/User";

import { PageExternaCliente } from "../pages/PageExternaCliente/PageExternaCliente";
import { PageClientConfig } from "../pages/PageClientConfig/PageClientConfig";
import { CriarUser } from "../Layout/Jwt/CadastrarUser";
import { LandPagePrice } from "../Layout/LandPagePrice";

export function RoutesCustom() {
  return (
    <Routes>
      <Route path="/" element={<LandPagePrice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<CriarUser />} />
      <Route path="/:id" element={<PageExternaCliente />} />
      <Route path="/index/link/:id" element={<PageExternaCliente />} />
      <Route path="/index/produtos/:id" element={<PageExternaCliente />} />

      <Route element={<Dashboard />}>
        <Route
          path="/config/pagina"
          element={
            <RequireAuth>
              <PageClientConfig />
            </RequireAuth>
          }
        />

        <Route
          path="/config/links"
          element={
            <RequireAuth>
              <Links />
            </RequireAuth>
          }
        />

        <Route
          path="/config/produtos"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />

        <Route
          path="/config/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
