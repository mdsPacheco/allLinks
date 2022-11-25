import { Trash } from "phosphor-react";
import React from "react";
import useClasseSelect from "../../hooks/useClasseSelect";
import { Icon, IconsLinks } from "./IconsLinks";

export declare type Type = "Colorido" | "Gradiente" | "Transparente";

interface BackgroundColor {
  type: Type;
  firstColor: string;
  secondColor?: string;
}

interface linksCad {
  id: string;
  text: string;
  link: string;
  backgroundColor: BackgroundColor;
  icon: Icon;
  onDelete: (id: any) => Promise<boolean>;
}

export function LinkCad({
  id,
  text,
  link,
  backgroundColor,
  icon,
  onDelete,
}: linksCad) {
  const { classNameBind } = useClasseSelect();
  let bg = {};

  if (backgroundColor.type === "Colorido") {
    bg = {
      backgroundColor: backgroundColor.firstColor,
      color: "white",
    };
  }
  if (backgroundColor.type === "Gradiente") {
    bg = {
      background: `linear-gradient(90deg, ${backgroundColor.firstColor} 0%, ${backgroundColor.secondColor} 100%)`,
      color: "white",
    };
  }

  return (
    <div className="group">
      <div className="flex-row justify-end items-center mb-2 hidden group-hover:flex text-white cursor-pointer ">
        <Trash
          size={23}
          onClick={async () => {
            await onDelete(id);
          }}
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameBind(
          "flex drop-shadow-2xl w-[17rem] pt-4 pb-4 pl-14 pr-14 rounded-lg shadow-lg",
          "",
          "bg-opacity-60 bg-clip-padding bg-white blur-0 text-gray-900",
          backgroundColor.type === "Transparente" ? false : true
        )}
        style={bg}
      >
        <div className="flex flex-row w-full justify-center items-center">
          <IconsLinks
            color={icon.color}
            icon={icon.icon}
            size={icon.size}
            weight={icon.weight}
          />

          <h5 className="text-xl leading-tight font-medium mb-[4px] ml-2">
            {text}
          </h5>
        </div>
      </a>
    </div>
  );
}
