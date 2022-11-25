import React from 'react'
import './products.css'


export function Products() {
  return (

    <div className='flex flex-col  m-4'>

      <div className='container_external_form'>

        <div className='container_internal_form'>

          {/* Primeira linha do formulário */}
          <div className='flex flex-row w-[100%] gap-1 m-2'>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Código do Produto
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="text" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div>  
            </div>

            <div className="flex flex-col w-[60%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Descrição do produto
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                    type="text" 
                    id="text" 
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                  />
              </div> 
            </div>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Categorias
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>  
            </div>

          </div>

          {/* Segunda linha do formulário */}
          <div className='flex flex-row w-[100%] gap-1 m-2'>

            <div className="flex flex-col w-[50%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Imagem do Produto
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                    type="text" 
                    id="text" 
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                  />
              </div> 
            </div>

            <div className="flex flex-col w-[18%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Marca
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div> 
            </div>

            <div className="flex flex-col w-[18%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Fornecedor
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>  
            </div>

            <div className="flex flex-col w-[18%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Unidade
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>  
            </div>

          </div>

          {/* Terceira linha do formulário */}
          <div className='flex flex-row w-[100%] gap-1 m-2'>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Preço de Custo
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="text" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div> 
            </div>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Preço de Venda
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="text" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div>  
            </div>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Total em Estoque
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="number" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div> 
            </div>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Estoque Mínimo
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="number" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div> 
            </div>

            <div className="flex flex-col w-[20%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Estoque Máximo
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input 
                  type="number" 
                  id="text" 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                />
              </div> 
            </div>

          </div>

          {/* Quarta linha do formulário */}
          <div className='flex flex-row w-[100%] gap-1 m-2'>

            <div className="flex flex-col w-[50%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Status
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div> 
            </div>

            <div className="flex flex-col w-[50%]">
              <label 
                htmlFor="text" 
                className="mb-1 text-gray-500 font-medium text-lg"
              >
                Promoção
              </label>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <select 
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                  id="grid-state"
                >
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>  
            </div>

          </div>

          {/* Ações */}
          <div className='flex flex-row w-[100%] gap-1 m-2'>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Salvar
            </button>

          </div>

        </div>  
      </div>

      <div className='flex gap-10 flex-wrap w-full'>

        <div className="mt-3 gap-y-10 gap-x-6 xl:gap-x-8 max-w-xs bg-white rounded-md min-w-[15%] drop-shadow-2xl ">

          <div className="group relative">

            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img 
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" 
                alt="Front of men&#039;s Basic Tee in black." 
                className="w-full h-full object-center object-cover lg:w-full lg:h-full" 
              />
            </div>

            <div className="mt-4 flex justify-between p-2">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}
