import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export function CriarUser() {
  const { handleCriaUser } = useContext(AuthContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fist_name, sfist_name] = useState("");
  const [last_name, slast_name] = useState("");
  const [user_type_id, suser_type_id] = useState(2);

  async function Criar_usuario(e) {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      fist_name === "" ||
      last_name === "" ||
      password2 === ""
    ) {
    } else {
      console.log({
        fist_name,
        last_name,
        user_type_id,
        email,
        password,
      });

      await handleCriaUser(fist_name, last_name, user_type_id, email, password);
      navigate("/config/pagina");

      // await handleLogin(password, email)
      // navigate("/")
    }
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-4xl font-medium text-center">Allinks</h1>
      <p className="text-slate-500 text-center">
        Olá, tudo bem?! <br /> Que bom que fara parte do nosso sonho 👋
      </p>

      <form action="" className="my-10">
        <div className="flex flex-col space-y-5">
          <label htmlFor="nome">
            <p className="font-medium text-slate-700 pb-2">Nome</p>
            <input
              id="nome"
              name="nome"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nome"
              value={fist_name}
              onChange={(e) => sfist_name(e.target.value)}
            />
          </label>
          <label htmlFor="sobreNome">
            <p className="font-medium text-slate-700 pb-2">Sobrenome</p>
            <input
              id="sobreNome"
              name="sobreNome"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Sobrenome"
              value={last_name}
              onChange={(e) => slast_name(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            <p className="font-medium text-slate-700 pb-2">Email</p>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="Senha">
            <p className="font-medium text-slate-700 pb-2">Senha</p>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="Confirme sua Senha">
            <p className="font-medium text-slate-700 pb-2">Confirme a senha</p>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Informe sua senha novamente"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>

          <button
            onClick={(e) => Criar_usuario(e)}
            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <span>Criar Usuário</span>
          </button>
          <p className="text-center">
            Já possui conta? <br />
            <a
              href="/login"
              className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            >
              <span> Entrar </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
