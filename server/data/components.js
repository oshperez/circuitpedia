const componentData = [
  {
    id: 1,
    name: "Resistor",
    category: "Passive",
    description:
      "A resistor limits or regulates the flow of electric current in a circuit. It is commonly used to control voltage and current levels and to protect sensitive components.",
    image: "/images/components/resistor-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Inductor",
    category: "Passive",
    description:
      "An inductor stores energy in a magnetic field when current flows through it. Inductors are commonly used in filters, transformers, and energy storage circuits.",
    image: "/images/components/inductor-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Capacitor",
    category: "Passive",
    description:
      "A capacitor stores electrical energy in an electric field between two conductive plates separated by a dielectric material. It is commonly used for filtering, energy storage, and timing applications.",
    image: "/images/components/capacitor-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Fuse",
    category: "Protection",
    description:
      "A fuse is a safety device that protects electrical circuits by breaking the circuit when excessive current flows through it. The fuse element melts when the current exceeds its rating.",
    image: "/images/components/fuse-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Diode",
    category: "Active (Semiconductor)",
    description:
      "A diode allows current to flow in only one direction. It is widely used for rectification, signal demodulation, and protection circuits.",
    image: "/images/components/diode-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
  {
    id: 6,
    name: "Transistor",
    category: "Active (Semiconductor)",
    description:
      "A transistor is a semiconductor device used to amplify or switch electronic signals. It is one of the fundamental building blocks of modern electronic circuits.",
    image: "/images/components/transistor-symbol.svg",
    submittedOn: new Date().toISOString(),
  },
];

export default componentData;
