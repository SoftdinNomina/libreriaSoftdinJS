class EnumModulos {
  static CONTRATACION = 1;
  static PRESTAMO = 2;
  // static SaldosIniciales = 14;

  static descriptions = [
    {
      id: EnumModulos.CONTRATACION,
      code: "CONTRATACION",
      description: "Contratación",
    },
    { id: EnumModulos.PRESTAMO, code: "PRESTAMO", description: "Prestamo" },
  ];

  static getById(id) {
    return EnumModulos.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumModulos.descriptions;
  }

  static getByDescription(description) {
    return (
      EnumModulos.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }
}

module.exports = EnumModulos;
