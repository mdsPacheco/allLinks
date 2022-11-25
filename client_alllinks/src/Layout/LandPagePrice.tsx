import { SignIn } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

import img from "../styles/logo.png";

export function LandPagePrice(): JSX.Element {
  return (
    <div
      className="w-[100%] h-[100vh]  flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('//images01.nicepage.com/c461c07a441a5d220e8feb1a/b33b06a8cbdd51d8b00e4fdc/vvv-min.jpg')",
      }}
    >
      <div className="w-[100%] bg-white">
        <header className="container mx-auto">
          <nav className="h-[8vh] flex justify-between items-center">
            <img src={img} className="w-[250px] mt-4" />

            <ul className="text-3xl text-bold flex">
              <Link to={`/login`} style={{ color: "black" }}>
                {" "}
                <SignIn size={30} weight="bold" />
              </Link>
            </ul>
          </nav>
        </header>
      </div>

      <div className="w-[100%] h-[50vh] flex justify-center items-center" />

      <div className="h-[32vh] bg-white">
        <div className="container mx-auto w-[100%] flex justify-center gap-16 flex-wrap mt-[-16rem]">
          <div className="text-center w-[350px] bg-white drop-shadow-2xl rounded-[2rem]">
            <div>
              <div className="mb-12">
                <div className="mt-4">
                  <h3 className="text-[#43C6B8] text-3xl leading-9 font-bold">
                    Padrão
                  </h3>
                  <h4 className="text-6xl mt-4 font-bold">R$0</h4>
                  <h6 className="text-2xl font-semibold pb-6">Por mês</h6>
                </div>
              </div>

              <ul className="inline-block text-left">
                <li>
                  <span className="mr-4">●</span>
                  <span>
                    Propaganda limitada à <b>5 Links</b>
                  </span>
                </li>

                <li>
                  <span className="mr-4">●</span>
                  <span>Com propaganda</span>
                </li>
              </ul>
            </div>

            <button className="mt-10 mb-10 bg-[#43C6B8] text-[#ffffff] font-bold px-14 py-2 rounded-[2rem]">
              <Link to={`/cadastro`}>Comprar</Link>
            </button>
          </div>{" "}
          <div className="text-center w-[350px] bg-white drop-shadow-2xl rounded-[2rem]">
            <div>
              <div className=" mb-12 bg-[#43C6B8] rounded-t-[2rem]">
                <div className="">
                  <h3 className="text-[#ffffff] pt-4 text-3xl leading-9 font-bold">
                    Avançado
                  </h3>
                  <h4 className="text-6xl mt-4 text-[#ffffff] font-bold">
                    R$9,99
                  </h4>
                  <h6 className="text-2xl font-semibold pb-6 text-[#ffffff] ">
                    Por mês
                  </h6>
                </div>
              </div>

              <ul className="inline-block text-left">
                <li className="">
                  <span className="mr-4">●</span>
                  <span>Links infinitos</span>
                </li>

                <li className="">
                  <span className="mr-4">●</span>
                  <span>Sem propaganda</span>
                </li>
              </ul>
            </div>

            <button className="mt-10 mb-10 bg-[#43C6B8] text-[#ffffff] font-bold px-14 py-2 rounded-[2rem]">
              <Link to={`/cadastro`}>Comprar</Link>
            </button>
          </div>{" "}
          <div className="text-center w-[350px] bg-white drop-shadow-2xl rounded-[2rem]">
            <div>
              <div className="mb-12">
                <div className="mt-4">
                  <h3 className="text-[#43C6B8] text-3xl leading-9 font-bold">
                    Completo
                  </h3>
                  <h4 className="text-6xl mt-4 font-bold">R$49,90</h4>
                  <h6 className="text-2xl font-semibold pb-6 ">Por mês</h6>
                </div>
              </div>

              <ul className="inline-block text-left">
                <li>
                  <span className="mr-4">●</span>
                  <span>Links Infinitos</span>
                </li>

                <li>
                  <span className="mr-4">●</span>
                  <span>Sem propaganda</span>
                </li>

                <li>
                  <span className="mr-4">●</span>
                  <span>Gerar seu próprio QR Code</span>
                </li>
              </ul>
            </div>

            <button className="mt-10 mb-10 bg-[#43C6B8] text-[#ffffff] font-bold px-14 py-2 rounded-[2rem]">
              <Link to={`/cadastro`}>Comprar</Link>
            </button>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 sm:h-[5vh] md:h-[5vh] lg:h-[5vh] xl:h-[10vh] w-[100%] flex justify-center items-center bg-slate-700">
        <a href="https://alllinks.com.br/">alllinks.com.br </a>
      </footer>
    </div>
  );
}
