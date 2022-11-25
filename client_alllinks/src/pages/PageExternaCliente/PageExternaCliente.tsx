import { IconWeight } from 'phosphor-react';
import React, { useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import useClasseSelect from '../../hooks/useClasseSelect';
import api from '../../services/api';
import { LinkCad } from './Components/Link/LinksCads';
import { Profile } from './Components/Profile/Profile';

import img from '../../styles/logo.png'

const  styleCustomProfile = {
  styleCustom: {
    name: {
      color: "white"
    },
    biography: {
      color: "white"
    }
  }

}


interface page {
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
declare type Type = "Colorido" | "Gradiente" | "Transparente" ;

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

interface Profile_bd {
  photo_file: string;
  fist_name: string;
  last_name: string;
  biography: string;
}


export function PageExternaCliente() {
  let { id } = useParams();

  const {makeGradientLinearStyle2} = useClasseSelect()
  const [cliente, setCliente] = useState(false);
  const [links_bd, slinks_bd] = useState<Forme_link[]>();
  const [page_bd, spage_bd] = useState<page>();
  const [profile_bd, sprofile_bd] = useState<Profile_bd>();


  const handleChange = () => {
    setCliente(!cliente);
  }

  useEffect(() => {
    async function getUser() {
      try {
        const pg =  await api.get(`/Index_Page_Url/${id}`)
        console.log(pg.data)

        spage_bd(pg.data.pagina)
        slinks_bd(pg.data.links)
        sprofile_bd(pg.data.user)

      } catch (error) {
        console.log(error)
      }
    }
    getUser(); 
  }, []);




  if(!links_bd && !page_bd){

    return <h1></h1>

  }




  return (
    <div 
      style={{
        background: page_bd?.type_de_fundo === "Colorido" ? page_bd?.cor_de_fundo_solida : 
        makeGradientLinearStyle2(
          page_bd?.direcao_do_degrade, 
          page_bd?.primeira_cor , 
          page_bd?.primeira_posicao , 
          page_bd?.segunda_cor , 
          page_bd?.segunda_posicao)
      }}
    >


      <header>

        <nav className="flex justify-between items-center h-[8vh]">
          <img src={img} className="w-[250px] mt-4"/>

          <div className="cursor-pointer block mr-4 sm:hidden" onClick={handleChange}>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>

          <ul className={`
            list-none flex

            sm:flex-row
            sm:static
            sm:translate-x-[0]
            sm:h-[8vh] 
            sm:mr-4
            sm:max-w-sm

            flex-col 
            absolute 
            items-center
            top-[8vh] 
            right-0 
            min-w-[250px]  
            h-[92vh]

            translate-x-[100%]
            transition-transform ease-in
          
            ${cliente ? "translate-x-[0]" : ""}
          `}
          
          >

            <li className="tracking-[3px] sm:ml-[32px]">
              <Link to={`/index/link/${id}`}  style={{ color: "white"}} > Links </Link>
            </li>

            <li className="tracking-[3px] sm:ml-[32px]">
              <Link to={`/index/produtos/${id}`}  style={{ color: "white"}} > Produtos </Link>
            </li>
   
          </ul>

        </nav>

      </header>

        

      <main  className="h-[92vh] ">
        <Profile 
          photo_file = {profile_bd?.photo_file}
          fist_name = {profile_bd?.fist_name}
          last_name = {profile_bd?.last_name}
          biography = {profile_bd?.biography}
          styleCustom = {styleCustomProfile.styleCustom}
        />

        <div className="flex flex-row justify-center">
          <div className="flex flex-col p-2 flex-wrap justify-start gap-4 mt-4">

            {links_bd?.map((link, index) => {
              return (
                <LinkCad 
                
                  key={index}
                  icon={
                    {
                      icon: link.icon,
                      color: link.color,
                      weight: link.weight,
                      size: link.size
                    }
                  }
                  text={link.text}
                  link={link.link}
                  backgroundColor={
                    {
                      type: link.type,
                      firstColor: link.firstcolor,
                      secondColor: link.secondcolor
                    }
                  }
                />
              )
            })}

          </div>
        </div>

      </main>

    </div>
  );
}