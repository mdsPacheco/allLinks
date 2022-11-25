import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export function User() {
  const { user, UpdateUser, loading } = useContext(AuthContext);

  const [fist_name, sfist_name] = useState(
    user.fist_name ? user.fist_name : ""
  );
  const [last_name, slast_name] = useState(
    user.last_name ? user.last_name : ""
  );
  const [photo_file, sphoto_file] = useState(
    user.photo_file ? user.photo_file : ""
  );
  const [biography, sbiography] = useState(
    user.biography ? user.biography : ""
  );

  return (
    <div className="flex flex-col">
      {/* Formulário de contacto */}
      <div className="container_external_form">
        <div className="flex flex-row flex-wrap w-[50%] p-[10px] rounded-lg mb-10 bg-white drop-shadow-2xl">
          {/* Profile */}
          <div className="flex flex-col w-[100%] gap-1 m-2">
            <div id="profile" className="space-y-3">
              {(user?.photo_file || photo_file) && (
                <img
                  src={photo_file}
                  alt="Avatar user"
                  className="w-44  rounded-full mx-auto"
                />
              )}

              <div>
                <h2 className="font-medium text-2xl  text-center text-teal-500">
                  {fist_name} {last_name}
                </h2>

                <p className="text-xl text-gray-500 text-center">{biography}</p>
              </div>
            </div>

            <div className="flex flex-col w-[100%] mt-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-1 sm:col-span-1">
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e) => sphoto_file(e.target.value)}
                      value={photo_file}
                      type="text"
                      name="text"
                      placeholder="Titulo"
                      id="text"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nomes */}
          <div className="grid grid-cols-3 gap-6 m-2">
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Primeiro Nome
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => sfist_name(e.target.value)}
                  value={fist_name}
                  type="text"
                  name="text"
                  placeholder="Titulo"
                  id="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2">
              <label
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Segundo Nome
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => slast_name(e.target.value)}
                  value={last_name}
                  type="text"
                  name="link"
                  placeholder="link"
                  id="link"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Biografia */}
          <div className="flex flex-row w-[100%] gap-1 m-2">
            <div className="flex flex-col w-[100%]">
              <label
                htmlFor="text"
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Biografia
              </label>

              <textarea
                id="text"
                rows={4}
                onChange={(e) => sbiography(e.target.value)}
                value={biography}
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              />
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-row w-[100%] gap-1 m-2 justify-center align-center">
            <button
              onClick={() =>
                UpdateUser({
                  email: user.email,
                  fist_name,
                  last_name,
                  photo_file,
                  biography,
                })
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Salvando..</span>
                </div>
              )}

              {!loading && "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
