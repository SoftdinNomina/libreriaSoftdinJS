class EnumModulosNovedades {
    static AporteVoluntarioSeguridadSocial = 1;
    static Embargos = 2;
    static HorasExtras = 3;
    static FondosAhorroRegistros = 4;
    static FondosAhorroPago = 5;
    static IngresosDescuentosConsecutivos = 6;
    static NovedadesCargos = 7;
    static BeneficioPersonal = 8;
    static NovedadesSeguridadSocial = 9;
    static NovedadesReteFuente = 10;
    static OtrosIngresosDescuentos = 11;
    static Pagos_Externos = 12;
    static Prestamos = 13;
    // static SaldosIniciales = 14;

    static descriptions = [
        { id: EnumModulosNovedades.AporteVoluntarioSeguridadSocial, code: 'AVSS', description: 'Aporte Voluntario Seguridad Social' },
        { id: EnumModulosNovedades.Embargos, code: 'EMB', description: 'Embargos' },
        { id: EnumModulosNovedades.HorasExtras, code: 'HE', description: 'Horas Extras' },
        { id: EnumModulosNovedades.FondosAhorroRegistros, code: 'FAR', description: 'Fondos Ahorro Registros' },
        { id: EnumModulosNovedades.FondosAhorroPago, code: 'FAP', description: 'Fondos Ahorro Pago' },
        { id: EnumModulosNovedades.IncapacidadValorizada, code: 'IV', description: 'Incapacidad Valorizada' },
        { id: EnumModulosNovedades.IngresosDescuentosConsecutivos, code: 'IDC', description: 'Ingresos Descuentos Consecutivos' },
        { id: EnumModulosNovedades.NovedadesCargos, code: 'NC', description: 'Novedades Cargos' },
        { id: EnumModulosNovedades.BeneficioPersonal, code: 'BP', description: 'Beneficio Personal' },
        { id: EnumModulosNovedades.NovedadesSeguridadSocial, code: 'NSS', description: 'Novedades Seguridad Social' },
        { id: EnumModulosNovedades.NovedadesReteFuente, code: 'NRF', description: 'Novedades Rete Fuente' },
        { id: EnumModulosNovedades.OtrosIngresosDescuentos, code: 'OID', description: 'Otros Ingresos Descuentos' },
        { id: EnumModulosNovedades.Pagos_Externos, code: 'PE', description: 'Pagos Externos' },
        { id: EnumModulosNovedades.Prestamos, code: 'PRE', description: 'Prestamos' },
        // { id: EnumModulosNovedades.SaldosIniciales, code: 'SI', description: 'Saldos Iniciales' },
    ];

    static getById(id) {
        return EnumModulosNovedades.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumModulosNovedades.descriptions;
    }

    static getByDescription(description) {
        return EnumModulosNovedades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModulosNovedades;
