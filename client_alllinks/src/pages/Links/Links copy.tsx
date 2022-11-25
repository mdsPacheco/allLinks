import React, { useContext, useState } from 'react'
import {
  WhatsappLogo, 
  Phone, 
  FacebookLogo, 
  InstagramLogo, 
  TwitterLogo, 
  LinkedinLogo, 
  SpotifyLogo, 
  YoutubeLogo,
  Trash
} from "phosphor-react";

import { useQuery, useMutation } from 'react-query'
import { queryClient } from '../../services/queryClinte';
import api from '../../services/api';
import { AuthContext } from '../../Context/AuthContext';

  
export function Links() {

  const [link, slink] = useState("");
  const [type_link, stype_link] = useState("");
  const [cor_of_buttom, scor_of_buttom] = useState("colorido");


  const {user} = useContext(AuthContext);


  const creating_links = useMutation(async () => {
    return await api.post('/WorkFlow/1', {
      link: link, 
      type_link: type_link, 
      icon: type_link,
      cor_of_buttom: cor_of_buttom,
      page_profile_id: links.data?.pagina?.id,
      user_created: user.email,
      created_at: "2022-01-01",
      user_updated: user.email,
      updated_at: "2022-01-01",
      col_value: "Myke",
      col: "path_page"
    })
  },
  {
    onSuccess: (data) => {
      queryClient.setQueryData('Links', data.data)
 
      slink("");
      stype_link("");
    }
  }
  );

  const deleted_links = useMutation(async (id) => {
    return await api.post('/WorkFlow/4', {
      id: id,
      field_by_id: "id",
      col_value: "Myke",
      col: "path_page"
    })
  },
  {
    onSuccess: (data) => {
      queryClient.setQueryData('Links', data.data)
      slink("");
      stype_link("");
    }
  }
  );

  const links = useQuery('Links', async () => {  
      const {data} = await api.post('/WorkFlow/9',{
        col_value: "Myke",
        col: "path_page"
      });
      return data;
    }
  );
  



    return (
      <div className='flex flex-col m-4'>

        {/* Formulário de contacto */}
        <div className='container_external_form'>
          <div className='container_internal_form'>

            {/* Primeira linha do formulário */}
            <div className='flex flex-row w-[100%] gap-1 m-2'>

              <div className="flex flex-col w-[80%]">
                <label 
                  htmlFor="description_card" 
                  className="mb-1 text-gray-500 font-medium text-lg"
                >
                  Descrição do Card
                </label>

                <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                  <input 
                    type="text" 
                    id="description_card" 
                    value={link}
                    onChange={(e) => slink(e.target.value)}
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none"
                  />
                </div> 
              </div>

              <div className="flex flex-col w-[20%]">
                <label 
                  htmlFor="text" 
                  className="mb-1 text-gray-500 font-medium text-lg"
                >
                  Tipo do Card
                </label>

                <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                  <select 
                    value={type_link}
                    onChange={(e) => stype_link(e.target.value)}
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                    id="grid-state"
                  >
                    <option>Selecione uma opção</option>
                    <option>Telefone</option>
                    <option>Facebook</option>
                    <option>Twitter</option>
                    <option>WhatsApp</option>
                    <option>LinkedIn</option>
                    <option>Spotify</option>
                    <option>YouTube</option>
                  </select>
                </div>  
              </div>

              <div className="flex flex-col w-[20%]">
                <label 
                  htmlFor="text" 
                  className="mb-1 text-gray-500 font-medium text-lg"
                >
                  Cor do Card
                </label>

                <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                  <select 
                    value={cor_of_buttom}
                    onChange={(e) => scor_of_buttom(e.target.value)}
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-2 text-base text-gray-800 focus:outline-none" 
                    id="grid-state"
                  >
                    <option>Selecione uma opção</option>
                    <option>Colorido</option>
                    <option>Escala de Cinza</option>
                  </select>
                </div>  
              </div>

            </div>

            {/* Ações */}
            <div className='flex flex-row w-[100%] gap-1 m-2 justify-center align-center'>

              {creating_links.isLoading ? (
                'Adicionando o link...'
              ) : (
                <>
                  {creating_links.isError ? (
                    <div>Aconteceu um erro</div>
                  ) : null}
      
                  <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                      creating_links.mutate()
                    }}
                  >
                    Create
                  </button>
                </>
              )}

            </div>
          </div> 
        </div>

        {/* Grade de Cards de links */}
        <div className="flex flex-row w-full h-full p-2 flex-wrap">

          {links.data?.links.map(item => (
            <div key={item.id} className="flex flex-col m-2 drop-shadow-2xl">

              

              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-96">

              <div className="flex flex-row justify-end items-center mb-2">
                <Trash size={23}  
                  onClick={() => {
                    deleted_links.mutate(item.id)
                  }}
                />
              </div>

                <div className="flex flex-row justify-between items-center">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.icon}</h5>

                  {
                    item.icon === "WhatsApp" ? (
                      <WhatsappLogo className="w-8 h-8" />
                    ) : item.icon === "Facebook" ? (
                      <FacebookLogo className="w-8 h-8" />
                    ) : item.icon === "Instagram" ? (
                      <InstagramLogo className="w-8 h-8" />
                    ) : item.icon === "Twitter" ? (
                      <TwitterLogo className="w-8 h-8" />
                    ) : item.icon === "Linkedin" ? (
                      <LinkedinLogo className="w-8 h-8" />
                    ) : item.icon === "Spotify" ? (
                      <SpotifyLogo className="w-8 h-8" />
                    ) : item.icon === "Youtube" ? (
                      <YoutubeLogo className="w-8 h-8" />
                    ) : (
                      <Phone className="w-8 h-8" />
                    )
                  }
                  {/* <Phone size={32} /> */}
                </div>

                <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500 mb-4" >
            
                  <input
                    type="text"
                    value={item.link}
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                    placeholder="Telefone"
                  />

                </div>

              </div>

            </div>
          ))}


        </div>

      </div>
    )
  }
  
   
  