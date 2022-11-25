import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import useInputCustom from "../../hooks/useInput";

import QRCode from "react-qr-code";
import useClasseSelect from "../../hooks/useClasseSelect";
import api from "../../services/api";

interface Forme {
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

export function FormeUrl() {
  const { makeGradientLinearStyle2 } = useClasseSelect();

  const { user, pagina, setPagina } = useContext(AuthContext);
  const { values, handleChange } = useInputCustom<Forme | null>(pagina);

  const [loading, sloading] = useState<boolean>(false);

  const Cria_Pagina = useCallback(async () => {
    const dados = {
      url_path: values?.url_path,
      link_rout: values?.link_rout === true ? 1 : 0,
      produto_rout: values?.produto_rout === true ? 1 : 0,
      type_de_fundo: values?.type_de_fundo,
      cor_de_fundo_solida: values?.cor_de_fundo_solida,
      direcao_do_degrade: values?.direcao_do_degrade,
      primeira_cor: values?.primeira_cor,
      primeira_posicao: values?.primeira_posicao,
      segunda_cor: values?.segunda_cor,
      segunda_posicao: values?.segunda_posicao,
    };

    try {
      const pg = await api.post(`/Create_Page`, dados);
      setPagina(pg.data.result);
      console.log("Sucesso");
    } catch (error) {
      console.log(error);
    }
  }, [values]);

  const Atualiza_Pagina = useCallback(async () => {
    sloading(true);
    const dados = {
      id: pagina?.id,
      url_path: values?.url_path,
      link_rout: values?.link_rout === true ? 1 : 0,
      produto_rout: values?.produto_rout === true ? 1 : 0,
      type_de_fundo: values?.type_de_fundo,
      cor_de_fundo_solida: values?.cor_de_fundo_solida,
      direcao_do_degrade: values?.direcao_do_degrade,
      primeira_cor: values?.primeira_cor,
      primeira_posicao: values?.primeira_posicao,
      segunda_cor: values?.segunda_cor,
      segunda_posicao: values?.segunda_posicao,
    };
    try {
      await api.put(`/Update_Page`, dados);
      console.log("Sucesso");
      sloading(false);
    } catch (error) {
      sloading(false);
      console.log(error);
    }
  }, [values]);

  return (
    <div>
      <div className="md:grid md:grid-cols-5 md:gap-1">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              QrCode
            </h3>

            <p className="mt-1 text-sm text-gray-600">
              Sua marca a dois clicks de ter um qrcode e uma pagina toda
              customizada
            </p>

            <div className="mt-1">
              <QRCode
                size={100}
                value={"https://appalllinks.com.br/" + values?.url_path}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-4">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              {/* Url */}
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-3">
                  <label
                    htmlFor="url_path"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Url
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://appalllinks.com.br/
                    </span>
                    <input
                      onChange={handleChange}
                      value={values?.url_path}
                      type="text"
                      name="url_path"
                      placeholder="url"
                      id="url_path"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Check box Rotas */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onChange={handleChange}
                    checked={values?.link_rout}
                    id="link"
                    name="link_rout"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="link" className="font-medium text-gray-700">
                    Links
                  </label>
                  <p className="text-gray-500">
                    Todos os seus links em um só lugar.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onChange={handleChange}
                    checked={values?.produto_rout}
                    id="produto"
                    name="produto_rout"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="produto"
                    className="font-medium text-gray-700"
                  >
                    Produtos
                  </label>
                  <p className="text-gray-500">
                    Todos os seus produtos em um só lugar.
                  </p>
                </div>
              </div>

              {/* Background config */}
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="type_de_fundo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de fundo da página
                  </label>
                  <select
                    id="type_de_fundo"
                    name="type_de_fundo"
                    onChange={handleChange}
                    value={values?.type_de_fundo}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Selecione um valor</option>
                    <option value="Colorido">Colorido</option>
                    <option value="Degrade">Degrade</option>
                  </select>
                </div>

                {values?.type_de_fundo == "Colorido" && (
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="cor_de_fundo_solida"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cor de fundo Solida
                    </label>
                    <input
                      onChange={handleChange}
                      value={values?.cor_de_fundo_solida}
                      type="color"
                      name="cor_de_fundo_solida"
                      placeholder="url"
                      id="cor_de_fundo_solida"
                      className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                )}

                {values?.type_de_fundo == "Degrade" && (
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="direcao_do_degrade"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Direção do gradiente
                    </label>
                    <select
                      id="country"
                      name="direcao_do_degrade"
                      value={values?.direcao_do_degrade}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Selecione um valor</option>
                      <option value="90deg">Esquerda para Direita</option>
                      <option value="270deg">Direita para Esquerda</option>
                      <option value="0deg">Topo para Baixo</option>
                      <option value="180deg">Baixo para Topo</option>
                    </select>
                  </div>
                )}
              </div>

              {/* position do degrade */}
              {values?.type_de_fundo == "Degrade" && (
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <label
                      htmlFor="primeira_cor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cor de inicio
                    </label>
                    <input
                      onChange={handleChange}
                      value={values?.primeira_cor}
                      type="color"
                      name="primeira_cor"
                      placeholder="url"
                      id="primeira_cor"
                      className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="primeira_posicao"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Posição da cor
                    </label>
                    <input
                      value={values?.primeira_posicao}
                      onChange={handleChange}
                      type="text"
                      name="primeira_posicao"
                      placeholder="Ex: 100"
                      id="primeira_posicao"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              )}
              {values?.type_de_fundo == "Degrade" && (
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-21">
                    <label
                      htmlFor="segunda_cor"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cor final
                    </label>
                    <input
                      value={values?.segunda_cor}
                      onChange={handleChange}
                      type="color"
                      name="segunda_cor"
                      placeholder="segunda_cor"
                      id="segunda_cor"
                      className="focus:ring-indigo-500 focus:border-indigo-500 mt-0 h-10 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      htmlFor="segunda_posicao"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Posição da cor
                    </label>
                    <input
                      value={values?.segunda_posicao}
                      onChange={handleChange}
                      type="text"
                      name="segunda_posicao"
                      placeholder="Ex: 100"
                      id="segunda_posicao"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              )}

              <div
                style={{
                  background:
                    values?.type_de_fundo === "Colorido"
                      ? values?.cor_de_fundo_solida
                      : makeGradientLinearStyle2(
                          values?.direcao_do_degrade,
                          values?.primeira_cor,
                          values?.primeira_posicao,
                          values?.segunda_cor,
                          values?.segunda_posicao
                        ),
                }}
                className="mt-1 h-72 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              ></div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {!pagina && (
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
              )}

              {pagina && (
                <button
                  onClick={async () => {
                    await Atualiza_Pagina();
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

                  {!loading && "Atualizar"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
