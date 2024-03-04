class EnumCertificadoIngresosAportesListado {
    static No36 = 1;
    static No37 = 2;
    static No38 = 3;
    static No39 = 4;
    static No40 = 5;
    static No41 = 6;
    static No42 = 7;
    static No43 = 8;
    static No44 = 9;
    static No45 = 10;
    static No46 = 11;
    static No47 = 12;
    static No48 = 13;
    static No49 = 14;
    static No50 = 15;
    static No51 = 16;
    static No52 = 17;
    static No53 = 18;
    static No54 = 19;
    static No55 = 20;

    static descriptions = [
        { id: EnumCertificadoIngresosAportesListado.No36, code: 'No36', description: '36 Pagos por salario o emolumentos eclesiásticos' },
        { id: EnumCertificadoIngresosAportesListado.No37, code: 'No37', description: '37 Pagos realizados en bonos electrónicos o de papel de servicios, cheques, tarjetas, vales, etc.' },
        { id: EnumCertificadoIngresosAportesListado.No38, code: 'No38', description: '38 Pagos por honorarios' },
        { id: EnumCertificadoIngresosAportesListado.No39, code: 'No39', description: '39 Pagos por servicios' },
        { id: EnumCertificadoIngresosAportesListado.No40, code: 'No40', description: '40 Pagos por comisiones' },
        { id: EnumCertificadoIngresosAportesListado.No41, code: 'No41', description: '41 Pagos por prestaciones sociales' },
        { id: EnumCertificadoIngresosAportesListado.No42, code: 'No42', description: '42 Pagos por viáticos' },
        { id: EnumCertificadoIngresosAportesListado.No43, code: 'No43', description: '43 Pagos por gastos de representación' },
        { id: EnumCertificadoIngresosAportesListado.No44, code: 'No44', description: '44 Pagos por compensaciones por el trabajo asociado cooperativo' },
        { id: EnumCertificadoIngresosAportesListado.No45, code: 'No45', description: '45 Otros pagos' },
        { id: EnumCertificadoIngresosAportesListado.No46, code: 'No46', description: '46 Cesantías e intereses de cesantías efectivamente pagadas al empleado' },
        { id: EnumCertificadoIngresosAportesListado.No47, code: 'No47', description: '47 Cesantías consignadas al fondo de cesantías' },
        { id: EnumCertificadoIngresosAportesListado.No48, code: 'No48', description: '48 Pensiones de jubilación, vejez o invalidez' },
        { id: EnumCertificadoIngresosAportesListado.No49, code: 'No49', description: '49 Total de Ingresos brutas (suma 36 a 48)' },
        { id: EnumCertificadoIngresosAportesListado.No50, code: 'No50', description: '50 Aportes obligatorios por salud a cargo del trabajador' },
        { id: EnumCertificadoIngresosAportesListado.No51, code: 'No51', description: '51 Aportes obligatorios a fondos de pensiones y solidaridas pensional a cargo del trabajador' },
        { id: EnumCertificadoIngresosAportesListado.No52, code: 'No52', description: '52 Cotizaciones voluntarias al régimen de ahorro individual con solidaridad - RAIS' },
        { id: EnumCertificadoIngresosAportesListado.No53, code: 'No53', description: '53 Aportes voluntarios a fondos de pensiones' },
        { id: EnumCertificadoIngresosAportesListado.No54, code: 'No54', description: '54 Aportes a cuentas AFC' },
        { id: EnumCertificadoIngresosAportesListado.No55, code: 'No55', description: '55 Valor de la retención en la fuente por ingresos laborales y de pensiones' },
    ];

    static getById(id) {
        return EnumCertificadoIngresosAportesListado.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumCertificadoIngresosAportesListado.descriptions;
    }

    static getByDescription(description) {
        return EnumCertificadoIngresosAportesListado.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumCertificadoIngresosAportesListado;