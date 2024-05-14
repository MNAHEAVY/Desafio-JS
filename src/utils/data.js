export const insuranceData = {
  auto: {
    name: "Seguro de Automóvil",
    description: "Cubre daños a tu vehículo y a terceros en caso de accidente.",
    svg: "m3 8 2.722 2.268a1 1 0 0 0 .64.232h11.276a1 1 0 0 0 .64-.232L21 8M6.5 14h.01m10.99 0h.01M8.16 4.5h7.68a2 2 0 0 1 1.736 1.008l2.897 5.07A4 4 0 0 1 21 12.562V18.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5.938a4 4 0 0 1 .527-1.984l2.897-5.07A2 2 0 0 1 8.161 4.5M7 14a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0",
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
    svg: "M49 17c0-.55-.45-1-1-1H35c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1H17c-.55 0-1 .45-1 1v13c0 .55-.45 1-1 1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1 .45 1 1v13c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V35c0-.55.45-1 1-1h13c.55 0 1-.45 1-1z",
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
    svg: "m192 218.368 64 128.001 34.517-69.036h130.219q-45.087 86.74-164.736 192-119.649-105.26-164.736-192h71.254zM332.8 64C396.423 64 448 115.577 448 179.2q0 26.586-9.235 55.466H311.85L288 186.965l-32 63.98-64-127.98-55.872 111.703-62.893-.001Q64 205.786 64 179.2C64 115.577 115.577 64 179.2 64c29.513 0 56.434 11.098 76.817 29.348C276.383 75.091 303.297 64 332.8 64",
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
    svg: "M18 16h9v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V16h9v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-1-2h-2v3h2zm10-2v3h-9v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H5v-3a3 3 0 0 1 3-3h4V4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h4a3 3 0 0 1 3 3 1 1 0 0 1-1 1v5h4a3 3 0 0 1 3 3m-8-8a1 1 0 0 1-1-1h-4a1 1 0 0 1-1 1v5h6zm3 28a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m-12 0a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2",
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
    svg: "M9.413.002c-1.244.144-1.95 1.507-2.04 2.692-.147 1.052.313 2.396 1.419 2.638.958.086 1.72-.815 2.034-1.674.37-1.075.38-2.51-.517-3.315a1.34 1.34 0 0 0-.896-.34M4.34.06C3.305.133 2.775 1.336 2.847 2.3c.009 1.291.717 2.743 2.01 3.05.964.103 1.607-.919 1.667-1.813C6.647 2.17 6.04.513 4.668.1A1.1 1.1 0 0 0 4.34.059m8.315 4.145c-1.388.101-2.266 1.581-2.327 2.918-.073.87.49 1.966 1.437 1.906 1.417-.15 2.27-1.73 2.235-3.1-.009-.79-.51-1.691-1.345-1.724M.011 6.009C-.118 7.49.919 9.165 2.425 9.258c.913-.061 1.343-1.121 1.238-1.96-.083-1.238-.91-2.505-1.985-2.67S-.006 5.222.01 6.008m7.148 1.263c-1.412.004-2.702.927-3.393 2.176-.578.933-1.05 1.99-1.14 3.105.02.86.84 1.576 1.663 1.405 1.173-.153 2.222-.968 3.443-.815 1.014.081 1.85.868 2.875.856.994.037 1.567-1.102 1.188-1.995-.408-1.277-1.199-2.389-2.048-3.39-.677-.738-1.565-1.374-2.588-1.342",
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
    svg: "M12.51 17.5c-.739 1.476-2.25 2.5-4.01 2.5A4.505 4.505 0 0 1 4 15.5a4.5 4.5 0 0 1 2.817-4.167l-.289-2.025C3.905 10.145 2 12.604 2 15.5 2 19.084 4.916 22 8.5 22a6.5 6.5 0 0 0 5.545-3.126l-.274-1.374z",
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
