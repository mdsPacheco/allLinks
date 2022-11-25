import { IconWeight } from "phosphor-react";
import React from "react";
import { useState, useEffect, useCallback, createContext } from "react";
import api from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
interface Forme {
  id: number;
  url_path: string;
  link_rout: boolean;
  produto_rout: boolean;
  type_de_fundo: string;
  cor_de_fundo_solida: string;
  direcao_do_degrade: string;
  primeira_cor: string;
  primeira_posicao: number;
  segunda_cor: string;
  segunda_posicao: number;
}

interface AuthContextData {
  user: any;
  acessos: any;
  authenticated: boolean;
  loading: boolean;
  pagina: Forme | null;
  links: Forme_link[] | [];
  handleCriaUser: (
    fist_name,
    last_name,
    user_type_id,
    email,
    password
  ) => Promise<boolean>;
  handleLogin: (user_password, user_email) => Promise<boolean>;
  handleLogout: () => void;
  UpdateUser: (dados: any) => Promise<boolean>;
  setPagina: (pagina: Forme) => void;
  isAuthenticated: () => boolean;
}

export declare type Type = "Colorido" | "Gradiente" | "Transparente";
interface Forme_link {
  id: string;

  page_id: string;

  text: string;
  link: string;
  type: Type;

  firstcolor: string;
  secondcolor: string;

  icon: string;
  color: string;
  weight: IconWeight;
  size: number;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState();
  const [acessos, sacessos] = useState([]);
  const [pagina, spagina] = useState<Forme | null>(null);
  const [links, slinks] = useState<Forme_link[] | []>([]);
  const isAuthenticated = () => localStorage.getItem("token") !== null;
  const setPagina = useCallback(async (pagina: Forme) => {
    spagina(pagina);
  }, []);

  const handleCriaUser = useCallback(
    async (fist_name, last_name, user_type_id, email, password) => {
      const dados = {
        fist_name,
        last_name,
        user_type_id,
        email,
        password,
      };

      try {
        const user = await api.post(`/User`, dados);
        return true;
      } catch (error) {
        return false;
      }
    },
    []
  );

  const handleLogin = useCallback(async (user_password, user_email) => {
    setLoading(true);
    const { data } = await api.post(`/User_Login`, {
      email: user_email,
      password: user_password,
    });

    // valida se usuario existe
    if (data.status === "failed") {
      return true;
    } else {
      localStorage.setItem("token", JSON.stringify(data.token));
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setUser(data);
      sacessos(data.acessos);

      setAuthenticated(true);
      
      const pg = await api.get(`/Index_Page`);
      spagina(pg.data.result);
      
      const lk = await api.get(`/Index_Link`);
      slinks(lk.data.result);
      
      setLoading(false);
      return true;
    }
  }, []);

  const handleUserRefresh = useCallback(async () => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token || ""
    )}`;

    // loga usuario
    const { data } = await api.get(`/User_Refresh`);

    const pg = await api.get(`/Index_Page`);
    spagina(pg.data.result);

    const lk = await api.get(`/Index_Link`);
    slinks(lk.data.result);

    // valida se usuario existe
    if (data.status === "failed") {
      setAuthenticated(false);
      setLoading(false);
      return true;
    } else {
      setUser(data);
      sacessos(data.acessos);

      setAuthenticated(true);
      setLoading(false);

      return true;
    }
  }, []);

  function handleLogout() {
    setAuthenticated(false);
    window.localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
  }

  const UpdateUser = useCallback(async (dados: any) => {
    try {
      setLoading(true);
      await api.put(`/User`, dados);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      return false;
    }
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        await handleUserRefresh();
        setLoading(false);
      } catch (error) {
        setAuthenticated(false);
        setLoading(false);
      }
    }
    getUser();
  }, [handleUserRefresh]);

  return (
    <AuthContext.Provider
      value={{
        user,
        acessos,
        authenticated,
        loading,
        pagina,
        links,
        handleCriaUser,
        handleLogin,
        handleLogout,
        UpdateUser,
        setPagina,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
