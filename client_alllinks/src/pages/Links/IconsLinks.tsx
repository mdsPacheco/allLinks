import React from "react";
import {
  FacebookLogo,
  IconWeight,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  SpotifyLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
  EnvelopeSimple,
  ForkKnife,
  CalendarCheck,
  MapPin,
  Globe,
  WifiHigh,
  TiktokLogo,
  TelegramLogo,
  Bank,
} from "phosphor-react";

export interface Icon {
  icon: string;
  color: string;
  weight: IconWeight;
  size: number;
}

export function IconsLinks({ icon, color, weight, size }: Icon) {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      {icon === "WhatsApp" ? (
        <WhatsappLogo size={size} color={color} weight={weight} />
      ) : icon === "Facebook" ? (
        <FacebookLogo size={size} color={color} weight={weight} />
      ) : icon === "Instagram" ? (
        <InstagramLogo size={size} color={color} weight={weight} />
      ) : icon === "Twitter" ? (
        <TwitterLogo size={size} color={color} weight={weight} />
      ) : icon === "Linkedin" ? (
        <LinkedinLogo size={size} color={color} weight={weight} />
      ) : icon === "Spotify" ? (
        <SpotifyLogo size={size} color={color} weight={weight} />
      ) : icon === "Youtube" ? (
        <YoutubeLogo size={size} color={color} weight={weight} />
      ) : icon === "Email" ? (
        <EnvelopeSimple size={size} color={color} weight={weight} />
      ) : icon === "Cardapio" ? (
        <ForkKnife size={size} color={color} weight={weight} />
      ) : icon === "Agendamento" ? (
        <CalendarCheck size={size} color={color} weight={weight} />
      ) : icon === "Localizacao" ? (
        <MapPin size={size} color={color} weight={weight} />
      ) : icon === "Site" ? (
        <Globe size={size} color={color} weight={weight} />
      ) : icon === "Wifi" ? (
        <WifiHigh size={size} color={color} weight={weight} />
      ) : icon === "Tiktok" ? (
        <TiktokLogo size={size} color={color} weight={weight} />
      ) : icon === "Telefone" ? (
        <Phone size={size} color={color} weight={weight} />
      ) : icon === "Telegram" ? (
        <TelegramLogo size={size} color={color} weight={weight} />
      ) : icon === "Pix" ? (
        <Bank size={size} color={color} weight={weight} />
      ) : (
        <Phone />
      )}
    </div>
  );
}
