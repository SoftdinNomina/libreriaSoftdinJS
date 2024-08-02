class EnumConceptosCertificacion {
    static NIT = 1;
    static RAZON_SOCIAL = 2;
    static SIGLA = 3;
    static REPRESENTANTE_LEGAL = 4;
    static TIPO_IDENTIFICACION = 5;
    static IDENTIFICACION = 6;
    static LUGAR_EXPEDICION = 7;
    static APELLIDOS_NOMBRES = 8;
    static CARGO = 9;
    static SALARIO = 10;
    static FECHA_PERIODO_INICIO_LARGO = 11;
    static FECHA_PERIODO_INICIO_CORTO = 12;
    static FECHA_PERIODO_FINAL_LARGO = 13;
    static FECHA_PERIODO_FINAL_CORTO = 14;
    static SUCURSAL = 15;
    static SEDE = 16;
    static DIVISION = 17;
    static TIPO_CONTRATO = 18;
    static AREA_TRABAJO = 19;
    static BANCO = 20;
    static TIPO_CUENTA_BANCARIA = 21;
    static CUENTA_BANCARIA = 22;
    static EPS = 23;
    static AFP = 24;
    static CESANTIAS = 25;
    static MOTIVO_RETIRO = 26;
    static FECHA_ACTUAL_LARGO = 27;
    static FECHA_ACTUAL_CORTO = 27;
    static DESCRIPCION_CARGO = 29;
    static SALARIO_LETRAS = 30;
    static DESCRIPCION_CONTRATO = 31;
    static PRESTACION_SERVICIO = 32;
    static MODALIDAD_CONTRATACION = 33;
    static PORCENTAJE_ARP = 34;
    static CEDULA_REPRESENTANTE_LEGAL = 35;
    static CCF = 36;
    static FECHA_NACIMIENTO_LARGO = 37;
    static FECHA_NACIMIENTO_CORTO = 38;
    static BARRIO = 39;
    static DIRECCION_RESIDENCIAL = 40;
    static LUGAR_NACIMIENTO = 41;
    static OBJETIVO_CONTRATO = 42;
    static RETEFUENTE_PROCEDIMIENTO = 43;
    static BONIFICACION_HS = 44;
    static CONSECUTIVO_CONTRATO = 45;
    static PERIODO_PRUEBA = 46;
    static SALARIO_DIA = 47;
    static DURACION_CONTRATO = 48;
    static TELEFONO = 49;
    static CELULAR = 50;
    static EMAIL = 51;
    static TEL_EMERGENCIA = 52;

    static descriptions = [
        { id: EnumConceptosCertificacion.NIT, code: "NIT", description: '<<01>>' },
        { id: EnumConceptosCertificacion.RAZON_SOCIAL, code: "RAZON SOCIAL", description: '<<02>>' },
        { id: EnumConceptosCertificacion.SIGLA, code: "SIGLA", description: '<<03>>' },
        { id: EnumConceptosCertificacion.REPRESENTANTE_LEGAL, code: "REPRESENTANTE LEGAL", description: '<<04>>' },
        { id: EnumConceptosCertificacion.TIPO_IDENTIFICACION, code: "TIPO IDENTIFICACION", description: '<<05>>' },
        { id: EnumConceptosCertificacion.IDENTIFICACION, code: "IDENTIFICACION", description: '<<06>>' },
        { id: EnumConceptosCertificacion.LUGAR_EXPEDICION, code: "LUGAR EXPEDICION", description: '<<07>>' },
        { id: EnumConceptosCertificacion.APELLIDOS_NOMBRES, code: "APELLIDOS NOMBRES", description: '<<08>>' },
        { id: EnumConceptosCertificacion.CARGO, code: "CARGO", description: '<<09>>' },
        { id: EnumConceptosCertificacion.SALARIO, code: "SALARIO", description: '<<10>>' },
        { id: EnumConceptosCertificacion.FECHA_PERIODO_INICIO_LARGO, code: "FECHA PERIODO INICIO LARGO", description: '<<11>>' },
        { id: EnumConceptosCertificacion.FECHA_PERIODO_INICIO_CORTO, code: "FECHA PERIODO INICIO CORTO", description: '<<12>>' },
        { id: EnumConceptosCertificacion.FECHA_PERIODO_FINAL_LARGO, code: "FECHA PERIODO FINAL LARGO", description: '<<13>>' },
        { id: EnumConceptosCertificacion.FECHA_PERIODO_FINAL_CORTO, code: "FECHA PERIODO FINAL CORTO", description: '<<14>>' },
        { id: EnumConceptosCertificacion.SUCURSAL, code: "SUCURSAL", description: '<<15>>' },
        { id: EnumConceptosCertificacion.SEDE, code: "SEDE", description: '<<16>>' },
        { id: EnumConceptosCertificacion.DIVISION, code: "DIVISION", description: '<<17>>' },
        { id: EnumConceptosCertificacion.TIPO_CONTRATO, code: "TIPO CONTRATO", description: '<<18>>' },
        { id: EnumConceptosCertificacion.AREA_TRABAJO, code: "AREA TRABAJO", description: '<<19>>' },
        { id: EnumConceptosCertificacion.BANCO, code: "BANCO", description: '<<20>>' },
        { id: EnumConceptosCertificacion.TIPO_CUENTA_BANCARIA, code: "TIPO CUENTA BANCARIA", description: '<<21>>' },
        { id: EnumConceptosCertificacion.CUENTA_BANCARIA, code: "CUENTA BANCARIA", description: '<<22>>' },
        { id: EnumConceptosCertificacion.EPS, code: "EPS", description: '<<23>>' },
        { id: EnumConceptosCertificacion.AFP, code: "AFP", description: '<<24>>' },
        { id: EnumConceptosCertificacion.CESANTIAS, code: "CESANTIAS", description: '<<25>>' },
        { id: EnumConceptosCertificacion.MOTIVO_RETIRO, code: "MOTIVO RETIRO", description: '<<26>>' },
        { id: EnumConceptosCertificacion.FECHA_ACTUAL_LARGO, code: "FECHA ACTUAL LARGO", description: '<<27>>' },
        { id: EnumConceptosCertificacion.FECHA_ACTUAL_CORTO, code: "FECHA ACTUAL CORTO", description: '<<27>>' },
        { id: EnumConceptosCertificacion.DESCRIPCION_CARGO, code: "DESCRIPCION CARGO", description: '<<29>>' },
        { id: EnumConceptosCertificacion.SALARIO_LETRAS, code: "SALARIO LETRAS", description: '<<30>>' },
        { id: EnumConceptosCertificacion.DESCRIPCION_CONTRATO, code: "DESCRIPCION CONTRATO", description: '<<31>>' },
        { id: EnumConceptosCertificacion.PRESTACION_SERVICIO, code: "PRESTACION SERVICIO", description: '<<32>>' },
        { id: EnumConceptosCertificacion.MODALIDAD_CONTRATACION, code: "MODALIDAD CONTRATACION", description: '<<33>>' },
        { id: EnumConceptosCertificacion.PORCENTAJE_ARL, code: "PORCENTAJE ARL", description: '<<34>>' },
        { id: EnumConceptosCertificacion.CEDULA_REPRESENTANTE_LEGAL, code: "CEDULA REPRESENTANTE LEGAL", description: '<<35>>' },
        { id: EnumConceptosCertificacion.CCF, code: "CCF", description: '<<36>>' },
        { id: EnumConceptosCertificacion.FECHA_NACIMIENTO_LARGO, code: "FECHA NACIMIENTO LARGO", description: '<<37>>' },
        { id: EnumConceptosCertificacion.FECHA_NACIMIENTO_CORTO, code: "FECHA NACIMIENTO CORTO", description: '<<38>>' },
        { id: EnumConceptosCertificacion.BARRIO, code: "BARRIO", description: '<<39>>' },
        { id: EnumConceptosCertificacion.DIRECCION_RESIDENCIAL, code: "DIRECCION RESIDENCIAL", description: '<<40>>' },
        { id: EnumConceptosCertificacion.LUGAR_NACIMIENTO, code: "LUGAR NACIMIENTO", description: '<<41>>' },
        { id: EnumConceptosCertificacion.OBJETIVO_CONTRATO, code: "OBJETIVO CONTRATO", description: '<<42>>' },
        { id: EnumConceptosCertificacion.RETEFUENTE_PROCEDIMIENTO, code: "RETEFUENTE PROCEDIMIENTO", description: '<<43>>' },
        { id: EnumConceptosCertificacion.BONIFICACION_HS, code: "BONIFICACION HS", description: '<<44>>' },
        { id: EnumConceptosCertificacion.CONSECUTIVO_CONTRATO, code: "CONSECUTIVO CONTRATO", description: '<<45>>' },
        { id: EnumConceptosCertificacion.PERIODO_PRUEBA, code: "PERIODO PRUEBA", description: '<<46>>' },
        { id: EnumConceptosCertificacion.SALARIO_DIA, code: "SALARIO DIA", description: '<<47>>' },
        { id: EnumConceptosCertificacion.DURACION_CONTRATO, code: "DURACION CONTRATO", description: '<<48>>' },
        { id: EnumConceptosCertificacion.TELEFONO, code: "TELEFONO", description: '<<49>>' },
        { id: EnumConceptosCertificacion.CELULAR, code: "CELULAR", description: '<<50>>' },
        { id: EnumConceptosCertificacion.EMAIL, code: "EMAIL", description: '<<51>>' },
        { id: EnumConceptosCertificacion.TEL_EMERGENCIA, code: "TEL EMERGENCIA", description: '<<52>>' },
    ];

    static getById(id) {
        return EnumConceptosCertificacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumConceptosCertificacion.descriptions;
    }

    static getByDescription(description) {
        return EnumConceptosCertificacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumConceptosCertificacion;