import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import { IconCustom } from "../component/Icon/IconesExport";

export function Dashboard() {
  const { user, acessos, handleLogout } = useContext(AuthContext);

  return (
    <div
      id="view"
      className="h-screen flex flex-row"
      x-data="{ sidenav: true }"
    >
      <button className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* Side bar */}
      <div
        id="sidebar"
        className="bg-white  md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 h-auto transition-transform duration-300 ease-in-out"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          {/* nome contraído  */}
          <h1 className="font-bold text-4xl text-center md:hidden">
            All<span className="text-teal-600">.</span>
          </h1>

          {/* nome normal  */}
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            Allinks<span className="text-teal-600">.</span>
          </h1>

          {/* profile  */}
          <div id="profile" className="space-y-3">
            {user?.photo_file && (
              <img
                src={user?.photo_file}
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
            )}

            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                {user?.fist_name} {user?.last_name}
              </h2>

              <p className="text-xs text-gray-500 text-center">
                {user?.biography}
              </p>
            </div>
          </div>

          {/* Rotas */}
          <div id="menu" className="flex flex-col space-y-2">
            {acessos.map((acesso: any, index: number) => {
              return (
                <Link
                  key={acesso?.path}
                  to={acesso?.path}
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <IconCustom icon={acesso.icon} />
                  <span className="">{acesso.description}</span>
                </Link>
              );
            })}
            {acessos.length > 0 && (
              <Link
                id="logout-button"
                onClick={handleLogout}
                to={"/"}
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <IconCustom icon={"IconProducts"} />
                <span className="">Sair</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Container geral */}
      <div className="flex flex-col w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
