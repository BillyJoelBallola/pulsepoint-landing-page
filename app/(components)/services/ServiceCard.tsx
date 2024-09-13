import Image from "next/image";
import React from "react";
import blockchain from "@/app/assets/blockchain.png";
import { LucideProps } from "lucide-react";

type Props = {
  classStyle?: string;
  iconStyle?: string;
  iconPosition?: string;
  name: string;
  label: string;
  icon: React.FC<LucideProps>;
};

const ServiceCard = ({
  classStyle,
  iconStyle,
  iconPosition,
  name,
  label,
  icon: Icon,
}: Props) => {
  return (
    <div
      className={`group relative shadow-lg cursor-pointer ${
        classStyle ? classStyle : "h-[250px]"
      }  rounded-md bg-zinc-800 p-4 overflow-hidden`}
    >
      <div
        className={`absolute ${
          iconPosition ? iconPosition : "-bottom-8 -right-20"
        } grid place-items-center w-full`}
      >
        <Icon
          className={`size-80 scale-x-[-1] text-zinc-600 group-hover:text-orange-100 ${iconStyle}`}
        />
      </div>
      <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-80 duration-300" />
      <div className="absolute -bottom-5 left-0 right-0 h-40 bg-gradient-to-t from-zinc-800 group-hover:from-orange-600/80" />
      <h3 className="absolute bottom-16 group-hover:bottom-20 duration-300 left-6 text-2xl md:text-3xl font-semibold">
        {label}
      </h3>
      <div className="absolute bottom-6 right-6 left-6 flex items-center justify-between">
        <span>{name}</span>
        <span className="text-xs">gmt. 2024</span>
      </div>
    </div>
  );
};

export default ServiceCard;
