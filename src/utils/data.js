export const insuranceData = {
  auto: {
    name: "Seguro de Automóvil",
    description: "Cubre daños a tu vehículo y a terceros en caso de accidente.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: [
      "Daños a terceros",
      "Robo",
      "Daños por colisión",
      "Asistencia en carretera",
    ],
    priceRange: ["$500 - $2000", "$800 - $3000", "$1000 - $4000", "$600 - $2500"],
  },
  home: {
    name: "Seguro de Hogar",
    description: "Protege tu hogar contra incendios, robos y otros desastres.",
    svg: "srcassetshome-svgrepo-com.svg",
    coverage: ["Incendio", "Robo", "Daños por agua", "Responsabilidad civil"],
    priceRange: ["$1000 - $3000", "$1500 - $4000", "$2000 - $5000", "$1200 - $3500"],
  },
  health: {
    name: "Seguro de Salud",
    description: "Cubre gastos médicos en caso de enfermedad o accidente.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: [
      "Consultas médicas",
      "Hospitalización",
      "Cirugía",
      "Medicamentos recetados",
    ],
    priceRange: [
      "$200 - $500 por mes",
      "$300 - $700 por mes",
      "$400 - $1000 por mes",
      "$250 - $600 por mes",
    ],
  },
  life: {
    name: "Seguro de Vida",
    description: "Proporciona beneficios a los beneficiarios en caso de fallecimiento.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: [
      "Beneficio por fallecimiento",
      "Beneficio por invalidez",
      "Beneficio por enfermedad crítica",
      "Beneficio por educación de hijos",
    ],
    priceRange: [
      "$20 - $100 por mes",
      "$30 - $150 por mes",
      "$50 - $200 por mes",
      "$40 - $180 por mes",
    ],
  },
  travel: {
    name: "Seguro de Viaje",
    description: "Cubre gastos médicos y cancelaciones durante tus viajes.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: [
      "Asistencia médica",
      "Cancelación de viaje",
      "Equipaje perdido",
      "Reembolso de gastos de viaje",
    ],
    priceRange: [
      "$50 - $200 por viaje",
      "$100 - $300 por viaje",
      "$150 - $400 por viaje",
      "$80 - $250 por viaje",
    ],
  },
  pet: {
    name: "Seguro para Mascotas",
    description: "Protege la salud de tus mascotas y cubre gastos veterinarios.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: ["Consultas veterinarias", "Vacunas", "Cirugías", "Hospitalización"],
    priceRange: [
      "$10 - $50 por mes",
      "$20 - $70 por mes",
      "$30 - $90 por mes",
      "$15 - $60 por mes",
    ],
  },
  disability: {
    name: "Seguro de Incapacidad",
    description:
      "Proporciona beneficios en caso de incapacidad para trabajar debido a lesiones o enfermedades.",
    svg: `<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-4v5a1 1 0 0 1-1 1H4v4h5a1 1 0 0 1 1 1v5h4v-5a1 1 0 0 1 1-1h5v-4h-5a1 1 0 0 1-1-1V4z"/></svg>`,
    coverage: [
      "Beneficio por incapacidad temporal",
      "Beneficio por incapacidad permanente",
      "Rehabilitación",
      "Gastos de adaptación del hogar",
    ],
    priceRange: [
      "$30 - $150 por mes",
      "$40 - $180 por mes",
      "$50 - $200 por mes",
      "$35 - $160 por mes",
    ],
  },
};
