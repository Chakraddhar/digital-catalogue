import solar from "../assets/products/solar.jpg";
import inverter from "../assets/products/inverter.jpg";
import battery from "../assets/products/battery.jpg";

export const products = [
  {
    id: "solar-panel",
    name: "Solar Panel",
    image: solar,
    description: "High efficiency solar panels for residential and commercial use.",
    features: ["High efficiency", "Weather resistant", "Long lifespan"],
  },
  {
    id: "power-inverter",
    name: "Power Inverter",
    image: inverter,
    description: "Smart inverters with advanced power management.",
    features: ["Smart monitoring", "Low power loss", "Silent operation"],
  },
  {
    id: "energy-battery",
    name: "Energy Battery",
    image: battery,
    description: "Reliable batteries for long-lasting energy storage.",
    features: ["Fast charging", "High backup", "Safe technology"],
  },
];
