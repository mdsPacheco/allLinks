import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, Phone, SpotifyLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react';



interface link{
  id: number;
  icon: string; 
  link: string;
  color: string;
}

interface linksCad {
  links: link[];
}

export function LinksCadsClienteColor({links}:linksCad){

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col p-2 flex-wrap justify-start gap-4 mt-4">
        {links.map(item => (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={item.id} 
            className="flex drop-shadow-2xl w-[100%] pt-4 pb-4 pl-14 pr-14 rounded-lg shadow-lg" 

            style={{ 
              background: item?.color
            }}
          >

            <div className="flex flex-row w-full justify-center items-center">
              
              {
                item.icon === "WhatsApp" ? (
                  <WhatsappLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Facebook" ? (
                  <FacebookLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Instagram" ? (
                  <InstagramLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Twitter" ? (
                  <TwitterLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Linkedin" ? (
                  <LinkedinLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Spotify" ? (
                  <SpotifyLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : item.icon === "Youtube" ? (
                  <YoutubeLogo className="w-8 h-8 mr-4" color="#fff" weight="bold"/>
                ) : (
                  <Phone className="w-8 h-8" />
                )
              }

              <h5 className="text-white text-xl leading-tight font-medium mb-2">{item.icon}</h5>

            </div>
          
          </a>
        ))}
      </div>
    </div>
  );
};