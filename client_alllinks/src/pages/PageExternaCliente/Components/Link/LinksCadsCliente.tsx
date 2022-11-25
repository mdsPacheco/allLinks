import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, Phone, SpotifyLogo, TwitterLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react';



interface link{
  id: number;
  icon: string; 
  link: string;
}

interface styleCustom {
  bg: {}
}

interface linksCad {
  styleCustom: styleCustom ;
  links: link[];
}

export function LinksCadsCliente({links, styleCustom}:linksCad){

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col p-2 flex-wrap justify-start gap-4 mt-4">
        {links.map(item => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id} className="flex drop-shadow-2xl w-[100%] pt-4 pb-4 pl-14 pr-14 rounded-lg shadow-lg bg-opacity-60 bg-clip-padding bg-white" 
            style={{ 
              backdropFilter: 'blur(20px)',
            }}
          
          
          >

            <div className="flex flex-row w-full justify-center items-center">
              
              {
                item.icon === "WhatsApp" ? (
                  <WhatsappLogo className="w-8 h-8 mr-4" color="#00BD39" weight="bold"/>
                ) : item.icon === "Facebook" ? (
                  <FacebookLogo className="w-8 h-8 mr-4" color="#1877F2" weight="bold"/>
                ) : item.icon === "Instagram" ? (
                  <InstagramLogo className="w-8 h-8 mr-4" color="#C8216F" weight="bold"/>
                ) : item.icon === "Twitter" ? (
                  <TwitterLogo className="w-8 h-8 mr-4" color="#0A66C2" weight="bold"/>
                ) : item.icon === "Linkedin" ? (
                  <LinkedinLogo className="w-8 h-8 mr-4" color="#0A66C2" weight="bold"/>
                ) : item.icon === "Spotify" ? (
                  <SpotifyLogo className="w-8 h-8 mr-4" color="#8B1DBF" weight="bold"/>
                ) : item.icon === "Youtube" ? (
                  <YoutubeLogo className="w-8 h-8 mr-4" color="#1DB954" weight="bold"/>
                ) : (
                  <Phone className="w-8 h-8" />
                )
              }

              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.icon}</h5>

            </div>
          
          </a>
        ))}
      </div>
    </div>
  );
};