import React, { useCallback, useContext, useState } from "react";
import { Trash, IconWeight } from "phosphor-react";

import api from "../../services/api";
import { AuthContext } from "../../Context/AuthContext";
import useInputCustom from "../../hooks/useInput";
import { LinkCad } from "./LinksCads";
import useClasseSelect from "../../hooks/useClasseSelect";

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

export function Links() {
  const { makeGradientLinearStyle2 } = useClasseSelect();

  const { user, pagina, links } = useContext(AuthContext);

  const { values, handleChange, reset } = useInputCustom<Forme_link | null>(
    null
  );
  const [loading, sloading] = useState<boolean>(false);
  const [links_criados, slinks_criados] = useState(links);

  const Cria_Pagina = useCallback(async () => {
    sloading(true);
    const dados = {
      page_id: pagina?.id,
      text: values?.text,
      link: values?.link,
      type: values?.type,
      firstcolor: values?.firstcolor,
      secondcolor: values?.secondcolor,
      icon: values?.icon,
      color: values?.color,
      weight: values?.weight,
      size: values?.size,
    };

    try {
      if (links_criados.length >= 5)
        throw { message: "Você criou o limite máximo de Links" };

      const response = await api.post(`/Create_Link`, dados);
      slinks_criados(response.data.result);
      console.log("Sucesso");
      sloading(false);
    } catch (error) {
      console.log(error);
      sloading(false);
    }
  }, [values]);

  const onDelete = async (id: number) => {
    const teste = await api.delete(`/Delete_Link/${id}`);
    slinks_criados(teste.data.result);
    reset();
    return true;
  };

  return (
    <div className="flex flex-col m-4">
      {pagina && (
        <div className="flex flex-col justify-center my-8 w-full">
          <div className="shadow bg-white sm:rounded-md sm:overflow-hidden">
            {/* Forme de criação */}
            <div className="px-4 py-5  space-y-6 sm:p-6">
              {/* Texto */}
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Titulo
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={handleChange}
                      value={values?.text}
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
                    Link
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={handleChange}
                      value={values?.link}
                      type="text"
                      name="link"
                      placeholder="link"
                      id="link"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Cor e restante */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de cor do card
                  </label>
                  <select
                    id="type"
                    name="type"
                    onChange={handleChange}
                    value={values?.type}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Selecione um valor</option>
                    <option value="Colorido">Colorido</option>
                    <option value="Gradiente">Gradiente</option>
                    <option value="Transparente">Transparente</option>
                  </select>
                </div>

                {values?.type == "Colorido" && (
                  <div className="col-span-1 sm:col-span-1">
                    <label
                      htmlFor="firstColor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cor de fundo Solida
                    </label>
                    <input
                      onChange={handleChange}
                      value={values?.firstcolor}
                      type="color"
                      name="firstcolor"
                      placeholder="Cor de fundo"
                      id="firstColor"
                      className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                )}

                {values?.type == "Gradiente" && (
                  <>
                    <div className="col-span-1 sm:col-span-1">
                      <label
                        htmlFor="firstColor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cor de inicio
                      </label>
                      <input
                        onChange={handleChange}
                        value={values?.firstcolor}
                        type="color"
                        name="firstcolor"
                        placeholder="Cor de fundo"
                        id="firstColor"
                        className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>

                    <div className="col-span-1 sm:col-span-1">
                      <label
                        htmlFor="secondColor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cor fim
                      </label>
                      <input
                        onChange={handleChange}
                        value={values?.secondcolor}
                        type="color"
                        name="secondcolor"
                        placeholder="Cor de fundo"
                        id="secondColor"
                        className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Gradiente e icone */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-'1 sm:col-span-1">
                  <label
                    htmlFor="icon"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Icone do card
                  </label>
                  <select
                    id="icon"
                    name="icon"
                    onChange={handleChange}
                    value={values?.icon}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Selecione um valor</option>
                    <option value="WhatsApp">Whatsapp</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Spotify">Spotify</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Email">E-mail</option>
                    <option value="Cardapio">Cardápio</option>
                    <option value="Agendamento">Agendamento</option>
                    <option value="Localizacao">Localização</option>
                    <option value="Site">Site</option>
                    <option value="Wifi">Wi-Fi</option>
                    <option value="Tiktok">Tiktok</option>
                    <option value="Telefone">Telefone</option>
                    <option value="Telegram">Telegram</option>
                  </select>
                </div>

                <div className="col-span-'1 sm:col-span-1">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Estilo do Icone
                  </label>
                  <select
                    id="icon"
                    name="weight"
                    onChange={handleChange}
                    value={values?.weight}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Selecione um valor</option>
                    <option value="bold">Negrito</option>
                    <option value="thin">Fina</option>
                    <option value="light">Suave</option>
                    <option value="regular">Normal</option>
                    <option value="fill">Extra fina</option>
                    <option value="duotone">Com Bordas</option>
                  </select>
                </div>

                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tamanho do icone
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={handleChange}
                      value={values?.size}
                      type="text"
                      name="size"
                      placeholder="EX: 12"
                      id="size"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-1">
                  <label
                    htmlFor="color"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cor do Icone
                  </label>
                  <input
                    onChange={handleChange}
                    value={values?.color}
                    type="color"
                    name="color"
                    id="color"
                    className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Carde de visualização */}
            <div className="flex justify-center my-8">
              {values && (
                <LinkCad
                  id={"1"}
                  onDelete={async () => {
                    return false;
                  }}
                  text={values?.text}
                  link={values?.link}
                  backgroundColor={{
                    type: values?.type,
                    firstColor: values?.firstcolor,
                    secondColor: values?.secondcolor,
                  }}
                  icon={{
                    icon: values?.icon,
                    color: values?.color,
                    weight: values?.weight,
                    size: values?.size,
                  }}
                />
              )}
            </div>

            {/* Actions */}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={async () => {
                  await Cria_Pagina();
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                    <span className="sr-only">Loading...</span>
                  </div>
                )}

                {!loading && "Salvar"}
              </button>
            </div>
          </div>

          <div
            style={{
              background:
                pagina?.type_de_fundo === "Colorido"
                  ? pagina?.cor_de_fundo_solida
                  : makeGradientLinearStyle2(
                      pagina?.direcao_do_degrade,
                      pagina?.primeira_cor,
                      pagina?.primeira_posicao,
                      pagina?.segunda_cor,
                      pagina?.segunda_posicao
                    ),
            }}
            className="mt-1  flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div className="flex gap-8 flex-row flex-wrap justify-center my-8 w-full">
              {links_criados.map((intem: Forme_link) => {
                return (
                  <LinkCad
                    id={intem?.id}
                    onDelete={onDelete}
                    text={intem?.text}
                    link={intem?.link}
                    backgroundColor={{
                      type: intem?.type,
                      firstColor: intem?.firstcolor,
                      secondColor: intem?.secondcolor,
                    }}
                    icon={{
                      icon: intem?.icon,
                      color: intem?.color,
                      weight: intem?.weight,
                      size: intem?.size,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {!pagina && (
        <div>
          <div className="shadow bg-white sm:rounded-md sm:overflow-hidden py-14 justify-center flex">
            <h1 className="text-2xl">
              Configura uma pagina antes de criar seus links
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
