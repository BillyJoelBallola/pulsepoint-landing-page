import { Box, ChartNoAxesCombined, Grid3X3 } from "lucide-react";
import Subtitle from "../subtitle";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    name: "Rodrigo Mendez",
    label: "CryptoX",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Rika Shinoda",
    label: "Neopay",
    icon: Grid3X3,
  },
  {
    name: "Mary Ann",
    label: "Hypersphere SaaS",
    icon: Box,
  },
];

const Services = () => {
  return (
    <section className="side-margin my-16 md:my-24 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <Subtitle
          subtitle="Services"
          classStyling="justify-center md:justify-start"
        />
        <h2 className="text-4xl md:text-5xl text-center md:text-left">
          FINDING A SOLID CREW TO PULL OF AWRSOME STUFF IS TOUGH, BUT WE'VE GOT
          YOU COVERED WITH THE ABSOLUTE BEST.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            classStyle={idx === 1 ? "h-[250px] lg:h-[350px]" : ""}
            name={service.name}
            label={service.label}
            icon={service.icon}
            iconStyle={idx === 1 ? "md:size-90" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
